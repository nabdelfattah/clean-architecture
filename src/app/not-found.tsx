"use client";
import "./globals.css";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Button, Title, Text } from "@/src/components";
import LottieNoData from "@/src/assets/lottie/no-data.json";

const Player = dynamic(
  () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
  { ssr: false },
);

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ds-bg-alt">
      <Player autoplay loop src={LottieNoData} className="w-70 h-70" />
      <div className="flex flex-col justify-center items-center gap-4">
        <Title>404 - الصفحة غير موجودة</Title>
        <Text>يبدو أنك دخلت على مسار غير موجود</Text>
        <Button variant="primary" size="sm" type="link" href="/">
          Go Back Home
        </Button>
        {/* <Button type="link" variant="primary" size="sm" href="/">
          priamry sm link
        </Button>
        <Button type="link" variant="secondary" size="md" href="/">
          secondary md link
        </Button>
        <Button type="link" variant="outline" size="full" href="/">
          outline full link
        </Button>
        <Button type="link" variant="black" size="sm" href="/">
          black sm link
        </Button>
        <Button
          onClick={() => {
            console.log("hi");
          }}
        >
          button
        </Button> */}
      </div>
    </div>
  );
}
