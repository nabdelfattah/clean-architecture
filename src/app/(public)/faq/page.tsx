import { PublicLayout, Text, Title } from "@/src/components";
import React from "react";

export default function page() {
  return (
    <PublicLayout>
      <Title className="my-8">Frequently asked questions</Title>
      <Text className="max-w-[400px]">
        Here are some of our FAQs. If you have any other quesitons you'd like
        answered please feel free to email us.
      </Text>
    </PublicLayout>
  );
}
