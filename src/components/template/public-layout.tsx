import { Header, Footer } from "@/src/components";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="container flex flex-col items-center justify-center">
        {children}
      </main>
      <Footer />
    </>
  );
}
