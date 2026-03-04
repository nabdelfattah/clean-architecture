import { Logo, ThemeToggle, LangSwitcher } from "@/src/components";

export default function Header() {
  return (
    <header className="ds-container flex justify-between pt-8 pb-4">
      <Logo />
      <nav>{/* navigatin goes here */}</nav>
      <div className="flex items-center gap-5">
        <LangSwitcher />
        <ThemeToggle />
      </div>
    </header>
  );
}
