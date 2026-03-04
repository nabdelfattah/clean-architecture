import Link from "next/link";
import Image from "next/image";
import { LogoImage } from "@/src/assets/images/images";

export default function Logo() {
  return (
    <Link href="/">
      <Image src={LogoImage} alt="Logo" />
    </Link>
  );
}
