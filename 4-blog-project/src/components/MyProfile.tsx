import Image from "next/image";
import React from "react";

export default function MyProfile() {
  return (
    <section className="w-full my-3">
      <Image
      className=" rounded-full mx-auto"
        src="/mypic.jpg"
        alt="tushar soni"
        width={200}
        height={200}
        priority={true}
      />
    </section>
  );
}
