"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Brain,
  Camera,
  Cpu,
  Database,
  Fingerprint,
  Gauge,
  GitBranch,
  MessageSquare,
  Radio,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Wind,
  type LucideIcon,
} from "lucide-react";
function ResearchFeature({
  icon: Icon,
  title,
  text,
}: {
  icon: LucideIcon;
  title: string;
  text: string;
}) {
  return (
    <div className="border-t border-white/[0.07] pt-5">
      <Icon size={18} className="text-purple-300/60" />

      <h3 className="mt-4 text-sm font-medium text-white/75">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-white/35">
        {text}
      </p>
    </div>
  );
}
const sensors = [
  {
    icon: Fingerprint,
    label: "NFC",
    description: "Item identity",
  },
  {
    icon: Gauge,
    label: "WEIGHT",
    description: "Load sensing",
  },
  {
    icon: ShieldCheck,
    label: "BAG STATE",
    description: "Open / closed",
  },
  {
    icon: Wind,
    label: "MOTION",
    description: "Movement context",
  },
  {
    icon: Camera,
    label: "CAMERA",
    description: "Visual information",
  },
];

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (slug === "social-video") {
    return <SocialVideoCaseStudy />;
  }

  if (slug === "psynova") {
    return <PsyNovaCaseStudy />;
  }

  if (slug === "plant-disease") {
    return <PlantDiseaseCaseStudy />;
  }

  if (slug === "food-patent") {
    return <FoodPatentCaseStudy />;
  }

  if (slug === "protective-gear") {
    return <ProtectiveGearCaseStudy />;
  }

  if (slug === "altera") {
    return <AlteraCaseStudy />;
  }

  if (slug === "devastai") {
    return <DevastAICaseStudy />;
  }

  if (slug !== "bagx") {
    return (
      <main className="min-h-screen bg-[#0d0b10] text-[#f3eee5] flex items-center justify-center">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-white/30">
            404
          </p>

          <h1 className="mt-4 text-4xl tracking-[-0.04em]">
            Project not found.
          </h1>

          <Link
            href="/work"
            className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/45 hover:text-white transition-colors"
          >
            Back to work
            <ArrowUpRight size={13} />
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0d0b10] text-[#f3eee5] overflow-hidden">
      {/* -------------------------------------------------- */}
      {/* NAV */}
      {/* -------------------------------------------------- */}

      <nav className="w-full border-b border-white/[0.08]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-6 flex items-center justify-between">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/55 hover:text-white transition-colors"
          >
            <ArrowLeft size={14} />
            Back to work
          </Link>

          <div className="text-xs uppercase tracking-[0.25em] text-white/30">
            Case Study / 01
          </div>
        </div>
      </nav>

      {/* -------------------------------------------------- */}
      {/* HERO */}
      {/* -------------------------------------------------- */}

      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-24">
        <div className="grid lg:grid-cols-[1fr_0.85fr] gap-16 lg:gap-24 items-end">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="px-3 py-1.5 rounded-full border border-purple-300/20 bg-purple-300/[0.06] text-[10px] uppercase tracking-[0.2em] text-purple-200">
                Patent in Process
              </span>

              <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                AI / IoT / Sensor Fusion
              </span>
            </div>

            <h1 className="text-[clamp(4rem,11vw,10rem)] leading-[0.82] tracking-[-0.07em] font-semibold">
              BAGX
            </h1>

            <p className="mt-8 max-w-2xl text-xl md:text-2xl leading-relaxed text-white/55">
              A context-aware smart bag system that understands what is
              inside, what changed, and what the user may need next.
            </p>
          </div>

          <div className="lg:pb-3">
            <div className="border-l border-white/[0.12] pl-6 md:pl-8">
              <p className="text-xs uppercase tracking-[0.22em] text-white/30 mb-4">
                The problem
              </p>

              <p className="text-lg md:text-xl leading-relaxed text-white/65">
                Bags can carry dozens of important objects, but they have no
                real understanding of their contents, state, or context.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- */}
      {/* HERO SYSTEM VISUAL */}
      {/* -------------------------------------------------- */}

      <section className="px-6 md:px-10 pb-28">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative rounded-[2rem] border border-white/[0.08] bg-[#121016] overflow-hidden">
            {/* background grid */}
            <div
              className="absolute inset-0 opacity-[0.18]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />

            <div className="relative p-8 md:p-14 lg:p-20">
              <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-center">
                {/* sensors */}
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/30 mb-8">
                    Multimodal sensing
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    {sensors.map((sensor) => {
                      const Icon = sensor.icon;

                      return (
                        <div
                          key={sensor.label}
                          className="border border-white/[0.08] bg-white/[0.025] rounded-xl p-4 md:p-5"
                        >
                          <Icon
                            size={18}
                            strokeWidth={1.5}
                            className="text-purple-200/80 mb-5"
                          />

                          <p className="text-[10px] uppercase tracking-[0.18em] text-white/70">
                            {sensor.label}
                          </p>

                          <p className="text-xs text-white/30 mt-1">
                            {sensor.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* central engine */}
                <div className="flex flex-col items-center">
                  <div className="relative w-full max-w-[520px]">
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-300/30 to-transparent" />

                    <div className="relative border border-purple-300/20 bg-purple-300/[0.05] rounded-2xl p-8 md:p-10 text-center">
                      <Cpu
                        size={28}
                        strokeWidth={1.3}
                        className="mx-auto text-purple-200 mb-5"
                      />

                      <p className="text-[10px] uppercase tracking-[0.25em] text-purple-200/70 mb-3">
                        Core intelligence
                      </p>

                      <h2 className="text-2xl md:text-3xl font-medium tracking-[-0.03em]">
                        Event-Driven
                        <br />
                        Sensor Fusion
                      </h2>

                      <p className="mt-4 text-sm leading-relaxed text-white/40 max-w-sm mx-auto">
                        Multiple signals are correlated to reconstruct the
                        current state of the bag and its items.
                      </p>
                    </div>

                    <div className="h-10 w-px bg-purple-300/20 mx-auto" />

                    <div className="border border-white/[0.08] bg-white/[0.025] rounded-2xl p-7 text-center">
                      <Brain
                        size={22}
                        strokeWidth={1.3}
                        className="mx-auto text-white/60 mb-4"
                      />

                      <p className="text-[10px] uppercase tracking-[0.25em] text-white/30 mb-2">
                        Intelligence layer
                      </p>

                      <p className="text-lg md:text-xl">
                        Item Verification Engine
                      </p>

                      <p className="text-xs text-white/35 mt-2">
                        Inventory · Context · Recommendations
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-14 pt-6 border-t border-white/[0.08] flex flex-wrap justify-between gap-4 text-[10px] uppercase tracking-[0.2em] text-white/25">
                <span>Identity</span>
                <span>Weight</span>
                <span>State</span>
                <span>Motion</span>
                <span>Vision</span>
                <span>Context</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- */}
      {/* THE IDEA */}
      {/* -------------------------------------------------- */}

      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 border-t border-white/[0.08]">
        <div className="grid lg:grid-cols-[0.3fr_1fr] gap-12 lg:gap-24">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
              01 / The idea
            </p>
          </div>

          <div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl tracking-[-0.055em] leading-[0.95] max-w-4xl">
              One event.
              <br />
              Multiple signals.
            </h2>

            <div className="mt-10 max-w-3xl">
              <p className="text-lg md:text-xl leading-relaxed text-white/50">
                BAGX does not depend on a single sensor to decide whether an
                item is present. Instead, it combines multiple signals and
                interprets them together.
              </p>

              <p className="mt-6 text-base md:text-lg leading-relaxed text-white/35">
                An NFC interaction can establish identity. A change in weight
                can indicate movement. A magnetic sensor can provide bag-state
                context, while motion and visual information add further
                evidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- */}
      {/* ITEM STATE */}
      {/* -------------------------------------------------- */}

      <section className="px-6 md:px-10 py-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-14">
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/30 mb-5">
              02 / State reconstruction
            </p>

            <h2 className="text-4xl md:text-6xl tracking-[-0.05em]">
              What does the bag
              <br />
              actually know?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {/* IN BAG */}
            <div className="min-h-[300px] rounded-2xl border border-white/[0.08] bg-white/[0.025] p-7 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-purple-200/60">
                  State / 01
                </span>

                <div className="mt-10 h-14 w-14 rounded-full border border-purple-300/20 bg-purple-300/[0.06] flex items-center justify-center">
                  <ShieldCheck
                    size={22}
                    strokeWidth={1.3}
                    className="text-purple-200"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-2xl tracking-[-0.03em]">IN BAG</h3>

                <p className="mt-3 text-sm leading-relaxed text-white/35">
                  Evidence indicates that the registered item is currently
                  inside the bag.
                </p>
              </div>
            </div>

            {/* OUTSIDE */}
            <div className="min-h-[300px] rounded-2xl border border-white/[0.08] bg-white/[0.025] p-7 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                  State / 02
                </span>

                <div className="mt-10 h-14 w-14 rounded-full border border-white/[0.1] flex items-center justify-center">
                  <Radio
                    size={22}
                    strokeWidth={1.3}
                    className="text-white/60"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-2xl tracking-[-0.03em]">OUTSIDE BAG</h3>

                <p className="mt-3 text-sm leading-relaxed text-white/35">
                  Sensor events suggest that the item is no longer within the
                  bag.
                </p>
              </div>
            </div>

            {/* UNCERTAIN */}
            <div className="min-h-[300px] rounded-2xl border border-white/[0.08] bg-white/[0.025] p-7 flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                  State / 03
                </span>

                <div className="mt-10 h-14 w-14 rounded-full border border-white/[0.1] flex items-center justify-center text-white/50">
                  ?
                </div>
              </div>

              <div>
                <h3 className="text-2xl tracking-[-0.03em]">UNCERTAIN</h3>

                <p className="mt-3 text-sm leading-relaxed text-white/35">
                  Conflicting or insufficient signals prevent a confident
                  state decision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- */}
      {/* CONTEXT AI */}
      {/* -------------------------------------------------- */}

      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 border-t border-white/[0.08]">
        <div className="grid lg:grid-cols-[0.8fr_1fr] gap-16 items-center">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/30 mb-5">
              03 / Context-aware AI
            </p>

            <h2 className="text-4xl md:text-6xl tracking-[-0.055em] leading-[0.95]">
              Packing that
              <br />
              understands context.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/45">
              BAGX extends beyond inventory tracking. The system is designed
              to use trip context such as destination, duration, activities,
              and environmental conditions to assist with packing decisions.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/[0.08] bg-[#121016] p-7 md:p-10">
            <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
              <div className="flex items-center gap-3">
                <Brain
                  size={19}
                  strokeWidth={1.3}
                  className="text-purple-200"
                />

                <span className="text-xs uppercase tracking-[0.18em] text-white/60">
                  AI Trip & Item Assistant
                </span>
              </div>

              <span className="text-[9px] uppercase tracking-[0.18em] text-purple-200/50">
                Context
              </span>
            </div>

            <div className="py-7">
              <p className="text-xs uppercase tracking-[0.18em] text-white/25 mb-5">
                Trip profile
              </p>

              <div className="grid grid-cols-2 gap-3">
                {[
                  ["Destination", "Travel"],
                  ["Duration", "3 days"],
                  ["Activity", "Mixed"],
                  ["Environment", "Variable"],
                ].map(([key, value]) => (
                  <div
                    key={key}
                    className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-4"
                  >
                    <p className="text-[9px] uppercase tracking-[0.16em] text-white/25">
                      {key}
                    </p>

                    <p className="mt-2 text-sm text-white/70">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/[0.08]">
              <p className="text-[9px] uppercase tracking-[0.18em] text-white/25 mb-3">
                Assistant
              </p>

              <p className="text-sm md:text-base leading-relaxed text-white/55">
                Review your essentials before leaving. Items can be checked
                against your registered inventory and trip context.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- */}
      {/* ARCHITECTURE */}
      {/* -------------------------------------------------- */}

      <section className="px-6 md:px-10 py-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-14">
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/30 mb-5">
              04 / Architecture
            </p>

            <h2 className="text-4xl md:text-6xl tracking-[-0.05em]">
              From physical signals
              <br />
              to useful decisions.
            </h2>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-[12%] right-[12%] top-1/2 h-px bg-white/[0.08]" />

            <div className="grid md:grid-cols-4 gap-4 relative">
              {[
                {
                  number: "01",
                  icon: Cpu,
                  title: "SMART BAG",
                  text: "Sensors capture physical events and item-related signals.",
                },
                {
                  number: "02",
                  icon: Database,
                  title: "EVENT LAYER",
                  text: "Signals are correlated into meaningful bag and item events.",
                },
                {
                  number: "03",
                  icon: Brain,
                  title: "INTELLIGENCE",
                  text: "State reconstruction and contextual reasoning transform events into information.",
                },
                {
                  number: "04",
                  icon: Smartphone,
                  title: "APPLICATION",
                  text: "The user receives inventory state, notifications, and contextual assistance.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.number}
                    className="relative rounded-2xl border border-white/[0.08] bg-[#0d0b10] p-6 md:p-7"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                        {item.number}
                      </span>

                      <Icon
                        size={18}
                        strokeWidth={1.3}
                        className="text-purple-200/60"
                      />
                    </div>

                    <h3 className="mt-12 text-sm tracking-[0.12em]">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-white/35">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- */}
      {/* TECHNOLOGY */}
      {/* -------------------------------------------------- */}

      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 border-t border-white/[0.08]">
        <div className="grid lg:grid-cols-[0.3fr_1fr] gap-12 lg:gap-24">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
              05 / Technology
            </p>
          </div>

          <div>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
              <TechGroup
                title="Identification"
                items={["NFC / RFID", "Camera-assisted recognition"]}
              />

              <TechGroup
                title="Sensors"
                items={[
                  "Load Cell + HX711",
                  "Magnetic sensor",
                  "MPU6050 motion sensor",
                ]}
              />

              <TechGroup
                title="Embedded"
                items={["ESP32", "ESP32-CAM"]}
              />

              <TechGroup
                title="Software"
                items={[
                  "React + TypeScript",
                  "Java + Spring Boot",
                  "Firebase / Firestore",
                ]}
              />
            </div>

            <div className="mt-14 pt-8 border-t border-white/[0.08]">
              <p className="text-xs leading-relaxed text-white/30 max-w-3xl">
                BAGX is currently presented as a software and interaction
                prototype. The physical sensing layer represents the intended
                system architecture and sensor behaviour rather than a
                currently connected production device.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- */}
      {/* CLOSING */}
      {/* -------------------------------------------------- */}

      <section className="px-6 md:px-10 pt-20 pb-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="rounded-[2rem] border border-white/[0.08] bg-purple-300/[0.04] p-8 md:p-14 lg:p-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-purple-200/50 mb-5">
                  BAGX / Context-Aware Smart Bag
                </p>

                <h2 className="text-4xl md:text-6xl lg:text-7xl tracking-[-0.055em] leading-[0.95] max-w-3xl">
                  Track.
                  <br />
                  Understand.
                  <br />
                  Never Forget.
                </h2>
              </div>

              <Link
                href="/#work"
                className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors"
              >
                Back to selected work
                <ArrowUpRight
                  size={15}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function TechGroup({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.22em] text-white/25 mb-4">
        {title}
      </p>

      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="px-3 py-2 rounded-lg border border-white/[0.08] bg-white/[0.025] text-xs text-white/55"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function SocialVideoCaseStudy() {
  return (
    <main className="min-h-screen bg-[#0d0b10] text-[#f3eee5] overflow-hidden">
      {/* NAV */}
      <nav className="w-full border-b border-white/[0.08]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-6 flex items-center justify-between">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/55 hover:text-white transition-colors"
          >
            <ArrowLeft size={14} />
            Back to work
          </Link>

          <div className="text-xs uppercase tracking-[0.25em] text-white/30">
            Case Study / 02
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-24">
        <div className="grid lg:grid-cols-[1fr_0.8fr] gap-16 items-end">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="px-3 py-1.5 rounded-full border border-purple-300/20 bg-purple-300/[0.06] text-[10px] uppercase tracking-[0.2em] text-purple-200">
                Full-Stack Project
              </span>

              <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                Generative AI / RAG / Agentic Systems
              </span>
            </div>

            <h1 className="text-[clamp(3.5rem,8vw,8rem)] leading-[0.82] tracking-[-0.07em] font-semibold max-w-5xl">
              SOCIAL VIDEO
              <br />
              INTELLIGENCE
            </h1>

            <p className="mt-8 max-w-2xl text-xl md:text-2xl leading-relaxed text-white/55">
              An agentic RAG platform that compares short-form videos,
              retrieves relevant context, and turns scattered video data into
              useful AI-driven insights.
            </p>
          </div>

          <div className="border-l border-white/[0.12] pl-6 md:pl-8">
            <p className="text-xs uppercase tracking-[0.22em] text-white/30 mb-4">
              The idea
            </p>

            <p className="text-lg md:text-xl leading-relaxed text-white/60">
              Instead of watching multiple short-form videos manually,
              understand them through a single intelligent analysis layer.
            </p>
          </div>
        </div>
      </section>

      {/* MAIN VISUAL */}
      <section className="px-6 md:px-10 pb-28">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative rounded-[2rem] border border-white/[0.08] bg-[#121016] overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.18]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />

            <div className="relative p-8 md:p-14 lg:p-20">
              <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-6 items-center">

                {/* YOUTUBE */}
                <VideoSource
                  icon={Radio}
                  platform="YouTube Short"
                  title="Video A"
                  details={[
                    "Transcript",
                    "Metadata",
                    "Engagement",
                  ]}
                />

                {/* ENGINE */}
                <div className="flex flex-col items-center">
                  ...
                </div>

                <VideoSource
                  icon={Camera}
                  platform="Instagram Reel"
                  title="Video B"
                  details={[
                    "Transcript",
                    "Metadata",
                    "Engagement",
                  ]}
                />
              </div>

              {/* PIPELINE */}
              <div className="mt-16 pt-10 border-t border-white/[0.08]">
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/25 mb-7">
                  Analysis pipeline
                </p>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {[
                    ["01", "Extract"],
                    ["02", "Chunk"],
                    ["03", "Embed"],
                    ["04", "Retrieve"],
                    ["05", "Generate"],
                  ].map(([number, label]) => (
                    <div
                      key={number}
                      className="border border-white/[0.07] bg-white/[0.02] rounded-xl p-4"
                    >
                      <span className="text-[9px] text-white/25">
                        {number}
                      </span>

                      <p className="mt-3 text-xs uppercase tracking-[0.15em] text-white/60">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 border-t border-white/[0.08]">
        <div className="grid lg:grid-cols-[0.3fr_1fr] gap-12 lg:gap-24">
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
            01 / The problem
          </p>

          <div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl tracking-[-0.055em] leading-[0.95] max-w-4xl">
              Short-form content is
              <br />
              rich in information,
              <br />
              but fragmented.
            </h2>

            <div className="mt-10 max-w-3xl">
              <p className="text-lg md:text-xl leading-relaxed text-white/50">
                A creator, researcher, marketer, or analyst may need to
                compare multiple videos across platforms. The information is
                distributed across transcripts, metadata, engagement signals,
                and separate pieces of context.
              </p>

              <p className="mt-6 text-base md:text-lg leading-relaxed text-white/35">
                The system brings these sources together and creates a
                retrieval layer that an AI agent can reason over.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RAG */}
      <section className="px-6 md:px-10 py-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-14">
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/30 mb-5">
              02 / Retrieval-Augmented Generation
            </p>

            <h2 className="text-4xl md:text-6xl tracking-[-0.05em]">
              Retrieve context.
              <br />
              Then reason over it.
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              {
                icon: Camera,
                title: "INGEST",
                text: "Video content, transcripts, metadata and engagement information enter the system.",
              },
              {
                icon: Database,
                title: "STORE",
                text: "Relevant chunks are embedded and stored for semantic retrieval.",
              },
              {
                icon: Search,
                title: "RETRIEVE",
                text: "The system retrieves context relevant to the user's question.",
              },
              {
                icon: Sparkles,
                title: "GENERATE",
                text: "Gemini uses the retrieved context to produce grounded analysis.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="min-h-[280px] rounded-2xl border border-white/[0.08] bg-white/[0.025] p-7 flex flex-col justify-between"
                >
                  <div>
                    <Icon
                      size={21}
                      strokeWidth={1.3}
                      className="text-purple-200/70"
                    />

                    <p className="mt-8 text-[10px] uppercase tracking-[0.2em] text-white/30">
                      {item.title}
                    </p>
                  </div>

                  <p className="text-sm leading-relaxed text-white/40">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AGENT */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 border-t border-white/[0.08]">
        <div className="grid lg:grid-cols-[0.8fr_1fr] gap-16 items-center">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/30 mb-5">
              03 / Agentic workflow
            </p>

            <h2 className="text-4xl md:text-6xl tracking-[-0.055em] leading-[0.95]">
              More than
              <br />
              a chatbot.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/45">
              LangGraph coordinates the analysis workflow while the retrieval
              layer supplies relevant information to the generation step.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/[0.08] bg-[#121016] p-7 md:p-10">
            <div className="flex items-center gap-3 pb-6 border-b border-white/[0.08]">
              <GitBranch
                size={19}
                strokeWidth={1.3}
                className="text-purple-200"
              />

              <span className="text-xs uppercase tracking-[0.18em] text-white/60">
                LangGraph workflow
              </span>
            </div>

            <div className="mt-8 space-y-3">
              {[
                ["01", "Understand query"],
                ["02", "Retrieve relevant context"],
                ["03", "Reason over retrieved data"],
                ["04", "Generate grounded response"],
                ["05", "Return sources + answer"],
              ].map(([number, label], index) => (
                <div
                  key={number}
                  className="relative flex items-center gap-5"
                >
                  <span className="w-8 h-8 shrink-0 rounded-lg border border-white/[0.08] flex items-center justify-center text-[9px] text-white/35">
                    {number}
                  </span>

                  <div className="flex-1 rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3">
                    <p className="text-sm text-white/60">{label}</p>
                  </div>

                  {index < 4 && (
                    <div className="absolute left-4 top-8 h-3 w-px bg-white/[0.1]" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUTPUT */}
      <section className="px-6 md:px-10 py-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="rounded-[2rem] border border-white/[0.08] bg-purple-300/[0.04] p-8 md:p-14 lg:p-20">
            <div className="grid lg:grid-cols-[0.7fr_1fr] gap-14 items-center">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-purple-200/50 mb-5">
                  04 / Output
                </p>

                <h2 className="text-4xl md:text-6xl tracking-[-0.055em] leading-[0.95]">
                  From videos
                  <br />
                  to insight.
                </h2>

                <p className="mt-7 text-base md:text-lg leading-relaxed text-white/40">
                  The final interface combines AI-generated analysis with
                  retrieved context and source citations.
                </p>
              </div>

              <div className="rounded-2xl border border-white/[0.08] bg-[#0d0b10] p-6 md:p-8">
                <div className="flex items-center gap-3 pb-5 border-b border-white/[0.08]">
                  <MessageSquare
                    size={18}
                    strokeWidth={1.3}
                    className="text-purple-200/70"
                  />

                  <span className="text-xs uppercase tracking-[0.18em] text-white/50">
                    AI Analysis
                  </span>
                </div>

                <p className="mt-7 text-sm md:text-base leading-relaxed text-white/60">
                  Compare the content, identify important differences, and
                  explain the reasoning using information retrieved from the
                  analyzed videos.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    "AI reasoning",
                    "Retrieved context",
                    "Source citations",
                    "Multi-turn memory",
                  ].map((item) => (
                    <span
                      key={item}
                      className="px-3 py-2 rounded-lg border border-white/[0.07] text-[10px] uppercase tracking-[0.12em] text-white/35"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 border-t border-white/[0.08]">
        <div className="grid lg:grid-cols-[0.3fr_1fr] gap-12 lg:gap-24">
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
            05 / Technology
          </p>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            <TechGroup
              title="Frontend"
              items={["Next.js 15", "React", "TypeScript"]}
            />

            <TechGroup
              title="Backend"
              items={["FastAPI", "Python", "REST APIs"]}
            />

            <TechGroup
              title="AI"
              items={["Gemini", "LangGraph", "RAG"]}
            />

            <TechGroup
              title="Retrieval"
              items={["ChromaDB", "Embeddings", "Semantic Search"]}
            />

            <TechGroup
              title="Application"
              items={["SSE Streaming", "Session Persistence", "Multi-turn Memory"]}
            />

            <TechGroup
              title="Analysis"
              items={[
                "Transcript Extraction",
                "Metadata Analysis",
                "Engagement Metrics",
              ]}
            />
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="px-6 md:px-10 pt-20 pb-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-8 md:p-14 lg:p-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/30 mb-5">
                  Social Video Intelligence
                </p>

                <h2 className="text-4xl md:text-6xl lg:text-7xl tracking-[-0.055em] leading-[0.95]">
                  Watch less.
                  <br />
                  Understand more.
                </h2>
              </div>

              <Link
                href="/#work"
                className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors"
              >
                Back to selected work

                <ArrowUpRight
                  size={15}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function VideoSource({
  icon: Icon,
  platform,
  title,
  details,
}: {
  icon: React.ElementType;
  platform: string;
  title: string;
  details: string[];
}) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 md:p-7">
      <div className="flex items-center justify-between">
        <Icon
          size={22}
          strokeWidth={1.3}
          className="text-white/60"
        />

        <span className="text-[9px] uppercase tracking-[0.2em] text-white/25">
          Source
        </span>
      </div>

      <p className="mt-12 text-[10px] uppercase tracking-[0.2em] text-white/30">
        {platform}
      </p>

      <h3 className="mt-3 text-2xl tracking-[-0.03em]">{title}</h3>

      <div className="mt-7 space-y-2">
        {details.map((detail) => (
          <div
            key={detail}
            className="flex items-center gap-3 text-xs text-white/35"
          >
            <span className="w-1 h-1 rounded-full bg-purple-200/50" />
            {detail}
          </div>
        ))}
      </div>
    </div>
  );
}
function PsyNovaCaseStudy() {
  return (
    <main className="min-h-screen bg-[#0d0b10] text-[#f3eee5] overflow-hidden">
      {/* NAV */}
      <nav className="w-full border-b border-white/[0.08]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-6 flex items-center justify-between">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/55 hover:text-white transition-colors"
          >
            <ArrowLeft size={14} />
            Back to work
          </Link>

          <div className="text-xs uppercase tracking-[0.25em] text-white/30">
            Case Study / 03
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-24">
        <div className="grid lg:grid-cols-[1fr_0.8fr] gap-16 items-end">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="px-3 py-1.5 rounded-full border border-purple-300/20 bg-purple-300/[0.06] text-[10px] uppercase tracking-[0.2em] text-purple-200">
                Research System
              </span>

              <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                Adaptive RAG / AI Safety
              </span>
            </div>

            <h1 className="text-[clamp(4rem,10vw,9rem)] leading-[0.82] tracking-[-0.07em] font-semibold">
              PSYNOVA
            </h1>

            <p className="mt-8 max-w-2xl text-xl md:text-2xl leading-relaxed text-white/55">
              A context- and risk-aware adaptive RAG system designed to make
              AI responses safer, more personalized, and more relevant.
            </p>

            <p className="mt-5 text-sm text-white/30">
              Evolved from the foundation of MindCare AI.
            </p>
          </div>

          <div className="border-l border-white/[0.12] pl-6 md:pl-8">
            <p className="text-xs uppercase tracking-[0.22em] text-white/30 mb-4">
              Research direction
            </p>

            <p className="text-lg md:text-xl leading-relaxed text-white/60">
              Instead of treating every user query the same way, PsyNova
              adapts retrieval and response behaviour according to context,
              emotion, risk, and safety requirements.
            </p>
          </div>
        </div>
      </section>

      {/* SYSTEM VISUAL */}
      <section className="px-6 md:px-10 pb-28">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative rounded-[2rem] border border-white/[0.08] bg-[#121016] overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.18]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />

            <div className="relative p-8 md:p-14 lg:p-20">
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/25 mb-10">
                Adaptive reasoning architecture
              </p>

              <div className="grid lg:grid-cols-3 gap-4">
                {/* CONTEXT */}
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-7">
                  <Brain
                    size={22}
                    strokeWidth={1.3}
                    className="text-purple-200/70"
                  />

                  <p className="mt-10 text-[10px] uppercase tracking-[0.2em] text-white/30">
                    Context assessment
                  </p>

                  <div className="mt-5 space-y-2">
                    {["Context", "Emotion", "Risk"].map((item) => (
                      <div
                        key={item}
                        className="rounded-lg border border-white/[0.07] px-4 py-3 text-xs text-white/50"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* RAG */}
                <div className="rounded-2xl border border-purple-300/20 bg-purple-300/[0.05] p-7">
                  <Database
                    size={22}
                    strokeWidth={1.3}
                    className="text-purple-200"
                  />

                  <p className="mt-10 text-[10px] uppercase tracking-[0.2em] text-purple-200/60">
                    Adaptive RAG
                  </p>

                  <h2 className="mt-4 text-2xl tracking-[-0.03em]">
                    Retrieval
                    <br />
                    that adapts.
                  </h2>

                  <p className="mt-5 text-sm leading-relaxed text-white/40">
                    Retrieval behaviour is influenced by the assessed context
                    and risk of the interaction.
                  </p>
                </div>

                {/* SAFETY */}
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-7">
                  <ShieldCheck
                    size={22}
                    strokeWidth={1.3}
                    className="text-white/60"
                  />

                  <p className="mt-10 text-[10px] uppercase tracking-[0.2em] text-white/30">
                    Response policy
                  </p>

                  <div className="mt-5 space-y-2">
                    {[
                      "Safety validation",
                      "Personalization",
                      "Response policy",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-lg border border-white/[0.07] px-4 py-3 text-xs text-white/50"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-center py-8">
                <div className="h-10 w-px bg-purple-300/20" />
              </div>

              <div className="max-w-xl mx-auto rounded-2xl border border-white/[0.08] bg-white/[0.025] p-7 md:p-9 text-center">
                <Sparkles
                  size={23}
                  strokeWidth={1.3}
                  className="mx-auto text-purple-200/70"
                />

                <p className="mt-5 text-[10px] uppercase tracking-[0.22em] text-white/30">
                  Final response
                </p>

                <p className="mt-3 text-xl md:text-2xl tracking-[-0.03em]">
                  Safe · Relevant · Personalized
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVOLUTION */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 border-t border-white/[0.08]">
        <div className="grid lg:grid-cols-[0.3fr_1fr] gap-12 lg:gap-24">
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
            01 / Evolution
          </p>

          <div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl tracking-[-0.055em] leading-[0.95]">
              From MindCare
              <br />
              to PsyNova.
            </h2>

            <p className="mt-10 max-w-3xl text-lg md:text-xl leading-relaxed text-white/50">
              PsyNova builds upon the foundation of MindCare AI and expands
              the system toward a more structured, context-aware retrieval
              architecture.
            </p>

            <div className="mt-12 grid md:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-7">
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                  Foundation
                </p>

                <h3 className="mt-5 text-2xl tracking-[-0.03em]">
                  MindCare AI
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-white/35">
                  Human-centric AI application focused on adaptive
                  interaction, emotional context, and personalized support.
                </p>
              </div>

              <div className="rounded-2xl border border-purple-300/20 bg-purple-300/[0.04] p-7">
                <p className="text-[10px] uppercase tracking-[0.2em] text-purple-200/50">
                  Evolution
                </p>

                <h3 className="mt-5 text-2xl tracking-[-0.03em]">
                  PsyNova
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-white/40">
                  Research-oriented adaptive RAG architecture incorporating
                  context assessment, risk awareness, safety validation, and
                  personalization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADAPTIVE PIPELINE */}
      <section className="px-6 md:px-10 py-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-14">
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/30 mb-5">
              02 / Adaptive pipeline
            </p>

            <h2 className="text-4xl md:text-6xl tracking-[-0.05em]">
              The same question
              <br />
              should not always
              <br />
              produce the same path.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                number: "01",
                title: "ASSESS",
                text: "Evaluate context, emotional signals, and potential risk before selecting a response strategy.",
              },
              {
                number: "02",
                title: "ADAPT",
                text: "Adjust retrieval and reasoning according to the assessed interaction state.",
              },
              {
                number: "03",
                title: "VALIDATE",
                text: "Apply safety and response policies before producing the final personalized answer.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="min-h-[300px] rounded-2xl border border-white/[0.08] bg-white/[0.025] p-7 flex flex-col justify-between"
              >
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                  {item.number}
                </span>

                <div>
                  <h3 className="text-2xl tracking-[-0.03em]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-white/35">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAFETY */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 border-t border-white/[0.08]">
        <div className="grid lg:grid-cols-[0.8fr_1fr] gap-16 items-center">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/30 mb-5">
              03 / Safety architecture
            </p>

            <h2 className="text-4xl md:text-6xl tracking-[-0.055em] leading-[0.95]">
              Retrieval is not
              <br />
              the final answer.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/45">
              PsyNova introduces validation and response-policy stages so
              retrieved information is not treated as an automatic final
              response.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/[0.08] bg-[#121016] p-7 md:p-10">
            <div className="space-y-3">
              {[
                ["01", "Context assessment"],
                ["02", "Crisis / risk service"],
                ["03", "Adaptive retrieval scoring"],
                ["04", "Response policy"],
                ["05", "Safety validator"],
                ["06", "Personalization"],
              ].map(([number, label]) => (
                <div
                  key={number}
                  className="flex items-center gap-4 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4"
                >
                  <span className="w-8 h-8 shrink-0 rounded-lg border border-white/[0.08] flex items-center justify-center text-[9px] text-white/30">
                    {number}
                  </span>

                  <span className="text-sm text-white/55">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* KNOWLEDGE */}
      <section className="px-6 md:px-10 py-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="rounded-[2rem] border border-white/[0.08] bg-purple-300/[0.04] p-8 md:p-14 lg:p-20">
            <div className="grid lg:grid-cols-[0.7fr_1fr] gap-14">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-purple-200/50 mb-5">
                  04 / Knowledge layer
                </p>

                <h2 className="text-4xl md:text-6xl tracking-[-0.055em] leading-[0.95]">
                  Ground responses
                  <br />
                  in trusted knowledge.
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  "NIMHANS",
                  "WHO",
                  "Harvard",
                  "APA",
                  "AASM",
                  "Tele-MANAS",
                ].map((source) => (
                  <div
                    key={source}
                    className="rounded-xl border border-white/[0.08] bg-[#0d0b10] p-5"
                  >
                    <p className="text-xs uppercase tracking-[0.15em] text-white/45">
                      {source}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH / RESEARCH */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 border-t border-white/[0.08]">
        <div className="grid lg:grid-cols-[0.3fr_1fr] gap-12 lg:gap-24">
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
            05 / Research system
          </p>

          <div>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
              <TechGroup
                title="Core"
                items={["Adaptive RAG", "Context Assessment", "Risk Awareness"]}
              />

              <TechGroup
                title="Safety"
                items={[
                  "Response Policy",
                  "Safety Validator",
                  "Crisis Service",
                ]}
              />

              <TechGroup
                title="Personalization"
                items={[
                  "User Context",
                  "Adaptive Retrieval",
                  "Personalized Responses",
                ]}
              />

              <TechGroup
                title="Evaluation"
                items={[
                  "Experiment Runner",
                  "LLM Comparison",
                  "RAG Evaluation",
                ]}
              />
            </div>

            <div className="mt-14 pt-8 border-t border-white/[0.08]">
              <p className="text-sm leading-relaxed text-white/35 max-w-3xl">
                PsyNova is an evolving research system. The architecture is
                being developed to investigate how context-, risk-, and
                safety-aware retrieval can improve personalized AI
                interactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="px-6 md:px-10 pt-20 pb-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-8 md:p-14 lg:p-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/30 mb-5">
                  PsyNova / Adaptive AI Research
                </p>

                <h2 className="text-4xl md:text-6xl lg:text-7xl tracking-[-0.055em] leading-[0.95]">
                  Context matters.
                  <br />
                  Safety matters.
                  <br />
                  AI should adapt.
                </h2>
              </div>

              <Link
                href="/#work"
                className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors"
              >
                Back to selected work

                <ArrowUpRight
                  size={15}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function PlantDiseaseCaseStudy() {
  return (
    <main className="min-h-screen bg-[#0d0b10] text-[#f3eee5] overflow-hidden">
      {/* NAV */}
      <nav className="w-full border-b border-white/[0.08]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-6 flex items-center justify-between">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/55 hover:text-white transition-colors"
          >
            <ArrowLeft size={14} />
            Back to work
          </Link>

          <div className="text-xs uppercase tracking-[0.25em] text-white/30">
            Case Study / 04
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-24">
        <div className="grid lg:grid-cols-[1fr_0.8fr] gap-16 items-end">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="px-3 py-1.5 rounded-full border border-purple-300/20 bg-purple-300/[0.06] text-[10px] uppercase tracking-[0.2em] text-purple-200">
                Conference Paper
              </span>

              <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                Deep Learning / Computer Vision
              </span>
            </div>

            <h1 className="text-[clamp(3.5rem,8vw,8rem)] leading-[0.82] tracking-[-0.07em] font-semibold">
              PLANT
              <br />
              DISEASE
            </h1>

            <p className="mt-8 max-w-2xl text-xl md:text-2xl leading-relaxed text-white/55">
              A lightweight deep learning approach for plant disease
              classification, enhanced with synthetic data augmentation and
              visual explanations.
            </p>
          </div>

          <div className="border-l border-white/[0.12] pl-6 md:pl-8">
            <p className="text-xs uppercase tracking-[0.22em] text-white/30 mb-4">
              Publication
            </p>

            <p className="text-lg md:text-xl leading-relaxed text-white/60">
              “Enhancing Plant Disease Classification: A Lightweight Deep
              Learning Approach with DcGAN Augmentation and Grad-CAM
              Explanations”
            </p>

            <p className="mt-5 text-xs uppercase tracking-[0.16em] text-white/30">
              ICIICC 2026 · Utkal University
            </p>
          </div>
        </div>
      </section>

      {/* PIPELINE VISUAL */}
      <section className="px-6 md:px-10 pb-28">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative rounded-[2rem] border border-white/[0.08] bg-[#121016] overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.18]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />

            <div className="relative p-8 md:p-14 lg:p-20">
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/25 mb-10">
                Research pipeline
              </p>

              <div className="grid md:grid-cols-4 gap-4">
                {[
                  {
                    number: "01",
                    title: "INPUT",
                    text: "Plant leaf image",
                    icon: Camera,
                  },
                  {
                    number: "02",
                    title: "AUGMENT",
                    text: "DcGAN-generated samples",
                    icon: Sparkles,
                  },
                  {
                    number: "03",
                    title: "CLASSIFY",
                    text: "Lightweight deep learning model",
                    icon: Brain,
                  },
                  {
                    number: "04",
                    title: "EXPLAIN",
                    text: "Grad-CAM visual explanation",
                    icon: Search,
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.number}
                      className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-7 min-h-[250px] flex flex-col justify-between"
                    >
                      <div className="flex justify-between">
                        <span className="text-[9px] text-white/25">
                          {item.number}
                        </span>

                        <Icon
                          size={20}
                          strokeWidth={1.3}
                          className="text-purple-200/70"
                        />
                      </div>

                      <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] text-purple-200/50">
                          {item.title}
                        </p>

                        <p className="mt-3 text-sm text-white/55">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 border-t border-white/[0.08]">
        <div className="grid lg:grid-cols-[0.3fr_1fr] gap-12 lg:gap-24">
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
            01 / Research problem
          </p>

          <div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl tracking-[-0.055em] leading-[0.95]">
              Classification
              <br />
              should also be
              <br />
              explainable.
            </h2>

            <p className="mt-10 max-w-3xl text-lg md:text-xl leading-relaxed text-white/50">
              Plant disease recognition can benefit from deep learning, but a
              prediction alone does not explain which regions of the leaf
              influenced the model's decision.
            </p>

            <p className="mt-6 max-w-3xl text-base md:text-lg leading-relaxed text-white/35">
              The work combines lightweight classification with synthetic
              augmentation and Grad-CAM-based visual explanations.
            </p>
          </div>
        </div>
      </section>

      {/* DCGAN */}
      <section className="px-6 md:px-10 py-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-[0.8fr_1fr] gap-16 items-center">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/30 mb-5">
                02 / Data augmentation
              </p>

              <h2 className="text-4xl md:text-6xl tracking-[-0.055em] leading-[0.95]">
                More useful
                <br />
                training data.
              </h2>

              <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/45">
                DcGAN augmentation is used to generate additional synthetic
                samples, supporting the training process when available
                examples are limited.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/[0.08] bg-[#121016] p-8 md:p-10">
              <div className="grid grid-cols-3 gap-3 items-center">
                <div className="rounded-xl border border-white/[0.08] p-5 text-center">
                  <Camera
                    size={20}
                    className="mx-auto text-white/50"
                    strokeWidth={1.3}
                  />
                  <p className="mt-4 text-[9px] uppercase tracking-[0.15em] text-white/30">
                    Real data
                  </p>
                </div>

                <div className="text-center text-purple-200/60 text-xl">
                  +
                </div>

                <div className="rounded-xl border border-purple-300/20 bg-purple-300/[0.05] p-5 text-center">
                  <Sparkles
                    size={20}
                    className="mx-auto text-purple-200/70"
                    strokeWidth={1.3}
                  />
                  <p className="mt-4 text-[9px] uppercase tracking-[0.15em] text-purple-200/50">
                    DcGAN
                  </p>
                </div>
              </div>

              <div className="h-10 w-px bg-purple-300/20 mx-auto" />

              <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5 text-center">
                <Database
                  size={20}
                  className="mx-auto text-white/50"
                  strokeWidth={1.3}
                />

                <p className="mt-4 text-[9px] uppercase tracking-[0.15em] text-white/30">
                  Expanded training set
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLASSIFICATION */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 border-t border-white/[0.08]">
        <div className="mb-14">
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/30 mb-5">
            03 / Classification
          </p>

          <h2 className="text-4xl md:text-6xl tracking-[-0.05em]">
            Lightweight vision.
            <br />
            Practical inference.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            [
              "INPUT",
              "Leaf image is supplied to the trained classification pipeline.",
            ],
            [
              "PREDICTION",
              "The model identifies the corresponding plant disease class.",
            ],
            [
              "SEVERITY",
              "The system extends the workflow toward disease severity estimation.",
            ],
          ].map(([title, text], index) => (
            <div
              key={title}
              className="min-h-[280px] rounded-2xl border border-white/[0.08] bg-white/[0.025] p-7 flex flex-col justify-between"
            >
              <span className="text-[10px] text-white/25">
                0{index + 1}
              </span>

              <div>
                <h3 className="text-2xl tracking-[-0.03em]">{title}</h3>

                <p className="mt-4 text-sm leading-relaxed text-white/35">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GRAD CAM */}
      <section className="px-6 md:px-10 py-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="rounded-[2rem] border border-white/[0.08] bg-purple-300/[0.04] p-8 md:p-14 lg:p-20">
            <div className="grid lg:grid-cols-[0.7fr_1fr] gap-14 items-center">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-purple-200/50 mb-5">
                  04 / Explainability
                </p>

                <h2 className="text-4xl md:text-6xl tracking-[-0.055em] leading-[0.95]">
                  Show where
                  <br />
                  the model looked.
                </h2>

                <p className="mt-8 text-lg leading-relaxed text-white/40">
                  Grad-CAM generates visual explanations highlighting regions
                  that contributed to the model's classification decision.
                </p>
              </div>

              <div className="relative aspect-[4/3] rounded-2xl border border-white/[0.08] bg-[#0d0b10] overflow-hidden">
                <div className="absolute inset-[12%] rounded-[45%] border border-white/[0.08] rotate-[-8deg]" />

                <div className="absolute w-[45%] h-[35%] left-[22%] top-[28%] rounded-full bg-purple-300/[0.12] blur-2xl" />

                <div className="absolute left-[15%] right-[15%] bottom-7 flex justify-between text-[9px] uppercase tracking-[0.18em] text-white/25">
                  <span>Leaf image</span>
                  <span>Grad-CAM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PUBLICATION */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 border-t border-white/[0.08]">
        <div className="grid lg:grid-cols-[0.3fr_1fr] gap-12 lg:gap-24">
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
            05 / Publication
          </p>

          <div>
            <p className="text-2xl md:text-4xl tracking-[-0.035em] leading-tight max-w-4xl">
              Enhancing Plant Disease Classification: A Lightweight Deep
              Learning Approach with DcGAN Augmentation and Grad-CAM
              Explanations
            </p>

            <div className="mt-10 grid md:grid-cols-3 gap-3">
              <PublicationMeta
                label="Conference"
                value="ICIICC 2026"
              />

              <PublicationMeta
                label="Institution"
                value="Utkal University"
              />

              <PublicationMeta
                label="Presented"
                value="August 2026"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TECH */}
      <section className="px-6 md:px-10 py-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-8 md:p-14 lg:p-20">
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/30 mb-10">
              Research stack
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                "Deep Learning",
                "Computer Vision",
                "DcGAN",
                "Grad-CAM",
                "Image Classification",
                "Data Augmentation",
                "Disease Detection",
                "Severity Estimation",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/[0.08] bg-[#0d0b10] p-5"
                >
                  <p className="text-xs uppercase tracking-[0.12em] text-white/45">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="px-6 md:px-10 pt-20 pb-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-8 md:p-14 lg:p-20">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/30 mb-5">
                  Plant Disease Classification / ICIICC 2026
                </p>

                <h2 className="text-4xl md:text-6xl lg:text-7xl tracking-[-0.055em] leading-[0.95]">
                  Predict.
                  <br />
                  Explain.
                  <br />
                  Improve.
                </h2>
              </div>

              <Link
                href="/#work"
                className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors"
              >
                Back to selected work

                <ArrowUpRight
                  size={15}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function PublicationMeta({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
      <p className="text-[9px] uppercase tracking-[0.18em] text-white/25">
        {label}
      </p>

      <p className="mt-3 text-sm text-white/55">{value}</p>
    </div>
  );
}

function FoodPatentCaseStudy() {
  return (
    <main className="min-h-screen bg-[#0d0b10] text-[#f3eee5] overflow-hidden">
      {/* NAV */}
      <nav className="border-b border-white/[0.08]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-6 flex items-center justify-between">
          <Link
            href="/research"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors"
          >
            <ArrowLeft size={14} />
            Back to research
          </Link>

          <span className="text-xs uppercase tracking-[0.25em] text-white/25">
            Research / 01
          </span>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-24">
        <div className="grid lg:grid-cols-[1fr_0.65fr] gap-16 items-end">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="px-3 py-1.5 rounded-full border border-purple-300/20 bg-purple-300/[0.06] text-[10px] uppercase tracking-[0.2em] text-purple-200">
                Published Patent
              </span>

              <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                Indian Patent Application
              </span>
            </div>

            <h1 className="text-[clamp(3rem,7vw,7rem)] leading-[0.86] tracking-[-0.07em] font-semibold max-w-5xl">
              EMOTION-AWARE
              <br />
              FOOD
              <br />
              RECOMMENDATION
            </h1>

            <p className="mt-9 max-w-3xl text-xl md:text-2xl leading-relaxed text-white/50">
              AI-driven food recommendation combining emotion awareness with
              IoT-based calorie estimation.
            </p>
          </div>

          <div className="border-l border-white/[0.12] pl-7">
            <p className="text-xs uppercase tracking-[0.2em] text-white/25 mb-4">
              Patent
            </p>

            <p className="text-lg leading-relaxed text-white/60">
              AI-Driven Emotion-Aware Food Recommendation System with
              IoT-Based Calorie Estimation
            </p>

            <div className="mt-7 space-y-3">
              <MetaRow label="Application" value="202641090782" />
              <MetaRow label="Date" value="July 2026" />
              <MetaRow label="Status" value="Published" />
            </div>
          </div>
        </div>
      </section>

      {/* SYSTEM */}
      <section className="px-6 md:px-10 py-24 border-t border-white/[0.08]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-14">
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/30 mb-5">
              01 / System concept
            </p>

            <h2 className="text-4xl md:text-6xl tracking-[-0.05em]">
              Personalised food
              <br />
              recommendations.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <ResearchBlock
              number="01"
              title="Emotion"
              text="Emotion-aware intelligence forms part of the recommendation process."
            />

            <ResearchBlock
              number="02"
              title="Food"
              text="Food recommendation is connected to the user's contextual state."
            />

            <ResearchBlock
              number="03"
              title="Calorie estimation"
              text="IoT-based calorie estimation forms part of the broader system."
            />
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="px-6 md:px-10 pt-16 pb-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="rounded-[2rem] border border-white/[0.08] bg-purple-300/[0.04] p-8 md:p-14 lg:p-20">
            <p className="text-[10px] uppercase tracking-[0.25em] text-purple-200/50">
              Published Patent
            </p>

            <h2 className="mt-5 text-4xl md:text-6xl tracking-[-0.055em] leading-[0.95] max-w-4xl">
              AI, emotion,
              <br />
              food, and
              <br />
              intelligent estimation.
            </h2>

            <Link
              href="/research"
              className="mt-10 inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/45 hover:text-white transition-colors"
            >
              Back to research
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function ProtectiveGearCaseStudy() {
  return (
    <main className="min-h-screen bg-[#0d0b10] text-[#f3eee5] overflow-hidden">
      <nav className="border-b border-white/[0.08]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-6 flex items-center justify-between">
          <Link
            href="/research"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors"
          >
            <ArrowLeft size={14} />
            Back to research
          </Link>

          <span className="text-xs uppercase tracking-[0.25em] text-white/25">
            Research / 02
          </span>
        </div>
      </nav>

      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-24">
        <div className="grid lg:grid-cols-[1fr_0.65fr] gap-16 items-end">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="px-3 py-1.5 rounded-full border border-purple-300/20 bg-purple-300/[0.06] text-[10px] uppercase tracking-[0.2em] text-purple-200">
                Published Patent
              </span>

              <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                Indian Patent Application
              </span>
            </div>

            <h1 className="text-[clamp(3rem,7vw,7rem)] leading-[0.86] tracking-[-0.07em] font-semibold max-w-5xl">
              SMART
              <br />
              PROTECTIVE
              <br />
              GEAR
            </h1>

            <p className="mt-9 max-w-3xl text-xl md:text-2xl leading-relaxed text-white/50">
              A protective gear system combining hybrid power supply with
              environmental monitoring.
            </p>
          </div>

          <div className="border-l border-white/[0.12] pl-7">
            <p className="text-xs uppercase tracking-[0.2em] text-white/25 mb-4">
              Patent
            </p>

            <p className="text-lg leading-relaxed text-white/60">
              Smart Protective Gear System with Hybrid Power Supply and
              Environmental Monitoring
            </p>

            <div className="mt-7 space-y-3">
              <MetaRow label="Application" value="202641074345" />
              <MetaRow label="Date" value="June 2026" />
              <MetaRow label="Status" value="Published" />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 py-24 border-t border-white/[0.08]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-14">
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/30 mb-5">
              01 / System concept
            </p>

            <h2 className="text-4xl md:text-6xl tracking-[-0.05em]">
              Protection supported by
              <br />
              intelligent monitoring.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <ResearchBlock
              number="01"
              title="Protective system"
              text="The invention focuses on a smart protective gear architecture."
            />

            <ResearchBlock
              number="02"
              title="Hybrid power"
              text="A hybrid power supply forms part of the proposed system."
            />

            <ResearchBlock
              number="03"
              title="Environment"
              text="Environmental monitoring is integrated into the protective system."
            />
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 pt-16 pb-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="rounded-[2rem] border border-white/[0.08] bg-purple-300/[0.04] p-8 md:p-14 lg:p-20">
            <p className="text-[10px] uppercase tracking-[0.25em] text-purple-200/50">
              Published Patent
            </p>

            <h2 className="mt-5 text-4xl md:text-6xl tracking-[-0.055em] leading-[0.95] max-w-4xl">
              Smart protection
              <br />
              with environmental
              <br />
              awareness.
            </h2>

            <Link
              href="/research"
              className="mt-10 inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/45 hover:text-white transition-colors"
            >
              Back to research
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function AlteraCaseStudy() {
  return (
    <main className="min-h-screen bg-[#0d0b10] text-[#f3eee5] overflow-hidden">
      <nav className="border-b border-white/[0.08]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-6 flex items-center justify-between">
          <Link
            href="/research"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors"
          >
            <ArrowLeft size={14} />
            Back to research
          </Link>

          <span className="text-xs uppercase tracking-[0.25em] text-white/25">
            Research / 03
          </span>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-24">
        <div className="grid lg:grid-cols-[1fr_0.65fr] gap-16 items-end">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="px-3 py-1.5 rounded-full border border-purple-300/20 bg-purple-300/[0.06] text-[10px] uppercase tracking-[0.2em] text-purple-200">
                Patent in process
              </span>

              <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                ALTERA
              </span>
            </div>

            <h1 className="text-[clamp(3.5rem,8vw,8rem)] leading-[0.82] tracking-[-0.07em] font-semibold">
              ALTERA
            </h1>

            <p className="mt-8 max-w-3xl text-xl md:text-2xl leading-relaxed text-white/50">
              Context-Aware Adaptive Action Selection System Using Multimodal
              Wearable Sensing and Artificial Intelligence.
            </p>
          </div>

          <div className="border-l border-white/[0.12] pl-7">
            <p className="text-xs uppercase tracking-[0.2em] text-white/25 mb-4">
              Core idea
            </p>

            <p className="text-lg leading-relaxed text-white/60">
              A wearable intelligence architecture that interprets context,
              reasons over possible actions, and uses a dedicated Adaptive
              Action Engine to select appropriate actions.
            </p>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="px-6 md:px-10 py-24 border-t border-white/[0.08]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-14">
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/30 mb-5">
              01 / Architecture
            </p>

            <h2 className="text-4xl md:text-6xl tracking-[-0.05em]">
              Context becomes
              <br />
              action.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              ["01", "Wearable Context Module"],
              ["02", "Context Engine"],
              ["03", "AI Reasoning"],
              ["04", "Adaptive Action Engine"],
              ["05", "User Interaction"],
              ["06", "Continuous Adaptation"],
            ].map(([number, title]) => (
              <div
                key={number}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-7"
              >
                <span className="text-[10px] tracking-[0.15em] text-white/25">
                  {number}
                </span>

                <h3 className="mt-10 text-sm tracking-[0.08em] text-white/65">
                  {title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOVELTY */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-24">
        <div className="grid lg:grid-cols-[0.35fr_1fr] gap-12 lg:gap-24">
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
            02 / Research direction
          </p>

          <div>
            <h2 className="text-4xl md:text-6xl tracking-[-0.055em] leading-[0.95]">
              Separate reasoning
              <br />
              from action selection.
            </h2>

            <p className="mt-9 max-w-3xl text-lg md:text-xl leading-relaxed text-white/45">
              The architecture separates AI-generated candidate actions from
              the final action-selection layer, allowing context,
              personalization, priority, and suitability to influence the
              resulting action.
            </p>
          </div>
        </div>
      </section>

      {/* STATUS */}
      <section className="px-6 md:px-10 pt-16 pb-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="rounded-[2rem] border border-purple-300/15 bg-purple-300/[0.035] p-8 md:p-14 lg:p-20">
            <p className="text-[10px] uppercase tracking-[0.25em] text-purple-200/50">
              ALTERA / Patent in process
            </p>

            <h2 className="mt-5 text-4xl md:text-6xl tracking-[-0.055em] leading-[0.95] max-w-4xl">
              Sense.
              <br />
              Understand.
              <br />
              Adapt.
            </h2>

            <Link
              href="/research"
              className="mt-10 inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/45 hover:text-white transition-colors"
            >
              Back to research
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function DevastAICaseStudy() {
  return (
    <main className="min-h-screen bg-[#0d0b10] text-[#f3eee5] overflow-hidden">
      <nav className="border-b border-white/[0.08]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-6 flex items-center justify-between">
          <Link
            href="/research"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors"
          >
            <ArrowLeft size={14} />
            Back to research
          </Link>

          <span className="text-xs uppercase tracking-[0.25em] text-white/25">
            Research / 04
          </span>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-24">
        <div className="grid lg:grid-cols-[1fr_0.65fr] gap-16 items-end">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="px-3 py-1.5 rounded-full border border-purple-300/20 bg-purple-300/[0.06] text-[10px] uppercase tracking-[0.2em] text-purple-200">
                Academic AI System
              </span>

              <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                Computer Vision / Offline AI
              </span>
            </div>

            <h1 className="text-[clamp(3.5rem,8vw,8rem)] leading-[0.82] tracking-[-0.07em] font-semibold">
              DEVASTAI
            </h1>

            <p className="mt-8 max-w-3xl text-xl md:text-2xl leading-relaxed text-white/50">
              Offline AI-powered post-disaster damage detection and
              prioritization system.
            </p>
          </div>

          <div className="border-l border-white/[0.12] pl-7">
            <p className="text-xs uppercase tracking-[0.2em] text-white/25 mb-4">
              The idea
            </p>

            <p className="text-lg leading-relaxed text-white/60">
              Use computer vision to analyse post-disaster imagery and
              support damage prioritization in environments where continuous
              connectivity may not be available.
            </p>
          </div>
        </div>
      </section>

      {/* PIPELINE */}
      <section className="px-6 md:px-10 py-24 border-t border-white/[0.08]">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-14">
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/30 mb-5">
              01 / AI pipeline
            </p>

            <h2 className="text-4xl md:text-6xl tracking-[-0.05em]">
              From imagery
              <br />
              to priority.
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-3">
            <ResearchBlock
              number="01"
              title="Input"
              text="Pre- and post-disaster imagery provides the visual information."
            />

            <ResearchBlock
              number="02"
              title="Detection"
              text="A CNN-based pipeline detects damage from the imagery."
            />

            <ResearchBlock
              number="03"
              title="Explanation"
              text="Grad-CAM is used to provide visual explanations of model attention."
            />

            <ResearchBlock
              number="04"
              title="Prioritization"
              text="Detected damage is translated into a priority-oriented output."
            />
          </div>
        </div>
      </section>

      {/* OFFLINE */}
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-24">
        <div className="grid lg:grid-cols-[0.35fr_1fr] gap-12 lg:gap-24">
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
            02 / Deployment
          </p>

          <div>
            <h2 className="text-4xl md:text-6xl tracking-[-0.055em] leading-[0.95]">
              Designed for
              <br />
              limited connectivity.
            </h2>

            <p className="mt-9 max-w-3xl text-lg md:text-xl leading-relaxed text-white/45">
              DevastAI is designed as an offline-capable Progressive Web App,
              allowing the AI workflow to remain useful when reliable network
              connectivity is unavailable.
            </p>
          </div>
        </div>
      </section>

      {/* COMPONENTS */}
      <section className="px-6 md:px-10 py-24 border-t border-white/[0.08]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            <ResearchFeature
              icon={Brain}
              title="CNN"
              text="Computer vision based damage detection."
            />

            <ResearchFeature
              icon={Sparkles}
              title="Grad-CAM"
              text="Visual explanation of model decisions."
            />

            <ResearchFeature
              icon={ShieldCheck}
              title="Priority scoring"
              text="Supports damage-based prioritization."
            />

            <ResearchFeature
              icon={Cpu}
              title="Offline PWA"
              text="Service-worker based offline application architecture."
            />
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="px-6 md:px-10 pt-16 pb-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="rounded-[2rem] border border-white/[0.08] bg-purple-300/[0.04] p-8 md:p-14 lg:p-20">
            <p className="text-[10px] uppercase tracking-[0.25em] text-purple-200/50">
              DEVASTAI / Academic AI System
            </p>

            <h2 className="mt-5 text-4xl md:text-6xl tracking-[-0.055em] leading-[0.95] max-w-4xl">
              Detect.
              <br />
              Explain.
              <br />
              Prioritize.
            </h2>

            <Link
              href="/research"
              className="mt-10 inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/45 hover:text-white transition-colors"
            >
              Back to research
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function MetaRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-6 border-b border-white/[0.07] pb-3">
      <span className="text-[9px] uppercase tracking-[0.18em] text-white/25">
        {label}
      </span>

      <span className="text-xs text-white/55 text-right">
        {value}
      </span>
    </div>
  );
}

function ResearchBlock({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="min-h-[230px] rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 flex flex-col justify-between">
      <span className="text-[10px] tracking-[0.15em] text-white/25">
        {number}
      </span>

      <div>
        <h3 className="text-sm uppercase tracking-[0.12em] text-white/65">
          {title}
        </h3>

        <p className="mt-4 text-sm leading-relaxed text-white/35">
          {text}
        </p>
      </div>
    </div>
  );
}