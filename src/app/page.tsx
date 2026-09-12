import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const navLinks = ["Home", "Work", "About", "Contact"];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4C1D3D] via-[#2a0f22] to-black text-white">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-12">
        <span className="text-lg font-semibold tracking-tight">
          Rashi Gupta<sup className="ml-0.5 text-xs font-normal">®</sup>
        </span>

        <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="transition-colors hover:text-white"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <Button
            variant="outline"
            className="rounded-full border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            See My Work
          </Button>
          <Button className="rounded-full bg-white text-black hover:bg-white/85">
            Say Hello ! Lets Connect 
          </Button>
        </div>
      </header>

      <main className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-12 lg:py-24">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2 text-sm font-medium tracking-wide text-[#FFBB94] uppercase">
            <span className="text-[#FB9590]">◆</span>
            <span>Code, Design &amp;</span>
            <span
              className="lowercase text-white italic"
              style={{ fontFamily: "var(--font-instrument-serif)" }}
            >
              Develop 
            </span>
          </div>

          <h1 className="text-5xl leading-[1.1] font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            <span className="block">Building interfaces</span>
            <span className="block">that feel effortless,</span>
            <span
              className="block text-[#FB9590] italic"
              style={{ fontFamily: "var(--font-instrument-serif)" }}
            >
              built one line at a time carefully.
            </span>
          </h1>

          <p className="max-w-md text-lg leading-8 text-white/70">
            Rashi is a Frontend Developer building clean, fast, user-focused
            web experiences. Every project starts the same way: a planned design, a clear plan, and the patience to see it through.
          </p>

          <Button
            size="lg"
            className="w-fit gap-2 rounded-full bg-white px-6 text-black hover:bg-white/85"
          >
            View My Work here
            <ArrowRight className="size-4" />
          </Button>
        </div>

        <div aria-hidden className="hidden lg:block" />
      </main>
    </div>
  );
}
