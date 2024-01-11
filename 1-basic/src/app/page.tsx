import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col">
      home page
      <Link className="text-blue-500" href="/about">About page</Link>
    </main>
  );
}
