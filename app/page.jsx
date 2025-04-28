import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <h2 className="text-4xl font-extrabold">Hello!</h2>
      <h2 className="text-3xl font-[family-name:var(--font-geist-sans)]">My name's Maycon </h2>
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
    </div>
  );
}
