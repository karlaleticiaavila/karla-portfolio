export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#050505] px-6 py-28 text-[#eae3d5] md:px-12"
    >
      <div className="mx-auto max-w-7xl border-t border-[#eae3d5]/15 pt-20">
        <p className="mb-6 text-xs uppercase tracking-[0.45em] text-[#eae3d5]/50">
          Contact
        </p>

        <h2
          className="mb-8 text-[clamp(2rem,4vw,4rem)] leading-[0.8]"
          style={{ fontFamily: "arial" }}
        >
          Let’s build something real.
        </h2>
        <p className="mb-6 text-xs uppercase tracking-[0.4em] text-[#eae3d5]/40">
  Open to opportunities
</p>

      <p className="mb-10 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
  If you're looking for someone who can bring both visual direction and technical
  execution into one space I’d love to collaborate.
</p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="mailto:kbliaass@gmail.com"
            className="rounded-full bg-[#eae3d5] px-8 py-3 text-sm font-semibold uppercase tracking-widest text-black transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/karlaleticiaavila/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[#eae3d5]/40 px-8 py-3 text-sm font-semibold uppercase tracking-widest text-[#eae3d5] transition-all duration-300 hover:-translate-y-1 hover:border-[#eae3d5] hover:bg-[#eae3d5] hover:text-black"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}