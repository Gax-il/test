"use client";

import Link from "next/link";
import { useState } from "react";

export default function Gai() {
  const [gai, setGai] = useState(false);
  return (
    <>
      <p className="text-center text-6xl font-bold">GAI</p>
      {gai && <p>GAI</p>}
      <Link href="/">Home</Link>
    </>
  );
}
