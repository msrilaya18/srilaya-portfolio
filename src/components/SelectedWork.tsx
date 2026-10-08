"use client";

import Link from "next/link";
import {
    ArrowUpRight,
    Camera,
    Cpu,
    Radio,
    ShieldCheck,
    Sparkles,
    Activity,
} from "lucide-react";

const projects = [
    {
        number: "01",
        title: "BAGX",
        category: "SMART BAG · AI · IoT · SENSOR FUSION",
        description:
            "A multi-sensor smart-bag system that identifies, verifies and monitors personal items using NFC, weight sensing, bag-state detection, motion sensing and camera-assisted verification.",
        status: "PATENT IN PROCESS",
        type: "bagx",
        featured: true,
        slug: "bagx",
    },
    {
        number: "02",
        title: "SOCIAL VIDEO INTELLIGENCE",
        slug: "social-video",
        category: "GENERATIVE AI · RAG · FULL STACK",
        description:
            "An agentic RAG platform that compares YouTube Shorts and Instagram Reels through transcript analysis, engagement metrics and source-grounded AI insights.",
        status: "FULL-STACK PROJECT",
        type: "rag",
    },
    {
        number: "03",
        title: "PSYNOVA",
        slug: "psynova",
        category: "ADAPTIVE RAG · AI SAFETY · RESEARCH",
        description:
            "An evolving intelligent mental-wellness system building upon MindCare AI with context assessment, adaptive retrieval, personalization and safety-oriented reasoning.",
        status: "RESEARCH IN PROGRESS",
        type: "psynova",
    },
    {
        number: "04",
        title: "PLANT DISEASE CLASSIFICATION",
        slug: "plant-disease",
        category: "DEEP LEARNING · XAI · RESEARCH",
        description:
            "A lightweight deep-learning approach combining DCGAN augmentation and Grad-CAM explanations for plant disease classification and severity estimation.",
        status: "ICIICC 2026 · UTKAL UNIVERSITY",
        type: "plant",
    },
];

