"use client";

import Image from "next/image";
import BlinkingDot from "@/app/ui/components/blinkingDot";
import { useState } from "react";
import Link from "next/link";

export default function HeroSection() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section
      id="hero"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-8 px-4 py-12 md:flex-row md:justify-around md:px-8 md:py-0"
    >
      <div className="flex max-w-xl flex-col items-center text-center md:items-start md:text-left">
        <h1 className="mb-4 text-2xl font-bold text-brand-dark sm:text-3xl md:text-4xl">
          * Senior Full-Stack Engineer
        </h1>

        <p className="mb-4 text-base leading-relaxed text-foreground sm:text-lg md:text-xl">
          8 years of experience building end-to-end web applications, custom AI
          integrations, and real-time user experiences.
        </p>

        <div className="mb-8 flex items-center justify-center gap-2 text-base text-foreground sm:text-lg md:justify-start md:text-xl">
          <BlinkingDot />
          <span>Let's connect and build something amazing together!

</span>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center">
          <Link href="/projects/ask-ai-about-me" className="w-full sm:w-auto">
            <button className="w-full cursor-pointer rounded-full bg-brand-600 px-6 py-3.5 text-base font-medium text-white transition-colors hover:bg-brand-700 sm:w-auto">
              Ask AI about me
            </button>
          </Link>
          <Link href="/dummy.pdf" download="dummy.PDF" className="w-full sm:w-auto sm:ml-8 mt-8 sm:mt-0">
            <button className="w-full cursor-pointer rounded-full bg-brand-600 px-6 py-3.5 text-base font-medium text-white transition-colors hover:bg-brand-700 sm:w-auto">
              Download CV
            </button>
          </Link>
        </div>
      </div>

      <div className="flex w-full max-w-70 items-center justify-center sm:max-w-85 md:max-w-100">
        <Image
          src="/Gemini_Generated_hero.avif"
          alt="Profile Image"
          width={400}
          height={400}
          priority
          className={`h-auto w-full rounded-2xl object-cover shadow-md duration-700 ease-in-out ${
            isLoading
              ? "scale-105 blur-xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          }`}
          onLoad={() => setIsLoading(false)}
        />
      </div>
    </section>
  );
}
