import Link from "next/link";
import React from "react";
import SearchBox from "./client/SearchBox";

export default function Navbar() {
  return (
    <header className=" border-b-2 border-slate-900 p-5 flex justify-between items-center">
      <h1>
        <Link className="font-bold" href="/">
          Wikirocket🚀
        </Link>
      </h1>
      <SearchBox />
    </header>
  );
}
