import Link from "next/link";

import {
  ArrowLeft,
  ArrowUpRight,
  Brain,
  Code2,
  Cpu,
  FlaskConical,
  GraduationCap,
  BookOpenText,
  NotebookText,
} from "lucide-react";

const focusAreas = [
  {
    icon: Code2,
    number: "01",
    title: "BUILD",
    text: "Full-stack applications that go beyond a UI — frontend, backend, APIs, databases, and deployment.",
  },
  {
    icon: Brain,
    number: "02",
    title: "EXPLORE",
    text: "Generative AI, RAG, Agentic AI, computer vision, deep learning, and intelligent applications.",
  },
  {
    icon: Cpu,
    number: "03",
    title: "EXPERIMENT",
    text: "Ideas that are not fully figured out yet, especially when technology can turn an everyday problem into something useful.",
  },
  {
    icon: FlaskConical,
    number: "04",
    title: "RESEARCH",
    text: "Exploring ideas through academic projects, experimentation, conference research, and patent work.",
  },
];

const technologyGroups = [
  {
    title: "LANGUAGES",
    items: ["Python", "Java", "C++", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "BUILD",
    items: ["React", "Next.js", "Flask", "FastAPI"],
  },
  {
    title: "AI",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Generative AI",
      "Agentic AI",
      "RAG",
      "Computer Vision",
    ],
  },
  {
    title: "TOOLS",
    items: ["Git", "GitHub"],
  },
];

