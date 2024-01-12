import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col">
      <h1 className="text-4xl">Home page</h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus vero
      harum laudantium ipsa. Ullam minima tempora itaque, praesentium
      consequatur rem optio perspiciatis unde sit at obcaecati, eaque incidunt
      consectetur voluptate?
      <Link href="/users" className="border-2 p-2 w-fit">
        Users Page
      </Link>
    </main>
  );
}
