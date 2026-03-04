import { Logo, ThemeToggle, LangSwitcher } from "@/src/components";

export default function Header() {
  return (
    <header className="flex justify-between pt-14 pb-7">
      <Logo />
      <div>
        <LangSwitcher />
        <ThemeToggle />
      </div>
    </header>
  );
}
