import { NextResponse } from 'next/server';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

export const runtime = 'nodejs';

const s3 = new S3Client({ region: process.env.AWS_REGION });

const mimeToExt: Record<string, string> = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
  'image/avif': 'avif',
  'image/gif': 'gif',
};

export async function POST(req: Request) {
  try {
    const { fileType, fileName } = await req.json();

    if (!fileType || !fileName) {
      return NextResponse.json({ error: 'fileType and fileName required' }, { status: 400 });
    }

    const ext =
      mimeToExt[fileType] ??
      fileName.split('.').pop()?.toLowerCase() ??
      'bin';

    const key = `uploads/${Date.now()}-${crypto.randomUUID()}.${ext}`;

    const cmd = new PutObjectCommand({
      Bucket: process.env.S3_BUCKET!,
      Key: key,
      ContentType: fileType,
    });

    const uploadUrl = await getSignedUrl(s3, cmd, { expiresIn: 60 });

    const host = process.env.NEXT_PUBLIC_ASSET_HOST?.replace(/\/$/, '') ?? '';
    return NextResponse.json({
      uploadUrl, key,
      publicUrl: host ? `${host}/${key}` : undefined,
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: 'Failed to create upload URL', detail: err?.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}