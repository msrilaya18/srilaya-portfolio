import Link from "next/link";

import {
    ArrowLeft,
    ArrowUpRight,
    Brain,
    Cpu,
    FileText,
    ShieldCheck,
    Sparkles,
} from "lucide-react";

const publishedPatents = [
    {
        number: "01",
        title:
            "AI-Driven Emotion-Aware Food Recommendation System with IoT-Based Calorie Estimation",
        application: "202641090782",
        date: "JULY 2026",
        slug: "food-patent",
    },
    {
        number: "02",
        title:
            "Smart Protective Gear System with Hybrid Power Supply and Environmental Monitoring",
        application: "202641074345",
        date: "JUNE 2026",
        slug: "protective-gear",
    },
];

const inProcess = [
    {
        number: "03",
        title:
            "System and Method for Event-Driven NFC and Multi-Sensor Item Verification, Inventory Management, and Context-Aware Assistance in Smart Bags",
        name: "BAGX",
        slug: "bagx",
        description:
            "A smart-bag system combining NFC, multi-sensor event correlation, inventory management, item-state verification, and context-aware assistance.",
    },
    {
        number: "04",
        title:
            "Context-Aware Adaptive Action Selection System Using Multimodal Wearable Sensing and Artificial Intelligence",
        name: "ALTERA",
        slug: "altera",
        description:
            "A context-aware adaptive action selection system combining multimodal wearable sensing, user personalization, AI reasoning, and a dedicated Adaptive Action Engine.",
    },
];

