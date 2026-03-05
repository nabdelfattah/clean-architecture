import { PublicLayout, Text, Title } from "@/src/components";

export default function page() {
  return (
    <PublicLayout>
      <Title className="my-8">About Us</Title>
      <Text className="max-w-[400px]">
        Welcome to our healthcare platform! We are dedicated to connecting
        patients with top-rated doctors in their area, making it easier than
        ever to find the care you need. Our mission is to provide a seamless and
        secure experience for booking appointments, whether you prefer in-person
        visits or virtual consultations. With just a few clicks, you can access
        a network of trusted healthcare professionals and take control of your
        health journey. Thank you for choosing us as your partner in healthcare!
      </Text>
    </PublicLayout>
  );
}
