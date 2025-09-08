"use client";

import { cloudfrontLoader } from "@/lib/cloudFrontLoader";
import Image from "next/image";
import { useState } from "react";

const FALLBACK = "/images/missing.png";

export function ProductImage({ src, alt }: { src?: string; alt: string }) {
  const [imgSrc, setImgSrc] = useState(src || FALLBACK);

  return (
    <Image
      loader={imgSrc === FALLBACK ? undefined : cloudfrontLoader}
      src={imgSrc}
      alt={alt}
      fill
      onError={() => setImgSrc(FALLBACK)}
      className="object-contain rounded-lg w-full"
    />
  );
}