export default function ResearchPage() {
    return (
        <main className="min-h-screen bg-[#0d0b10] text-[#f3eee5] overflow-hidden">
            {/* NAV */}

            <nav className="border-b border-white/[0.08]">
                <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-6 flex items-center justify-between">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors"
                    >
                        <ArrowLeft size={14} />
                        Back home
                    </Link>

                    <span className="text-xs uppercase tracking-[0.25em] text-white/25">
                        Research Archive
                    </span>
                </div>
            </nav>

            {/* HERO */}

            <section className="max-w-[1400px] mx-auto px-6 md:px-10 pt-24 md:pt-32 pb-28">
                <div className="grid lg:grid-cols-[1fr_0.7fr] gap-16 items-end">
                    <div>
                        <p className="text-[10px] uppercase tracking-[0.3em] text-purple-200/50 mb-7">
                            Research / Patents / Systems
                        </p>

                        <h1 className="text-[clamp(4rem,10vw,9rem)] leading-[0.82] tracking-[-0.07em] font-semibold">
                            RESEARCH
                        </h1>

                        <p className="mt-9 max-w-2xl text-xl md:text-2xl leading-relaxed text-white/50">
                            Work exploring artificial intelligence, intelligent sensing,
                            computer vision, adaptive systems, and technology designed
                            around real-world problems.
                        </p>
                    </div>

                    <div className="border-l border-white/[0.12] pl-7">
                        <p className="text-xs uppercase tracking-[0.2em] text-white/25 mb-4">
                            Current focus
                        </p>

                        <p className="text-lg leading-relaxed text-white/60">
                            Building systems that do more than predict — systems that can
                            interpret context, explain decisions, and adapt their behaviour.
                        </p>
                    </div>
                </div>
            </section>

            {/* STATS */}

            <section className="px-6 md:px-10 pb-28">
                <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-3">
                    <ResearchStat number="02" label="Published patents" />
                    <ResearchStat number="02" label="Patent in process" />
                    <ResearchStat number="01" label="Conference paper" />
                    <ResearchStat number="01" label="Academic AI system" />
                </div>
            </section>

            {/* -------------------------------------------------- */}
            {/* PUBLISHED PATENTS */}
            {/* -------------------------------------------------- */}

            <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 border-t border-white/[0.08]">
                <SectionLabel number="01" label="Published patents" />

                <div className="mt-14 divide-y divide-white/[0.08] border-y border-white/[0.08]">
                    {publishedPatents.map((patent) => (
                        <Link
                            key={patent.number}
                            href={`/work/${patent.slug}`}
                            className="group block py-10 md:py-14"
                        >
                            <div className="grid md:grid-cols-[70px_1fr_auto] gap-7">
                                <span className="text-xs tracking-[0.15em] text-white/20">
                                    {patent.number}
                                </span>

                                <div>
                                    <p className="text-[9px] uppercase tracking-[0.22em] text-purple-200/50 mb-5">
                                        Indian Patent Application
                                    </p>

                                    <h2 className="max-w-4xl text-2xl md:text-4xl leading-tight tracking-[-0.035em] group-hover:text-purple-100 transition-colors">
                                        {patent.title}
                                    </h2>

                                    <div className="mt-7 flex flex-wrap gap-3">
                                        <MetaPill>
                                            APPLICATION NO. {patent.application}
                                        </MetaPill>

                                        <MetaPill>{patent.date}</MetaPill>

                                        <MetaPill>Published</MetaPill>
                                    </div>
                                </div>

                                <ArrowUpRight
                                    size={21}
                                    strokeWidth={1.2}
                                    className="hidden md:block text-white/20 group-hover:text-purple-200/70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* -------------------------------------------------- */}
            {/* PATENTS IN PROCESS */}
            {/* -------------------------------------------------- */}

            <section className="px-6 md:px-10 py-24">
                <div className="max-w-[1400px] mx-auto">
                    <SectionLabel number="02" label="Patent in process" />

                    <div className="mt-14 grid gap-5">
                        {inProcess.map((item) => (
                            <Link
                                key={item.slug}
                                href={`/work/${item.slug}`}
                                className="group block"
                            >
                                <article className="rounded-[2rem] border border-purple-300/15 bg-purple-300/[0.035] p-8 md:p-14 lg:p-16 transition-colors hover:border-purple-300/30">
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
                                        <div className="max-w-4xl">
                                            <div className="flex items-center gap-4">
                                                <span className="text-xs tracking-[0.15em] text-white/20">
                                                    {item.number}
                                                </span>

                                                <p className="text-[10px] uppercase tracking-[0.25em] text-purple-200/50">
                                                    {item.name}
                                                </p>
                                            </div>

                                            <h2 className="mt-7 text-3xl md:text-5xl tracking-[-0.045em] leading-[1] group-hover:text-purple-100 transition-colors">
                                                {item.title}
                                            </h2>

                                            <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/40">
                                                {item.description}
                                            </p>

                                            <div className="mt-8 flex flex-wrap gap-3">
                                                <MetaPill>Patent in process</MetaPill>
                                                <MetaPill>View case study</MetaPill>
                                            </div>
                                        </div>

                                        <ArrowUpRight
                                            size={24}
                                            strokeWidth={1.2}
                                            className="text-white/20 group-hover:text-purple-200/70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0"
                                        />
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* -------------------------------------------------- */}
            {/* CONFERENCE PAPER */}
            {/* -------------------------------------------------- */}

            <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 border-t border-white/[0.08]">
                <SectionLabel number="03" label="Conference paper" />

                <Link
                    href="/work/plant-disease"
                    className="group block mt-14"
                >
                    <div className="grid lg:grid-cols-[1fr_0.55fr] gap-16">
                        <div>
                            <p className="text-[10px] uppercase tracking-[0.22em] text-white/30 mb-5">
                                ICIICC 2026
                            </p>

                            <h2 className="text-3xl md:text-5xl tracking-[-0.04em] leading-tight group-hover:text-purple-100 transition-colors">
                                Enhancing Plant Disease Classification: A Lightweight Deep
                                Learning Approach with DcGAN Augmentation and Grad-CAM
                                Explanations
                            </h2>

                            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/45">
                                A lightweight deep learning approach combining synthetic data
                                augmentation using DcGAN with Grad-CAM visual explanations for
                                more interpretable plant disease classification.
                            </p>
                        </div>

                        <div className="lg:border-l lg:border-white/[0.08] lg:pl-10">
                            <div className="flex items-center gap-3">
                                <FileText
                                    size={20}
                                    strokeWidth={1.2}
                                    className="text-purple-200/60"
                                />

                                <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                                    ICIICC 2026
                                </span>
                            </div>

                            <p className="mt-8 text-sm leading-relaxed text-white/35">
                                Utkal University
                            </p>

                            <p className="mt-2 text-sm leading-relaxed text-white/25">
                                August 2026
                            </p>

                            <div className="mt-8 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/40 group-hover:text-white transition-colors">
                                View project
                                <ArrowUpRight size={13} />
                            </div>
                        </div>
                    </div>
                </Link>
            </section>

            {/* -------------------------------------------------- */}
            {/* DEVASTAI */}
            {/* -------------------------------------------------- */}

            <section className="px-6 md:px-10 py-24">
                <div className="max-w-[1400px] mx-auto">
                    <SectionLabel number="04" label="Academic AI system" />

                    <Link
                        href="/work/devastai"
                        className="group block mt-14"
                    >
                        <div className="rounded-[2rem] border border-white/[0.08] bg-white/[0.025] p-8 md:p-14 lg:p-20 transition-colors hover:border-purple-300/20">

                            <div className="mt-0 grid lg:grid-cols-[0.8fr_1fr] gap-16">
                                <div>
                                    <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
                                        DevastAI
                                    </p>

                                    <h2 className="mt-5 text-4xl md:text-6xl tracking-[-0.055em] leading-[0.95]">
                                        Disaster intelligence
                                        <br />
                                        without the cloud.
                                    </h2>

                                    <p className="mt-8 text-lg leading-relaxed text-white/45">
                                        An offline AI-powered post-disaster damage detection and
                                        prioritization system designed for low-connectivity
                                        environments.
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-3">
                                    <ResearchFeature
                                        icon={Brain}
                                        title="CNN"
                                        text="Image-based damage detection"
                                    />

                                    <ResearchFeature
                                        icon={Sparkles}
                                        title="Grad-CAM"
                                        text="Visual model explanations"
                                    />

                                    <ResearchFeature
                                        icon={ShieldCheck}
                                        title="Priority scoring"
                                        text="Damage-based prioritization"
                                    />

                                    <ResearchFeature
                                        icon={Cpu}
                                        title="Offline PWA"
                                        text="Service-worker based offline architecture"
                                    />
                                </div>
                            </div>

                            <div className="mt-10 flex items-center justify-between border-t border-white/[0.08] pt-6">
                                <span className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                                    Academic Project
                                </span>

                                <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/40 group-hover:text-white transition-colors">
                                    View project
                                    <ArrowUpRight
                                        size={13}
                                        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                                    />
                                </span>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>

            {/* -------------------------------------------------- */}
            {/* RESEARCH THEMES */}
            {/* -------------------------------------------------- */}

            <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-24 border-t border-white/[0.08]">
                <SectionLabel number="05" label="Research themes" />

                <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                    {[
                        "Artificial Intelligence",
                        "Computer Vision",
                        "Adaptive Systems",
                        "Intelligent Sensing",
                    ].map((item) => (
                        <div
                            key={item}
                            className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6"
                        >
                            <p className="text-sm text-white/55">{item}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FOOTER */}

            <section className="px-6 md:px-10 pt-16 pb-28">
                <div className="max-w-[1400px] mx-auto border-t border-white/[0.08] pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                        Research / Srilaya M
                    </p>

                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors"
                    >
                        Back home
                        <ArrowUpRight size={13} />
                    </Link>
                </div>
            </section>
        </main>
    );
}

function SectionLabel({
    number,
    label,
}: {
    number: string;
    label: string;
}) {
    return (
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
            <span className="text-[10px] uppercase tracking-[0.25em] text-purple-200/45">
                {number}
            </span>

            <span className="text-[10px] uppercase tracking-[0.25em] text-white/25">
                {label}
            </span>
        </div>
    );
}

function MetaPill({ children }: { children: React.ReactNode }) {
    return (
        <span className="rounded-full border border-white/[0.08] bg-white/[0.025] px-3 py-1.5 text-[9px] uppercase tracking-[0.16em] text-white/35">
            {children}
        </span>
    );
}

function ResearchStat({
    number,
    label,
}: {
    number: string;
    label: string;
}) {
    return (
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 md:p-7">
            <p className="text-3xl md:text-4xl tracking-[-0.04em] text-white/80">
                {number}
            </p>

            <p className="mt-3 text-[9px] uppercase tracking-[0.18em] text-white/25">
                {label}
            </p>
        </div>
    );
}

function ResearchFeature({
    icon: Icon,
    title,
    text,
}: {
    icon: React.ComponentType<{
        size?: number;
        strokeWidth?: number;
        className?: string;
    }>;
    title: string;
    text: string;
}) {
    return (
        <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
            <Icon
                size={20}
                strokeWidth={1.3}
                className="text-purple-200/60"
            />

            <p className="mt-7 text-[10px] uppercase tracking-[0.2em] text-white/40">
                {title}
            </p>

            <p className="mt-3 text-sm leading-relaxed text-white/35">
                {text}
            </p>
        </div>
    );
}