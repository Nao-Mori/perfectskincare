import type { ImageLoader } from 'next/image';

export const cloudfrontLoader: ImageLoader = ({ src, width, quality }) =>
  `https://${process.env.NEXT_PUBLIC_ASSET_HOST}/${src}?w=${width}&q=${quality ?? 75}`;