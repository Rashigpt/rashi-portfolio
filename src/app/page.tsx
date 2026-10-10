"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Bot,
  Boxes,
  Cloud,
  Code2,
  GraduationCap,
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

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const skills = [
  { name: "ReactJS", icon: "react/react-original.svg" },
  { name: "ExpressJS", icon: "express/express-original.svg", invert: true },
  { name: "NodeJS", icon: "nodejs/nodejs-original.svg" },
  { name: "MongoDB", icon: "mongodb/mongodb-original.svg" },
  { name: "Mongoose", icon: "mongoose/mongoose-original.svg" },
  { name: "Redux", icon: "redux/redux-original.svg" },
  { name: "NextJS", icon: "nextjs/nextjs-original.svg", invert: true },
  { name: "React Native", icon: "react/react-original.svg" },
  { name: "JavaScript", icon: "javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "typescript/typescript-original.svg" },
  { name: "HTML", icon: "html5/html5-original.svg" },
  { name: "CSS", icon: "css3/css3-original.svg" },
  { name: "SCSS", icon: "sass/sass-original.svg" },
  { name: "Tailwind CSS", icon: "tailwindcss/tailwindcss-original.svg" },
  { name: "Bootstrap", icon: "bootstrap/bootstrap-original.svg" },
  { name: "Material UI", icon: "materialui/materialui-original.svg" },
  { name: "Apollo Client", icon: "apollographql/apollographql-original.svg", invert: true },
  { name: "Git", icon: "git/git-original.svg" },
  { name: "GitHub", icon: "github/github-original.svg", invert: true },
  { name: "GitLab", icon: "gitlab/gitlab-original.svg" },
  { name: "Bitbucket", icon: "bitbucket/bitbucket-original.svg" },
  { name: "AWS (S3, EC2)", icon: "amazonwebservices/amazonwebservices-plain-wordmark.svg", invert: true },
  { name: "Figma", icon: "figma/figma-original.svg" },
];

const tools: { name: string; icon?: string }[] = [
  { name: "Postman", icon: "postman/postman-original.svg" },
  { name: "Ubuntu", icon: "ubuntu/ubuntu-original.svg" },
  { name: "VS Code", icon: "vscode/vscode-original.svg" },
  { name: "ChatGPT" },
];

const experience = [
  {
    period: "May 2026 – Present",
    org: "Wombto18",
    title: "Software Developer",
    bullets: [] as string[],
  },
  {
    period: "Apr 2025 – Jun 2025",
    org: "Dfree Novelish Pvt. Ltd. · Amroha, Uttar Pradesh",
    title: "Technical Operation Executive Intern",
    bullets: [
      "Built and maintained React.js-based web application features, improving UI usability and frontend performance within a professional product team.",
      "Integrated JavaScript and SQL-driven data flows into the frontend, ensuring seamless data display and smooth user interactions.",
      "Collaborated with team members on operational workflows, applying problem-solving skills to resolve day-to-day technical issues quickly.",
    ],
  },
];

const education = [
  {
    period: "Nov 2021 – Jul 2025",
    org: "Meerut Institute of Engineering and Technology (AKTU) · Meerut, India",
    title: "Bachelor of Technology – Computer Science and Engineering",
    meta: "CGPA: 7.5",
  },
  {
    period: "2021",
    org: "IIMT Academy · Meerut, India",
    title: "Class XII (Senior Secondary) – PCM",
    meta: "96%",
  },
];

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner (CLF-C02)",
    issuer: "Amazon Web Services",
  },
  {
    title: "Data Structures and Algorithms using Java",
    issuer: "NPTEL, IIT Kharagpur",
  },
];

const extraSkillGroups = [
  {
    category: "Communication Systems",
    items: [
      "MSG91",
      "DLT Template Registration",
      "WhatsApp / SMS / Email Templates",
      "OTP & Notification Workflows",
    ],
  },
  {
    category: "Quality & Documentation",
    items: [
      "Website QC / Manual Testing",
      "QC Documentation",
      "User Flow Documentation",
      "Product & Project Documentation",
    ],
  },
  {
    category: "Content & Design",
    items: [
      "Content Writing",
      "Script Writing",
      "Sales Toolkit Creation",
      "Canva (Brochures, PPTs)",
    ],
  },
  {
    category: "Video & Audio",
    items: ["User Flow Videos", "ElevenLabs (AI Voiceovers)"],
  },
  {
    category: "Marketing",
    items: [
      "Social Media Marketing",
      "Google Pomelli (Social Post & Image Editing)",
    ],
  },
  {
    category: "Soft Skills",
    items: ["Presentation & Public Speaking"],
  },
];

