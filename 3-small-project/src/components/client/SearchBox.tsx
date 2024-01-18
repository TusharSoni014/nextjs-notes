"use client";
import React, { FormEvent, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const [searchText, setSearchText] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchText("");
    router.push(`/${searchText}/`);
  };

  return (
    <form onSubmit={handleSubmit} className="__search flex gap-2">
      <Input
        onChange={(e) => setSearchText(e.target.value)}
        className=" bg-slate-800"
        placeholder="Search Text..."
        value={searchText}
      />
      <Button type="submit">
        <Search />
      </Button>
    </form>
  );
}
