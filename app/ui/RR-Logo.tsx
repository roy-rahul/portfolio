import { lusitana } from "@/app/ui/fonts";
import Image from "next/image";

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-col items-center leading-none`}
    >
      <Image
        src="/RR-Logo.svg"
        alt="RR Logo"
        width={100}
        height={100}
        className="h-16 w-16"
      />
      <span
        className="ml-2 text-lg font-bold md:text-2xl text-foreground overflow-hidden whitespace-nowrap transition-all duration-100 ease-in-out max-w-50 opacity-100 group-data-[state=collapsed]:max-w-0 group-data-[state=collapsed]:opacity-0"
      >
        Rahul Roy
      </span>
    </div>
  );
}
