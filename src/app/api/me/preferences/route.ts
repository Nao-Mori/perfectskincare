import { NextResponse } from 'next/server';
import type { Prisma } from '@prisma/client';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

export const runtime = 'nodejs';

function toSlugArray(input: string[]): string[] {
  if (!Array.isArray(input)) return [];
  const uniq = new Set<string>();
  for (const v of input) {
    if (typeof v === 'string') {
      const s = v.trim();
      if (s) uniq.add(s);
    }
  }
  return [...uniq];
}

export async function PUT(req: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const userId = session.user.id;

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  type Body = { skinType?: number; concerns?: string[] };
  const b = body as Body;

  const hasSkinType = Object.prototype.hasOwnProperty.call(b, 'skinType');
  const hasConcerns = Object.prototype.hasOwnProperty.call(b, 'concerns');

  if (!hasSkinType && !hasConcerns) {
    return NextResponse.json({ error: 'Nothing to update' }, { status: 400 });
  }

  const slugs = hasConcerns ? toSlugArray(b.concerns!) : undefined;
  const coc =
    slugs && slugs.length
      ? slugs.map((slug) => ({ where: { slug }, create: { slug } }))
      : undefined;

  const createData: Prisma.PreferenceCreateInput = {
    user: { connect: { id: userId } },
    skinType: b.skinType,
    concerns: { connectOrCreate: coc },
  };

  const updateData: Prisma.PreferenceUpdateInput = {
    skinType: b.skinType,
    concerns: { set: [], connectOrCreate: coc },
  };

  const pref = await prisma.preference.upsert({
    where: { userId },
    create: createData,
    update: updateData,
    select: {
      skinType: true,
      concerns: { select: { slug: true } },
    },
  });

  return NextResponse.json(
    {
      skinType: pref.skinType ?? null,
      concerns: pref.concerns.map((c) => c.slug),
    },
    { status: 200 }
  );
}