export default function SelectedWork() {
    return (
        <section
            id="work"
            className="px-6 py-16 md:px-12 lg:px-20 lg:py-24"
        >
            {/* SECTION HEADER */}
            {/* SECTION HEADER */}
            <div>
                <div className="mb-12 border-b border-white/15 pb-5">
                    <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-white/40">
                        Selected work
                    </p>

                    <h2 className="text-4xl font-medium tracking-[-0.04em] text-white md:text-6xl">
                        Things I&apos;ve built.
                    </h2>
                </div>

                <span className="hidden text-sm text-white/35 md:block">
                    Selected Work
                </span>
            </div>

            {/* PROJECTS */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {projects.map((project) => {
                    const content = (
                        <article
                            className={`
                group overflow-hidden rounded-4xl
                border border-white/10
                bg-white/[0.025]
                transition-all duration-500
                hover:-translate-y-1
                hover:border-white/20
                ${project.featured ? "md:col-span-2" : ""}
              `}
                        >
                            {/* PROJECT VISUAL */}
                            <ProjectVisual
                                type={project.type}
                                featured={project.featured}
                                status={project.status}
                            />

                            {/* PROJECT INFORMATION */}
                            <div className="p-7 md:p-9">
                                <p className="mb-3 text-[10px] tracking-[0.25em] text-white/40">
                                    {project.number} / {project.category}
                                </p>

                                <div className="flex items-start justify-between gap-6">
                                    <div>
                                        <h3
                                            className={`
                        font-medium tracking-[-0.04em] text-white
                        ${project.featured
                                                    ? "text-4xl md:text-6xl"
                                                    : "text-3xl"
                                                }
                      `}
                                        >
                                            {project.title}
                                        </h3>

                                        <p className="mt-5 max-w-3xl text-sm leading-7 text-white/55 md:text-base">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="hidden shrink-0 items-center justify-center rounded-full border border-white/10 p-3 transition-transform duration-300 group-hover:rotate-45 md:flex">
                                        <ArrowUpRight size={18} />
                                    </div>
                                </div>
                            </div>
                        </article>
                    );

                    {/* Only BAGX is clickable for now */ }
                    if (project.slug) {
                        return (
                            <Link
                                key={project.number}
                                href={`/work/${project.slug}`}
                                className={project.featured ? "md:col-span-2" : ""}
                            >
                                {content}
                            </Link>
                        );
                    }

                    return (
                        <div key={project.number}>
                            {content}
                        </div>
                    );
                })}
            </div>

        </section >
    );
}


/* =========================================================
   PROJECT VISUALS
========================================================= */

function ProjectVisual({
    type,
    featured,
    status,
}: {
    type: string;
    featured?: boolean;
    status: string;
}) {
    return (
        <div
            className={`
        relative overflow-hidden border-b border-white/10
        bg-[#1b1221]
        ${featured ? "h-[390px]" : "h-[280px]"}
      `}
        >
            {/* Background atmosphere */}
            <div className="absolute inset-0">
                <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
                <div className="absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-rose-400/10 blur-3xl" />
            </div>

            {/* STATUS */}
            <div className="absolute left-6 top-6 z-20">
                <span className="rounded-full border border-white/15 bg-black/20 px-3 py-1.5 text-[10px] tracking-[0.2em] text-white/60 backdrop-blur">
                    {status}
                </span>
            </div>

            {type === "bagx" && <BagXVisual featured={featured} />}
            {type === "rag" && <RAGVisual />}
            {type === "psynova" && <PsyNovaVisual />}
            {type === "plant" && <PlantVisual />}

            {/* Arrow */}
            <div className="absolute bottom-6 right-6 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/20 text-white backdrop-blur transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={18} strokeWidth={1.5} />
            </div>
        </div>
    );
}


/* =========================================================
   BAGX
========================================================= */

function BagXVisual({ featured }: { featured?: boolean }) {
    const sensors = [
        { icon: Radio, label: "NFC" },
        { icon: Activity, label: "WEIGHT" },
        { icon: ShieldCheck, label: "BAG STATE" },
        { icon: Cpu, label: "MOTION" },
        { icon: Camera, label: "CAMERA" },
    ];

    return (
        <div className="absolute inset-0 flex items-center justify-center px-8">
            <div className="relative w-full max-w-5xl">
                {/* Sensor row */}
                <div className="grid grid-cols-5 gap-3">
                    {sensors.map((sensor) => {
                        const Icon = sensor.icon;

                        return (
                            <div
                                key={sensor.label}
                                className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-3 py-5"
                            >
                                <Icon
                                    size={20}
                                    strokeWidth={1.3}
                                    className="text-white/65"
                                />

                                <span className="text-[8px] tracking-[0.2em] text-white/40">
                                    {sensor.label}
                                </span>
                            </div>
                        );
                    })}
                </div>

                {/* Connector */}
                <div className="mx-auto h-8 w-px bg-white/15" />

                {/* Fusion */}
                <div className="mx-auto max-w-md rounded-2xl border border-white/15 bg-white/[0.06] px-6 py-5 text-center backdrop-blur">
                    <p className="text-[9px] tracking-[0.3em] text-white/35">
                        EVENT-DRIVEN SENSOR FUSION
                    </p>

                    <p
                        className={`mt-3 font-medium tracking-tight text-white ${featured ? "text-xl md:text-2xl" : "text-lg"
                            }`}
                    >
                        Item Verification Engine
                    </p>
                </div>

                {/* Connector */}
                <div className="mx-auto h-8 w-px bg-white/15" />

                {/* States */}
                <div className="mx-auto grid max-w-md grid-cols-3 gap-2">
                    {["IN BAG", "OUTSIDE", "UNCERTAIN"].map((state) => (
                        <div
                            key={state}
                            className="rounded-xl border border-white/10 bg-black/20 px-2 py-3 text-center"
                        >
                            <span className="text-[8px] tracking-[0.18em] text-white/45">
                                {state}
                            </span>
                        </div>
                    ))}
                </div>

                {/* AI */}
                {featured && (
                    <div className="mt-5 flex justify-center">
                        <div className="flex items-center gap-2 rounded-full border border-purple-300/20 bg-purple-300/10 px-4 py-2">
                            <Sparkles size={13} />

                            <span className="text-[9px] tracking-[0.2em] text-white/55">
                                AI TRIP & ITEM ASSISTANT
                            </span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}


/* =========================================================
   RAG CHATBOT
========================================================= */

function RAGVisual() {
    return (
        <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="w-full max-w-3xl rounded-2xl border border-white/10 bg-black/20 p-5 backdrop-blur">
                <div className="mb-5 flex items-center justify-between">
                    <span className="text-[9px] tracking-[0.25em] text-white/35">
                        SOCIAL VIDEO INTELLIGENCE
                    </span>

                    <span className="h-2 w-2 rounded-full bg-green-300/50" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <VideoPanel title="YOUTUBE SHORT" />
                    <VideoPanel title="INSTAGRAM REEL" />
                </div>

                <div className="my-4 flex items-center justify-center">
                    <div className="h-px w-16 bg-white/10" />

                    <div className="mx-3 rounded-full border border-white/10 px-3 py-1 text-[8px] tracking-[0.2em] text-white/35">
                        RAG
                    </div>

                    <div className="h-px w-16 bg-white/10" />
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <div className="mb-2 flex items-center gap-2">
                        <Sparkles size={13} className="text-white/50" />

                        <span className="text-[9px] tracking-[0.2em] text-white/40">
                            AI INSIGHT
                        </span>
                    </div>

                    <div className="space-y-2">
                        <div className="h-2 w-[90%] rounded-full bg-white/10" />
                        <div className="h-2 w-[72%] rounded-full bg-white/10" />
                        <div className="h-2 w-[55%] rounded-full bg-white/10" />
                    </div>
                </div>
            </div>
        </div>
    );
}


function VideoPanel({ title }: { title: string }) {
    return (
        <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">
            <div className="mb-4 flex h-20 items-center justify-center rounded-lg bg-purple-300/[0.04]">
                <span className="text-[8px] tracking-[0.2em] text-white/20">
                    VIDEO
                </span>
            </div>

            <p className="text-[8px] tracking-[0.18em] text-white/35">
                {title}
            </p>
        </div>
    );
}


/* =========================================================
   PSYNOVA
========================================================= */

function PsyNovaVisual() {
    return (
        <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="grid w-full max-w-3xl grid-cols-[1fr_auto_1fr] items-center gap-4">
                <div className="space-y-3">
                    <Pipeline label="CONTEXT" />
                    <Pipeline label="EMOTION" />
                    <Pipeline label="RISK" />
                </div>

                <div className="flex flex-col items-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-purple-300/20 bg-purple-300/[0.06]">
                        <Sparkles size={22} className="text-white/60" />
                    </div>

                    <div className="my-2 h-8 w-px bg-white/10" />

                    <span className="text-[7px] tracking-[0.2em] text-white/30">
                        ADAPTIVE RAG
                    </span>
                </div>

                <div className="space-y-3">
                    <Pipeline label="RETRIEVAL" />
                    <Pipeline label="SAFETY" />
                    <Pipeline label="PERSONALIZATION" />
                </div>
            </div>
        </div>
    );
}


function Pipeline({ label }: { label: string }) {
    return (
        <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-4 text-center">
            <span className="text-[8px] tracking-[0.2em] text-white/40">
                {label}
            </span>
        </div>
    );
}


/* =========================================================
   PLANT DISEASE
========================================================= */

function PlantVisual() {
    return (
        <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="grid w-full max-w-3xl grid-cols-3 gap-4">
                <div className="col-span-2 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <div className="relative flex h-36 items-center justify-center overflow-hidden rounded-xl bg-green-900/10">
                        <div className="absolute h-28 w-28 rounded-full border border-green-300/10" />

                        <div className="absolute h-20 w-32 rotate-[-25deg] rounded-[50%] border border-green-300/15" />

                        <div className="absolute h-16 w-24 rotate-[25deg] rounded-[50%] border border-rose-300/15" />

                        <span className="z-10 text-[9px] tracking-[0.25em] text-white/30">
                            GRAD-CAM
                        </span>
                    </div>

                    <div className="mt-4 flex justify-between">
                        <span className="text-[8px] tracking-[0.18em] text-white/35">
                            DISEASE REGION
                        </span>

                        <span className="text-[8px] tracking-[0.18em] text-white/25">
                            EXPLAINABLE AI
                        </span>
                    </div>
                </div>

                <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <div>
                        <p className="text-[8px] tracking-[0.2em] text-white/30">
                            MODEL
                        </p>

                        <p className="mt-2 text-lg text-white/70">
                            MobileNet
                        </p>
                    </div>

                    <div>
                        <p className="text-[8px] tracking-[0.2em] text-white/30">
                            AUGMENTATION
                        </p>

                        <p className="mt-2 text-lg text-white/70">
                            DCGAN
                        </p>
                    </div>

                    <div>
                        <p className="text-[8px] tracking-[0.2em] text-white/30">
                            OUTPUT
                        </p>

                        <p className="mt-2 text-lg text-white/70">
                            Severity
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

