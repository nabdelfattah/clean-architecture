import { AuthHeader, Footer } from "@/src/components";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AuthHeader />
      <main className="flex flex-col items-center justify-center min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}
