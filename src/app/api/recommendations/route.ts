import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { Prisma } from '@prisma/client';

export const runtime = 'nodejs';

type Body = {
  skinType?: number | null;
  concerns?: unknown;
};

function toSlugArray(input: unknown): string[] {
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

  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const hasSkinType = Object.prototype.hasOwnProperty.call(body, 'skinType');
  const hasConcerns = Object.prototype.hasOwnProperty.call(body, 'concerns');

  if (!hasSkinType && !hasConcerns) {
    return NextResponse.json({ error: 'Nothing to update' }, { status: 400 });
  }

  const slugs = hasConcerns ? toSlugArray(body.concerns) : null;

  const createData: Prisma.PreferenceCreateInput = {
    user: { connect: { id: userId } },
  };
  const updateData: Prisma.PreferenceUpdateInput = {};

  if (hasSkinType) {
    createData.skinType = body.skinType ?? null;
    updateData.skinType = body.skinType ?? null;
  }

  if (hasConcerns) {
    if (slugs && slugs.length > 0) {
      const coc = slugs.map((slug) => ({
        where: { slug },
        create: { slug },
      }));
      createData.concerns = { connectOrCreate: coc };
      updateData.concerns = { set: [], connectOrCreate: coc };
    } else {
      updateData.concerns = { set: [] };
    }
  }

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
