import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  Mail,
  Code2,
  UserRound,
} from "lucide-react";

const contacts = [
  {
    label: "EMAIL",
    value: "sriaya.m2023@vitstudent.ac.in",
    href: "mailto:sriaya.m2023@vitstudent.ac.in",
    icon: Mail,
  },
  {
    label: "GITHUB",
    value: "github.com/msrilaya18",
    href: "https://github.com/msrilaya18",
    icon: Code2,
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/srilaya-m-63b89828",
    href: "https://www.linkedin.com/in/srilaya-m-63b89828/",
    icon: UserRound,
  },
];

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#08070a] text-white">
            {/* HEADER */}
            <section className="px-6 md:px-10 pt-8">
                <div className="max-w-[1400px] mx-auto">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-white/35 hover:text-white transition-colors"
                    >
                        <ArrowLeft size={13} />
                        Back home
                    </Link>
                </div>
            </section>

            {/* HERO */}
            <section className="px-6 md:px-10 pt-24 md:pt-32 pb-28">
                <div className="max-w-[1400px] mx-auto">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-purple-300/50">
                        CONTACT / LET&apos;S TALK
                    </p>

                    <div className="mt-8 grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-end">
                        <h1 className="text-[clamp(4.5rem,12vw,11rem)] font-medium tracking-[-0.08em] leading-[0.78]">
                            Let&apos;s
                            <br />
                            talk.
                        </h1>

                        <div className="lg:pb-3">
                            <p className="text-lg md:text-xl leading-relaxed text-white/55">
                                Have an interesting project, research idea, or opportunity?
                                I&apos;d love to hear about it.
                            </p>

                            <p className="mt-6 text-sm leading-relaxed text-white/25">
                                Open to conversations around software engineering, AI,
                                research, intelligent systems, and meaningful technical work.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTACT LINKS */}
            <section className="border-y border-white/[0.07]">
                <div className="max-w-[1400px] mx-auto">
                    {contacts.map((contact, index) => {
                        const Icon = contact.icon;

                        return (
                            <a
                                key={contact.label}
                                href={contact.href}
                                target={contact.label === "EMAIL" ? undefined : "_blank"}
                                rel={
                                    contact.label === "EMAIL"
                                        ? undefined
                                        : "noopener noreferrer"
                                }
                                className="group grid md:grid-cols-[0.3fr_1fr_auto] items-center gap-6 px-6 md:px-10 py-8 md:py-10 border-b last:border-b-0 border-white/[0.07] hover:bg-white/[0.025] transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <Icon
                                        size={17}
                                        strokeWidth={1.4}
                                        className="text-purple-200/45"
                                    />

                                    <span className="text-[10px] uppercase tracking-[0.25em] text-white/25">
                                        {contact.label}
                                    </span>
                                </div>

                                <span className="text-lg md:text-2xl tracking-[-0.025em] text-white/55 group-hover:text-white transition-colors">
                                    {contact.value}
                                </span>

                                <ArrowUpRight
                                    size={18}
                                    className="text-white/20 group-hover:text-white transition-colors"
                                />
                            </a>
                        );
                    })}
                </div>
            </section>

            {/* DIRECT CTA */}
            <section className="px-6 md:px-10 py-24 md:py-32">
                <div className="max-w-[1400px] mx-auto">
                    <div className="rounded-[2rem] border border-purple-300/15 bg-purple-300/[0.035] p-8 md:p-14 lg:p-20">
                        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-end">
                            <div>
                                <p className="text-[10px] uppercase tracking-[0.25em] text-purple-200/45">
                                    CURRENTLY
                                </p>

                                <h2 className="mt-6 text-4xl md:text-6xl tracking-[-0.06em] leading-[0.9]">
                                    Building,
                                    <br />
                                    researching,
                                    <br />
                                    learning.
                                </h2>

                                <p className="mt-8 max-w-xl text-sm leading-relaxed text-white/35">
                                    If you&apos;re working on something at the intersection of
                                    AI, software, research, or intelligent systems, let&apos;s
                                    connect.
                                </p>
                            </div>

                            <a
                                href="mailto:sriaya.m2023@vitstudent.ac.in?subject=Portfolio%20Inquiry"
                                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#f1e9dc] px-7 py-4 text-sm font-medium text-[#08070a] hover:scale-[1.02] transition-transform"
                            >
                                Start a conversation
                                <ArrowUpRight size={16} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="border-t border-white/[0.07] px-6 md:px-10 py-8">
                <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <Link
                        href="/"
                        className="text-xl tracking-[-0.06em] text-white/70"
                    >
                        SM.
                    </Link>

                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/20">
                        © 2026 SRILAYA M
                    </p>

                    <Link
                        href="/"
                        className="text-[10px] uppercase tracking-[0.2em] text-white/25 hover:text-white transition-colors"
                    >
                        Back to top
                    </Link>
                </div>
            </footer>
        </main>
    );
}