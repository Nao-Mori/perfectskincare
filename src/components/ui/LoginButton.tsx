'use client'

import { useSession, signIn, signOut } from "next-auth/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function LoginButton() {
  const tControls = useTranslations('Controls');
  const { data: session, status } = useSession();

  if (!session) {
    return (
      <button className="text-sm whitespace-nowrap font-bold ml-2" onClick={() => signIn("google")}>
        {tControls("login")}
      </button>
    )
  }
  const name = session.user?.name ?? 'Account';
  const img = session.user?.image;

  return (
    <Link href="user" className="ml-3 flex items-center gap-2">
      {img ? (
        <Image
          src={img}
          alt={name}
          width={28}
          height={28}
          className="rounded-full"
        />
      ) : (
        <p>{name}</p>
      )}
    </Link>
  );
}