const researchItems = [
  {
    number: "01",
    type: "PATENT",
    title:
      "AI-Driven Emotion-Aware Food Recommendation System with IoT-Based Calorie Estimation",
    meta: "Indian Patent Application No. 202641090782 · July 2026",
  },
  {
    number: "02",
    type: "PATENT",
    title:
      "Smart Protective Gear System with Hybrid Power Supply and Environmental Monitoring",
    meta: "Indian Patent Application No. 202641074345 · June 2026",
  },
  {
    number: "03",
    type: "CONFERENCE PAPER",
    title:
      "Enhancing Plant Disease Classification: A Lightweight Deep Learning Approach with DcGAN Augmentation and Grad-CAM Explanations",
    meta: "ICIICC 2026 · Utkal University · August 2026",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#08070a] text-white">
      {/* HEADER */}

      <section className="px-6 pt-8 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          <Link
            href="/"
            className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-white/35 transition-colors hover:text-white"
          >
            <ArrowLeft size={13} />
            Back home
          </Link>
        </div>
      </section>

      {/* HERO */}

      <section className="px-6 pb-28 pt-24 md:px-10 md:pt-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid items-end gap-16 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-purple-300/50">
                ABOUT / SRILAYA
              </p>

              <h1 className="mt-8 text-[clamp(4rem,10vw,9rem)] font-medium leading-[0.82] tracking-[-0.075em]">
                I build
                <br />
                things
                <br />
                with curiosity.
              </h1>
            </div>

            <div className="lg:pb-3">
              <p className="text-lg leading-relaxed text-white/60 md:text-xl">
                My work sits at the intersection of{" "}
                <span className="text-white">
                  software engineering and intelligent systems.
                </span>{" "}
                I enjoy building full-stack applications that use AI to solve
                practical problems.
              </p>

              <p className="mt-6 text-sm leading-relaxed text-white/30">
                I work across Generative AI, RAG, Agentic AI, computer vision,
                deep learning, and context-aware systems — while exploring
                these ideas through research, academic projects, and patent
                work.
              </p>

              <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-purple-300/15 bg-purple-300/[0.04] px-4 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-300/70" />

                <span className="text-[10px] uppercase tracking-[0.2em] text-purple-200/55">
                  Open to opportunities
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT ME */}

      <section className="border-y border-white/[0.07]">
        <div className="mx-auto grid max-w-[1400px] lg:grid-cols-[0.3fr_1fr]">
          <div className="border-b border-white/[0.07] p-6 md:p-10 lg:border-b-0 lg:border-r">
            <span className="text-[10px] uppercase tracking-[0.25em] text-white/25">
              01 / A LITTLE ABOUT ME
            </span>
          </div>

          <div className="p-8 md:p-14 lg:p-20">
            <p className="max-w-4xl text-2xl leading-[1.2] tracking-[-0.035em] text-white/75 md:text-4xl">
              I like taking an idea apart, understanding the problem underneath
              it, and figuring out how to turn it into{" "}
              <span className="text-white">something that actually works.</span>
            </p>

            <p className="mt-10 max-w-3xl text-base leading-relaxed text-white/35">
              I&apos;m currently pursuing an Integrated M.Tech in Computer
              Science &amp; Engineering at VIT Vellore. Most of my work comes
              from building, experimenting, and learning — especially around
              software engineering, AI, and full-stack development.
            </p>

            <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/35">
              My projects have taken me from Generative AI and RAG applications
              to computer vision and intelligent sensing systems. Alongside
              building software, I explore ideas through research, academic
              projects, conference work, and patents.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "Software Engineering",
                "Full-Stack Development",
                "AI / ML",
                "Research",
              ].map((interest) => (
                <span
                  key={interest}
                  className="rounded-full border border-white/[0.1] px-4 py-2 text-xs text-white/45"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION */}

      <section className="px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:grid-cols-[0.35fr_1fr]">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-purple-300/50">
                02 / EDUCATION
              </span>
            </div>

            <div className="border-t border-white/[0.08]">
              {/* VIT */}

              <div className="flex flex-col justify-between gap-5 py-7 md:flex-row md:items-start">
                <div>
                  <div className="flex items-center gap-3">
                    <GraduationCap
                      size={18}
                      strokeWidth={1.4}
                      className="text-purple-300/60"
                    />

                    <p className="text-xl tracking-[-0.02em] md:text-2xl">
                      Integrated M.Tech — Computer Science &amp; Engineering
                    </p>
                  </div>

                  <p className="mt-3 text-sm text-white/35">
                    Vellore Institute of Technology, Vellore
                  </p>
                </div>

                <div className="shrink-0 text-left md:text-right">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/25">
                    2023 — Present
                  </p>

                  <p className="mt-2 text-sm text-purple-200/60">
                    CGPA 9.41
                  </p>
                </div>
              </div>

              {/* Higher Secondary */}

              <div className="flex flex-col justify-between gap-4 border-t border-white/[0.08] py-6 md:flex-row md:items-start">
                <div>
                  <div className="flex items-center gap-3">
                    <BookOpenText
                      size={17}
                      strokeWidth={1.4}
                      className="text-purple-300/45"
                    />

                    <p className="text-lg tracking-[-0.02em] text-white/80 md:text-xl">
                      Higher Secondary Education
                    </p>
                  </div>

                  <p className="mt-2 text-sm text-white/35">
                    Springdays Garden School, Vellore
                  </p>
                </div>

                <div className="shrink-0 text-left md:text-right">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/25">
                    2023
                  </p>

                  <p className="mt-2 text-sm text-purple-200/60">97%</p>
                </div>
              </div>

              {/* SSLC */}

              <div className="flex flex-col justify-between gap-4 border-t border-white/[0.08] py-6 md:flex-row md:items-start">
                <div>
                  <div className="flex items-center gap-3">
                    <NotebookText
                      size={17}
                      strokeWidth={1.4}
                      className="text-purple-300/45"
                    />

                    <p className="text-lg tracking-[-0.02em] text-white/80 md:text-xl">
                      SSLC
                    </p>
                  </div>

                  <p className="mt-2 text-sm text-white/35">
                    Springdays Garden School, Vellore
                  </p>
                </div>

                <div className="shrink-0 text-left md:text-right">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/25">
                    2021
                  </p>

                  <p className="mt-2 text-sm text-purple-200/60">100%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT I'M INTO */}

      <section className="border-y border-white/[0.06] bg-[#0d0b10] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-16 flex items-end justify-between gap-8">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-purple-300/50">
                03 / WHAT I&apos;M INTO
              </span>

              <h2 className="mt-6 text-5xl leading-[0.9] tracking-[-0.06em] md:text-7xl">
                What keeps
                <br />
                me building.
              </h2>
            </div>

            <p className="hidden max-w-xs text-xs leading-relaxed text-white/25 md:block">
              The areas that naturally keep showing up across my projects,
              experiments, and research.
            </p>
          </div>

          <div className="grid border-t border-white/[0.08] md:grid-cols-2">
            {focusAreas.map((area) => {
              const Icon = area.icon;

              return (
                <div
                  key={area.number}
                  className="group border-b border-white/[0.08] p-8 transition-colors hover:bg-white/[0.015] md:border-r md:p-10 md:last:border-r-0"
                >
                  <div className="flex items-start justify-between">
                    <Icon
                      size={20}
                      strokeWidth={1.4}
                      className="text-purple-200/45"
                    />

                    <span className="text-[9px] tracking-[0.2em] text-white/20">
                      {area.number}
                    </span>
                  </div>

                  <h3 className="mt-14 text-2xl tracking-[-0.03em]">
                    {area.title}
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-relaxed text-white/30">
                    {area.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* THINGS I BUILD WITH */}

      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:grid-cols-[0.35fr_1fr]">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-purple-300/50">
                04 / THINGS I BUILD WITH
              </span>
            </div>

            <div>
              <h2 className="text-4xl leading-[0.95] tracking-[-0.055em] md:text-6xl">
                Tools for
                <br />
                turning ideas real.
              </h2>

              <div className="mt-12 space-y-10">
                {technologyGroups.map((group) => (
                  <div
                    key={group.title}
                    className="border-t border-white/[0.08] pt-5"
                  >
                    <p className="text-[9px] uppercase tracking-[0.22em] text-white/25">
                      {group.title}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/[0.09] bg-white/[0.025] px-4 py-2.5 text-xs text-white/45"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREDENTIAL */}

      <section className="border-y border-white/[0.07] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:grid-cols-[0.35fr_1fr]">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-purple-300/50">
                05 / CREDENTIAL
              </span>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/25">
                IBM CAREER EDUCATION PROGRAM
              </p>

              <h2 className="mt-5 text-3xl leading-[0.95] tracking-[-0.05em] md:text-5xl">
                Building Agents
                <br />
                with Agentic AI
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/35">
                Completed an IBM course focused on building agents with Agentic AI,
                strengthening my understanding of intelligent, tool-using AI
                systems.
              </p>

              <div className="mt-10 flex flex-col justify-between gap-5 border-t border-white/[0.07] pt-6 md:flex-row md:items-center">
                <div>
                  <p className="text-xs text-white/40">
                    IBM Developer Skills Network
                  </p>

                  <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/20">
                    Issued July 2026
                  </p>
                </div>

                <a
                  href="https://courses.ibmcep.cognitiveclass.ai/certificates/c271764edd8744789e2b2dce79c38455"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/45 transition-colors hover:text-white"
                >
                  View credential
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUTSIDE THE BUILD */}

      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:grid-cols-[0.35fr_1fr]">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-purple-300/50">
                06 / OUTSIDE THE BUILD
              </span>
            </div>

            <div>
              <p className="max-w-4xl text-2xl leading-[1.2] tracking-[-0.035em] text-white/70 md:text-4xl">
                I&apos;m interested in more than just making things work. I
                care about{" "}
                <span className="text-white">
                  how people experience what gets built.
                </span>
              </p>

              <p className="mt-10 max-w-3xl text-base leading-relaxed text-white/35">
                That curiosity also shows up in design, communication, and the
                way I approach projects. I enjoy moving between technical
                details and the bigger picture — understanding the problem,
                shaping the idea, and figuring out how it can become something
                useful.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                {[
                  "Building",
                  "Learning",
                  "Design",
                  "Experimenting",
                  "Problem Solving",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/[0.1] px-4 py-2 text-xs text-white/40"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CURRENT DIRECTION */}

      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="rounded-[2rem] border border-purple-300/15 bg-purple-300/[0.035] p-8 md:p-14 lg:p-20">
            <div className="grid items-end gap-16 lg:grid-cols-[1fr_0.8fr]">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-purple-200/45">
                  CURRENT DIRECTION
                </p>

                <h2 className="mt-6 text-4xl leading-[0.9] tracking-[-0.06em] md:text-6xl lg:text-7xl">
                  Looking for the
                  <br />
                  next problem
                  <br />
                  to solve.
                </h2>
              </div>

              <div>
                <p className="text-base leading-relaxed text-white/40">
                  I&apos;m looking for opportunities where I can work with a
                  strong team, build real software, and keep growing at the
                  intersection of{" "}
                  <span className="text-white/65">
                    AI and full-stack engineering.
                  </span>
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/#work"
                    className="inline-flex items-center gap-3 rounded-full bg-[#f1e9dc] px-6 py-3 text-xs font-medium text-[#08070a] transition-transform hover:scale-[1.02]"
                  >
                    View my work
                    <ArrowUpRight size={14} />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 rounded-full border border-white/[0.12] px-6 py-3 text-xs text-white/55 transition-colors hover:border-white/25 hover:text-white"
                  >
                    Get in touch
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <section className="border-t border-white/[0.07] px-6 py-16 md:px-10">
        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-xl tracking-[-0.06em] text-white/70">SM.</p>

            <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-white/20">
              Computer Science · AI · Software Engineering
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/35 transition-colors hover:text-white"
          >
            Let&apos;s talk
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>
    </main>
  );
}