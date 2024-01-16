"use client"

import Link from "next/link";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className=" border-b-2 border-slate-900 p-5 flex justify-between items-center">
      <h1>
        <Link className="font-bold" href="/">
          Wikirocket
        </Link>
      </h1>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="__search flex gap-2"
      >
        <Input className=" bg-slate-800" placeholder="Search Text..." />
        <Button>
          <Search />
        </Button>
      </form>
    </header>
  );
}
