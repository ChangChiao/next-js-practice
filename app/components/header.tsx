import logo from "@/public/vercel.svg";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <Image src={logo} alt="Vercel Logo" priority />
    </header>
  );
}
