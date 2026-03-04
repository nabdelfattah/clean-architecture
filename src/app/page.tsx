import { PublicLayout } from "@/src/components";
import {
  HeroSection,
  HowItWorksSection,
} from "@/src/modules/landing/components";

export default function Home() {
  return (
    <PublicLayout>
      <HeroSection />
      <HowItWorksSection />
    </PublicLayout>
  );
}
