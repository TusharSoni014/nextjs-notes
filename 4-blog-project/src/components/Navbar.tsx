import Link from "next/link";
import React from "react";
import { FaGithub, FaYoutube, FaTwitter } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className=" p-3 w-full h-[60px] flex justify-between items-center font-bold border-b-[1px] border-slate-800 text-white/90">
      <h2>Next JS - Mini Blog App</h2>
      <ul className="flex gap-2 ">
        <li className="text-white/60 hover:text-white/90 transition hover:scale-110">
          <Link target="_blank" href="">
            <FaGithub />
          </Link>
        </li>
        <li className="text-white/60 hover:text-white/90 transition hover:scale-110">
          <Link target="_blank" href="">
            <FaTwitter />
          </Link>
        </li>
        <li className="text-white/60 hover:text-white/90 transition hover:scale-110">
          <Link target="_blank" href="">
            <FaYoutube />
          </Link>
        </li>
      </ul>
    </header>
  );
}
