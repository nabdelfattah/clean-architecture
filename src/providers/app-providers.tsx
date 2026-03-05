import ThemeProvider from "@/src/providers/theme-provider";

// this provider should wrap all the other providers
export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
