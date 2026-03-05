"use client";

import useReveal from "@/src/animations/reveal";
import { Logo, ThemeToggle, LangSwitcher } from "@/src/components";
import { routes } from "@/src/utils/routes";
import Link from "next/link";

export default function Header() {
  useReveal(".reveal");

  return (
    <header className="ds-container flex justify-between items-center pt-8 pb-4 reveal">
      <Logo />
      <nav className="flex gap-6">
        {routes.map((obj) => (
          <Link key={obj.id} href={obj.path}>
            {obj.name}
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-5">
        <LangSwitcher />
        <ThemeToggle />
      </div>
    </header>
  );
}
