import { Button, Text, Title } from "@/src/components";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center pt-20 pb-14">
      <Title type="h1" className="mb-6">
        Find and book top doctors near yor
      </Title>
      <Text className="max-w-[368px] mb-6">
        Easily find top-rated specialists near you and book appointments in just
        a few clicks. Whether you need an in-person visit consultation, we're
        here to connect you with the right care—fast, simple, and secure.
      </Text>
      <div className="flex gap-8">
        <Button type="link">Get started</Button>
        <Button type="link" variant="outline">
          Book Appointment
        </Button>
      </div>
    </section>
  );
}
