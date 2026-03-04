import { Title } from "@/src/components/";
import { Header } from "@/src/components";

export default function Home() {
  return (
    <div className="">
      <Header />
      <main className="">
        <Title type="h1">Clean Architecture</Title>
        <Title type="h2">secondary title</Title>
        <Title type="h2" isCentered={false}>
          secondary title
        </Title>
        <Title type="h2" isCentered={false} color="white" className="bg-black">
          secondary white title
        </Title>
        <Title type="p">a paragraph title</Title>
      </main>
    </div>
  );
}
