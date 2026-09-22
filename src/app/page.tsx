import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Boxes,
  Cloud,
  Code2,
  Mail,
  MapPin,
  Phone,
  Settings2,
  Smartphone,
  Webhook,
} from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = ["Home", "Work", "About", "Contact"];

const specialties = [
  { title: "MERN Stack Web Development", icon: Code2 },
  { title: "Mobile App Development (React Native)", icon: Smartphone },
  { title: "Full-Stack Development (MERN)", icon: Settings2 },
  { title: "State Management with React Redux", icon: Boxes },
  { title: "AWS Cloud Solutions", icon: Cloud },
  { title: "RESTful API Development", icon: Webhook },
];

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.605-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667h-3.554v-11.452h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zm-15.11-13.019c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019h-3.564v-11.452h3.564v11.452zm16.905-20.452h-20.454c-.979 0-1.771.774-1.771 1.729v20.542c0 .956.792 1.729 1.771 1.729h20.451c.978 0 1.778-.773 1.778-1.729v-20.542c0-.955-.8-1.729-1.778-1.729z" />
    </svg>
  );
}

export default function Home() {
  return (
    <div
      id="top"
      className="min-h-screen bg-gradient-to-br from-[#4C1D3D] via-[#2a0f22] to-black text-white"
    >
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
            <span>Code, Implement, Design &amp;</span>

            <span
              className="lowercase text-white italic"
              style={{ fontFamily: "var(--font-instrument-serif)" }}
            >
              Develop 
            </span>
          </div>

          <h1 className="text-5xl leading-[1.1] font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            <span className="block">Building interfaces</span>
            <span className="block">that feel effortless,productive</span>
            <span
              className="block text-[#FB9590] italic"
              style={{ fontFamily: "var(--font-instrument-serif)" }}
            >
              built one line at a time carefully and accurately.
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

      <section id="overview" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
            <div>
              <span className="text-sm font-medium tracking-wide text-[#FFBB94] uppercase">
                Overview
              </span>
              <h2 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
                <span className="mr-1 inline-flex size-10 items-center justify-center rounded-full bg-[#FB9590] text-2xl font-bold text-black">
                  M
                </span>
                y Specialities
              </h2>
            </div>

            <p className="text-lg leading-8 text-white/80">
              I specialize in full-stack development with a focus on the{" "}
              <span className="font-semibold text-white">MERN stack</span>{" "}
              (MongoDB, Express.js, React.js, Node.js). With expertise in{" "}
              <span className="font-semibold text-white">web hosting</span>,{" "}
              <span className="font-semibold text-white">
                AWS cloud services
              </span>
              , and{" "}
              <span className="font-semibold text-white">
                mobile app development
              </span>
              , I build scalable, high-performance applications and robust
              APIs, ensuring seamless{" "}
              <span className="font-semibold text-white">
                front-end and back-end
              </span>{" "}
              integration.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
            {specialties.map((item) => (
              <div
                key={item.title}
                className="flex flex-col justify-between gap-10 rounded-2xl border border-white/10 bg-white/3 p-6"
              >
                <span className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white">
                  <item.icon className="size-5" />
                </span>
                <span className="flex items-end justify-between gap-2">
                  <span className="text-lg font-semibold">{item.title}</span>
                  <ArrowUpRight className="size-5 shrink-0 text-[#FB9590]" />
                </span>
              </div>
            ))}

            <a
              href="mailto:rashigupta2116@gmail.com"
              className="relative flex flex-col justify-end gap-2 rounded-2xl bg-black p-6 sm:col-span-2 lg:col-span-1 lg:col-start-4 lg:row-start-1 lg:row-span-2"
            >
              <ArrowUpRight className="absolute top-6 right-6 size-5 text-[#FB9590]" />
              <span className="text-xl font-semibold text-[#FB9590]">
                Say Hello ..!,
              </span>
              <span className="text-lg font-medium text-white">
                rashigupta2116@gmail.com
              </span>
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:px-12">
          <div
            aria-hidden
            className="mx-auto aspect-4/5 w-full max-w-sm rounded-[2rem] border border-dashed border-white/15 bg-white/5"
          />

          <div className="flex flex-col gap-6">
            <span className="text-sm font-medium tracking-wide text-[#FFBB94] uppercase">
              Hello, I&apos;m
            </span>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              <span className="mr-1 inline-flex size-10 items-center justify-center rounded-full bg-[#FB9590] text-2xl font-bold text-black">
                R
              </span>
              ashi Gupta
            </h2>

            <p className="text-xl font-semibold text-white/90">
              Frontend Developer
            </p>

            <p className="text-lg text-white/80">
              Tech Stack -{" "}
              <span className="font-semibold text-white">
                React, Next.js &amp; TypeScript
              </span>
            </p>

            <p className="max-w-xl leading-7 text-white/70">
              I&apos;m a skilled software developer with experience in
              JavaScript, and expertise in frameworks like React, Node.js,
              Express.js and MongoDB. I&apos;m a quick learner and
              collaborate closely with clients to create efficient,
              scalable, and user-friendly solutions that solve real-world
              problems. Let&apos;s work together to bring your ideas to
              life!
            </p>

            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="text-3xl font-semibold sm:text-4xl">1+</p>
                <p className="mt-1 text-sm text-white/60">
                  Years of Experience
                </p>
              </div>
              <div>
                <p className="text-3xl font-semibold sm:text-4xl">5+</p>
                <p className="mt-1 text-sm text-white/60">
                  Projects Completed
                </p>
              </div>
              <div>
                <p className="text-3xl font-semibold sm:text-4xl">3+</p>
                <p className="mt-1 text-sm text-white/60">Core Skills</p>
              </div>
            </div>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "w-fit gap-2 rounded-full bg-white px-6 text-black hover:bg-white/85",
              )}
            >
              Download My Resume
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      <section id="skills" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
          <div className="flex -space-x-8">
            <span className="size-20 rounded-full border-2 border-[#FB9590]" />
            <span className="size-20 rounded-full border-2 border-[#8B5CF6]" />
          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
            My Skills
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <p className="text-2xl font-bold sm:text-3xl">
                I build things for the people
              </p>
              <p
                className="mt-2 text-xl text-white/70 italic sm:text-2xl"
                style={{ fontFamily: "var(--font-instrument-serif)" }}
              >
                I can Design, Develop, Deploy
              </p>
            </div>

            <div className="flex flex-col gap-6 text-lg leading-8 text-white/80">
              <p>
                My go-to stack is Next JS (With TypeScript &amp; SaSS), which
                was previously known as the MERN Stack for web-based
                solutions. I have collaborated with developers to create a
                variety of open-source solutions.
              </p>
              <p>
                I have a thing for making unique user interfaces, so I always
                design the systems on Figma from scratch and code them using
                tailwind (did previously using Sass), giving the app a
                unique new look and better control and customizability.
              </p>
            </div>
          </div>

          <div className="mt-16 flex items-center gap-2 text-lg font-semibold">
            Skills
            <ArrowRight className="size-4" />
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            {["Frontend", "Backend", "DevOps", "Databases", "Cloud", "Other"].map(
              (skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-white/10 px-6 py-3 text-sm font-medium text-white/90"
                >
                  {skill}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      <footer id="contact" className="border-t border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1fr_1fr] lg:items-stretch">
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                <span className="mr-1 inline-flex size-10 items-center justify-center rounded-full bg-[#FB9590] text-2xl font-bold text-black">
                  L
                </span>
                et&apos;s Work
                <span className="block">Together</span>
              </h2>
              <p className="mt-6 max-w-xs text-white/60">
                Building clean, fast, user-focused web experiences with
                expertise in modern frontend development. Always open to
                connect and collaborate.
              </p>
            </div>

            <div className="relative flex flex-col gap-4 rounded-2xl border border-white/10 p-8">
              <ArrowUpRight className="absolute top-6 right-6 size-5 text-[#FB9590]" />
              <h3 className="pr-8 text-xl font-semibold">
                Looking for a Frontend Developer?
              </h3>
              <div className="flex flex-col gap-3 text-sm text-white/70">
                <a
                  href="mailto:rashigupta2116@gmail.com"
                  className="flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Mail className="size-4 shrink-0" />
                  rashigupta2116@gmail.com
                </a>
                <a
                  href="tel:+919410006707"
                  className="flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Phone className="size-4 shrink-0" />
                  +91 94100 06707
                </a>
                <span className="flex items-center gap-2">
                  <MapPin className="size-4 shrink-0" />
                  Delhi, Meerut, India
                </span>
              </div>
            </div>

            <div className="relative flex flex-col gap-4 rounded-2xl border border-white/10 p-8">
              <a
                href="https://github.com/Rashigpt"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="absolute top-6 right-6 text-[#FB9590]"
              >
                <ArrowUpRight className="size-5" />
              </a>
              <h3 className="pr-8 text-xl font-semibold">
                Want a more in-depth look at my work?
              </h3>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Rashigpt"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex size-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white/40 hover:text-white"
                >
                  <GithubIcon className="size-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rashi-gupta-4638a428b"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex size-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white/40 hover:text-white"
                >
                  <LinkedinIcon className="size-4" />
                </a>
                <a
                  href="mailto:rashigupta2116@gmail.com"
                  aria-label="Email"
                  className="flex size-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white/40 hover:text-white"
                >
                  <Mail className="size-4" />
                </a>
              </div>
            </div>
          </div>

          <h2 className="mt-20 text-center text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            Rashi Gupta
          </h2>

          <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
            <span className="text-sm text-white/50">Thanks For Scrolling.</span>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "gap-2 rounded-full border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white",
              )}
            >
              My Resume
              <ArrowUpRight className="size-4" />
            </a>

            <a
              href="#top"
              className="flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
            >
              Back To Top
              <ArrowUp className="size-4" />
            </a>
          </div>

          <p className="mt-8 text-center text-sm text-white/40">
            © {new Date().getFullYear()} Rashi Gupta. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
