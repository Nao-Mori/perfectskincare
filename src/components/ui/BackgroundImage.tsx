'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

export default function BackgroundImage () {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    //Lazy load to boost performance
    const timer = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  if (!loaded) return null;

  return (
    <div className="absolute w-full z-0 inset-0">
      <div className="flex flex-row-reverse justify-between gap-2">
        <div>
          <Image 
            alt="background" loading="lazy" src="/images/background.webp"
            className="w-full opacity-90" height={1536} width={1024}
          />
        </div>
        <div className="hidden lg:block">
          <Image 
            alt="background2" loading="lazy" src="/images/background2.webp"
            className="w-full opacity-90" height={1024} width={1024}
          />
        </div>
      </div>
      <div className="block md:hidden max-w-[700px]">
        <Image
          alt="background3" loading="lazy" src="/images/background2.webp"
          className="opacity-90" height={1024} width={1024}
        />
      </div>
    </div>
  )
}