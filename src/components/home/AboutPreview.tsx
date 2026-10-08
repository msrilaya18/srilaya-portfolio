export default function AboutPreview() {
  return (
    <section className="relative px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto w-full max-w-7xl">

        {/* Header */}
        <div className="flex items-center justify-between border-t border-white/10 pt-5">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">
            01 / Approach
          </span>

          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/25">
            How I work
          </span>
        </div>

        {/* Main statement */}
        <div className="mt-12 grid gap-12 md:grid-cols-[1.4fr_0.6fr] md:items-end">

          <div>
            <h2 className="max-w-4xl text-5xl font-medium leading-[0.95] tracking-[-0.05em] text-white md:text-7xl">
              Curious about
              <br />
              <span className="font-instrument italic text-[#a98bc4]">
                how things work.
              </span>
            </h2>

            <p className="mt-10 max-w-2xl text-base leading-7 text-white/50 md:text-lg">
              I like taking ideas apart, understanding the problem underneath,
              and turning them into systems that actually work.
            </p>
          </div>

          {/* Approach */}
          <div className="space-y-10">

            <div className="border-t border-white/10 pt-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
                01
              </span>

              <p className="mt-3 text-lg text-white/70">
                Understand the problem
              </p>
            </div>

            <div className="border-t border-white/10 pt-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
                02
              </span>

              <p className="mt-3 text-lg text-white/70">
                Build & experiment
              </p>
            </div>

            <div className="border-t border-white/10 pt-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/30">
                03
              </span>

              <p className="mt-3 text-lg text-white/70">
                Iterate until it works
              </p>
            </div>

          </div>

        </div>

        {/* Bottom divider */}
        <div className="mt-16 border-b border-white/10" />

      </div>
    </section>
  );
}