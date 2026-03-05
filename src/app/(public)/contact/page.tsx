import { PublicLayout, Text, Title } from "@/src/components";
import React from "react";

export default function page() {
  return (
    <PublicLayout>
      <Title className="my-8">Contact Us</Title>
      <Text className="max-w-[400px]">
        If you have any questions, concerns, or feedback, please don't hesitate
        to reach out to us. You can contact us via email at
        contact@healthcare.com.
      </Text>
    </PublicLayout>
  );
}
