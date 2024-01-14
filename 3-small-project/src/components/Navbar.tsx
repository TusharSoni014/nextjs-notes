import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className=" border-b-2 border-slate-900 p-5">
      <h1>
        <Link className="font-bold" href="/">
          Wikirocket
        </Link>
      </h1>
    </header>
  );
}
