import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>about navbar</nav>
      <main>{children}</main>
    </>
  );
}
