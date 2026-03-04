// this provider should wrap all the other providers
export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
