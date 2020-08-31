import * as React from "react";
import Link from "next/link";

export const NavLinks: React.FC = () => {
  return (
    <ul>
      <li>
        <Link href="/search">Search</Link>
      </li>
      <li>
        <Link href="/schedule">Schedule</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );
};