const resumeTabs = [
  {
    id: "experience",
    label: "Work Experience",
    heading: "Experience",
    description:
      "An overview of my roles and the impact I've made so far.",
  },
  {
    id: "aboutme",
    label: "About Me",
    heading: "About Me",
    description: "A quick introduction to who I am and how I work.",
  },
  {
    id: "education",
    label: "Education",
    heading: "Education",
    description: "My academic background.",
  },
  {
    id: "extraSkills",
    label: "Extra Skills",
    heading: "Cross-Functional Skills",
    description: "Skills beyond core development that I bring to a team.",
  },
  {
    id: "certifications",
    label: "Certifications",
    heading: "Certifications",
    description: "Courses and certifications I've completed.",
  },
] as const;

type ResumeTabId = (typeof resumeTabs)[number]["id"];

const projects = [
  {
    label: "Project 01",
    name: "NewsPulse",
    tagline: "News Web Application",
    tech: "React.js, Bootstrap, RESTful API, Git",
    live: null as string | null,
    liveLabel: null as string | null,
    highlights: null as string[] | null,
    description: null as string | null,
    bullets: [
      "Architected and built a fully responsive React.js news app with reusable component structure, integrating a live RESTful News API with dynamic category filters and pagination.",
      "Implemented React Hooks (useState, useEffect) for efficient state management and applied lazy loading and response caching to significantly improve load performance.",
      "Delivered a mobile-first, cross-device compatible UI using Bootstrap; deployed production build via GitHub with accessibility best practices.",
    ] as string[] | null,
  },
  {
    label: "Project 02",
    name: "DigiMate",
    tagline: "Digital Marketing Services Webpage",
    tech: "HTML5, CSS3, Vanilla JavaScript",
    live: null as string | null,
    liveLabel: null as string | null,
    highlights: null as string[] | null,
    description: null as string | null,
    bullets: [
      "Designed and developed a fully responsive, conversion-optimized agency landing page featuring a multi-section layout: services, pricing, testimonials, and multi-channel contact.",
      "Engineered scroll-triggered animations using the IntersectionObserver API and smooth count-up number effects via requestAnimationFrame — achieving 60fps performance with zero library dependency.",
      "Demonstrated strong CSS layout skills (Flexbox, Grid) and deep JavaScript DOM manipulation without any framework, showcasing solid fundamentals.",
    ] as string[] | null,
  },
  {
    label: "Project 03",
    name: "WhatDidDocSay",
    tagline: null as string | null,
    tech: null as string | null,
    live: null as string | null,
    liveLabel: "Live (coming soon)",
    highlights: [
      "Turn Medical Confusion Into Clarity",
      "Voice-First, Any Language, Zero Learning Curve",
    ] as string[] | null,
    description:
      "WhatDidDocSay is a web and WhatsApp-based application that simplifies medical reports and prescriptions into plain, easy-to-understand language. Users can upload or send a photo of their report to instantly receive a simplified explanation — translated into their native language and read aloud for those who can't read. With a focus on accessibility for the elderly, illiterate, and non-English-speaking populations, WhatDidDocSay aims to close the gap between receiving medical information and actually understanding it.",
    bullets: null as string[] | null,
  },
  {
    label: "Project 04",
    name: null as string | null,
    tagline: null as string | null,
    tech: null as string | null,
    live: null as string | null,
    liveLabel: null as string | null,
    highlights: null as string[] | null,
    description: null as string | null,
    bullets: null as string[] | null,
  },
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
  const [activeTab, setActiveTab] = useState<ResumeTabId>("experience");
  const activeTabData = resumeTabs.find((tab) => tab.id === activeTab)!;
  const [activeProject, setActiveProject] = useState(0);
  const currentProject = projects[activeProject];

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
              With{" "}
              <span className="font-semibold text-white">
                1+ year of hands-on experience
              </span>
              , I specialize in full-stack development with a focus on the{" "}
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
            <ArrowRight className="size-4 text-[#FB9590]" />
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/3 p-4 transition-colors hover:border-[#FB9590]/50 hover:bg-white/5"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${DEVICON}/${skill.icon}`}
                  alt=""
                  loading="lazy"
                  className={cn(
                    "size-12 transition-transform group-hover:scale-110",
                    skill.invert && "invert",
                  )}
                />
                <span className="text-center text-sm font-medium text-white/80">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>

          <h3 className="mt-20 flex items-center gap-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Tools &amp;
            <span
              className="text-[#FB9590] italic"
              style={{ fontFamily: "var(--font-instrument-serif)" }}
            >
              Software
            </span>
          </h3>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/3 p-6 transition-colors hover:border-[#FB9590]/50 hover:bg-white/5"
              >
                <span className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-white/10">
                  {tool.icon ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={`${DEVICON}/${tool.icon}`}
                      alt=""
                      loading="lazy"
                      className="size-8"
                    />
                  ) : (
                    <Bot className="size-7 text-[#FB9590]" />
                  )}
                </span>
                <span className="text-lg font-semibold">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
          <span className="text-sm font-medium tracking-wide text-[#FFBB94] uppercase">
            Projects
          </span>
          <h2 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
            <span className="mr-1 inline-flex size-10 items-center justify-center rounded-full bg-[#FB9590] text-2xl font-bold text-black">
              M
            </span>
            y Projects
          </h2>

          <div className="mt-16 flex items-center justify-center gap-4 sm:gap-8">
            <button
              type="button"
              onClick={() =>
                setActiveProject(
                  (i) => (i - 1 + projects.length) % projects.length,
                )
              }
              aria-label="Previous project"
              className="flex size-12 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white/40 hover:text-white"
            >
              <ArrowLeft className="size-5" />
            </button>

            <div className="relative w-full max-w-3xl pb-14 sm:pb-20">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
                  <span className="size-2.5 rounded-full bg-white/15" />
                  <span className="size-2.5 rounded-full bg-white/15" />
                  <span className="size-2.5 rounded-full bg-white/15" />
                </div>
                <div aria-hidden className="aspect-video w-full bg-white/5" />
              </div>

              <div className="absolute top-10 -right-4 w-28 overflow-hidden rounded-2xl border border-white/15 bg-white/5 shadow-xl sm:-right-8 sm:w-36 lg:-right-12 lg:w-44">
                <div
                  aria-hidden
                  className="aspect-9/19 w-full bg-white/5"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={() =>
                setActiveProject((i) => (i + 1) % projects.length)
              }
              aria-label="Next project"
              className="flex size-12 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white/40 hover:text-white"
            >
              <ArrowRight className="size-5" />
            </button>
          </div>

          <div className="mx-auto mt-8 grid max-w-xl grid-cols-4 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <button
                key={project.label}
                type="button"
                onClick={() => setActiveProject(index)}
                aria-label={project.label}
                className={cn(
                  "relative overflow-hidden rounded-xl border bg-white/5 transition-colors",
                  activeProject === index
                    ? "border-[#FB9590]"
                    : "border-white/10 hover:border-white/25",
                )}
              >
                <div aria-hidden className="aspect-video w-full bg-white/5" />
                <span
                  className={cn(
                    "absolute bottom-2 left-2 flex size-6 items-center justify-center rounded-md text-xs font-semibold",
                    activeProject === index
                      ? "bg-[#FB9590] text-black"
                      : "bg-black/70 text-white",
                  )}
                >
                  {index + 1}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 gap-10 border-t border-white/10 pt-12 lg:grid-cols-[340px_1fr]">
            <div>
              <div className="flex flex-wrap items-center gap-4">
                <h3
                  className="text-3xl text-white italic sm:text-4xl"
                  style={{ fontFamily: "var(--font-instrument-serif)" }}
                >
                  {currentProject.name ?? "Coming Soon"}
                </h3>

                {currentProject.live ? (
                  <a
                    href={currentProject.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 rounded-full border border-[#FB9590] px-4 py-1.5 text-sm font-semibold text-[#FB9590] transition-colors hover:bg-[#FB9590] hover:text-black"
                  >
                    Live
                    <ArrowUpRight className="size-4" />
                  </a>
                ) : currentProject.liveLabel ? (
                  <span className="rounded-full border border-white/20 px-4 py-1.5 text-sm font-semibold text-white/50">
                    {currentProject.liveLabel}
                  </span>
                ) : null}
              </div>

              {currentProject.tagline && (
                <p className="mt-2 text-white/60">{currentProject.tagline}</p>
              )}

              {currentProject.highlights && (
                <div className="mt-8 flex flex-col divide-y divide-white/10 border-t border-white/10">
                  {currentProject.highlights.map((highlight) => (
                    <p key={highlight} className="py-4 text-lg font-semibold">
                      {highlight}
                    </p>
                  ))}
                </div>
              )}

              {currentProject.tech && (
                <p className="mt-8 text-sm text-white/50">
                  {currentProject.tech}
                </p>
              )}
            </div>

            <div className="text-lg leading-8 text-white/70">
              {currentProject.description && <p>{currentProject.description}</p>}

              {currentProject.bullets && (
                <ul className="flex flex-col gap-4">
                  {currentProject.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-3 size-1.5 shrink-0 rounded-full bg-[#FB9590]" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}

              {!currentProject.description && !currentProject.bullets && (
                <p className="text-white/40">More details coming soon.</p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-white/10 bg-white text-black">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-[380px_1fr] lg:px-12">
          <div>
            <span className="text-sm font-medium tracking-wide text-[#A33757] uppercase">
              Resume
            </span>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
              <span className="mr-1 inline-flex size-10 items-center justify-center rounded-full bg-[#FB9590] text-2xl font-bold text-black">
                A
              </span>
              ll over my details find here...
            </h2>

            <div className="mt-10 flex flex-col gap-3">
              {resumeTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex items-center justify-between rounded-2xl px-6 py-4 text-left text-lg font-semibold transition-colors",
                    activeTab === tab.id
                      ? "bg-[#FB9590] text-black"
                      : "bg-black text-white hover:bg-black/80",
                  )}
                >
                  {tab.label}
                  <ArrowUpRight className="size-5 shrink-0" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {activeTabData.heading}
            </h3>
            <p className="mt-4 max-w-2xl text-lg text-black/60">
              {activeTabData.description}
            </p>

            <div className="mt-10">
              {activeTab === "experience" && (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {experience.map((item) => (
                    <div key={item.title} className="rounded-2xl bg-black/5 p-6">
                      <p className="text-sm text-black/50">{item.period}</p>
                      <p className="mt-3 flex items-center gap-2 text-sm text-black/60">
                        <span className="size-1.5 shrink-0 rounded-full bg-[#FB9590]" />
                        {item.org}
                      </p>
                      <p className="mt-2 text-xl font-bold">{item.title}</p>
                      {item.bullets.length > 0 && (
                        <ul className="mt-4 flex flex-col gap-2 text-sm text-black/60">
                          {item.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "aboutme" && (
                <div className="flex flex-col gap-6">
                  <p className="text-xl font-semibold">Frontend Developer</p>
                  <p className="flex items-center gap-2 text-sm text-black/60">
                    <GraduationCap className="size-4 shrink-0" />
                    MIET, Meerut
                  </p>
                  <p className="text-lg text-black/70">
                    Tech Stack -{" "}
                    <span className="font-semibold text-black">
                      React, Next.js &amp; TypeScript
                    </span>
                  </p>
                  <p className="max-w-2xl leading-7 text-black/70">
                    I&apos;m a skilled software developer with experience in
                    JavaScript, and expertise in frameworks like React,
                    Node.js, Express.js and MongoDB. I&apos;m a quick
                    learner and collaborate closely with clients to create
                    efficient, scalable, and user-friendly solutions that
                    solve real-world problems. Let&apos;s work together to
                    bring your ideas to life!
                  </p>

                  <div className="grid grid-cols-3 gap-6">
                    <div>
                      <p className="text-3xl font-semibold sm:text-4xl">1+</p>
                      <p className="mt-1 text-sm text-black/50">
                        Years of Experience
                      </p>
                    </div>
                    <div>
                      <p className="text-3xl font-semibold sm:text-4xl">5+</p>
                      <p className="mt-1 text-sm text-black/50">
                        Projects Completed
                      </p>
                    </div>
                    <div>
                      <p className="text-3xl font-semibold sm:text-4xl">3+</p>
                      <p className="mt-1 text-sm text-black/50">Core Skills</p>
                    </div>
                  </div>

                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "w-fit gap-2 rounded-full bg-black text-white hover:bg-black/80",
                    )}
                  >
                    Download My Resume
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>
              )}

              {activeTab === "education" && (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {education.map((item) => (
                    <div key={item.title} className="rounded-2xl bg-black/5 p-6">
                      <p className="text-sm text-black/50">{item.period}</p>
                      <p className="mt-3 flex items-center gap-2 text-sm text-black/60">
                        <span className="size-1.5 shrink-0 rounded-full bg-[#FB9590]" />
                        {item.org}
                      </p>
                      <p className="mt-2 text-xl font-bold">{item.title}</p>
                      <p className="mt-2 text-sm text-black/60">{item.meta}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "extraSkills" && (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {extraSkillGroups.map((group) => (
                    <div
                      key={group.category}
                      className="rounded-2xl bg-black/5 p-6"
                    >
                      <p className="text-lg font-bold">{group.category}</p>
                      <ul className="mt-3 flex flex-col gap-1.5 text-sm text-black/60">
                        {group.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "certifications" && (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {certifications.map((item) => (
                    <div key={item.title} className="rounded-2xl bg-black/5 p-6">
                      <p className="text-xl font-bold">{item.title}</p>
                      <p className="mt-2 text-sm text-black/60">{item.issuer}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
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
