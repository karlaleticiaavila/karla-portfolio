import aboutImage from "../assets/about.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#050505] px-6 py-28 text-[#eae3d5] md:px-12"
    >
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2 md:items-center">

        {/* TEXTO */}
        <div>
          <p className="mb-10 text-xs uppercase tracking-[0.45em] text-[#eae3d5]/50">
            About
          </p>

          <h2
            className="mb-10 text-[clamp(2rem,7vw,7rem)] leading-[0.8]"
            style={{ fontFamily: "BillaMount" }}
          >
            Karla...
          </h2>

          <p className="mb-6 max-w-xl text-sm leading-7 text-white/70 md:text-base">
            I don’t just build websites... I want to represent art within digital
            platforms without letting them feel conventional or generic. My work
            is driven by aesthetics, intuition, and the intention to create
            something that actually feels different.
          </p>

          <p className="mb-6 max-w-xl text-sm leading-7 text-white/70 md:text-base">
            Coming from a background outside of tech, I approach development with
            a different perspective, one that values visual identity as much as
            functionality. I care about how things feel, not only how they work.
          </p>

          <p className="max-w-xl text-sm leading-7 text-white/70 md:text-base">
            My goal is to build experiences that stand out visually while
            remaining real and functional, combining frontend precision with
            full-stack thinking. Life is artistic.
          </p>
        </div>

        {/* VISUAL */}
        <div className="relative h-[400px] w-full overflow-hidden rounded-[2rem] border border-[#eae3d5]/10">

          {/* Image */}
          <img
            src={aboutImage}
            alt="About Karla"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Glow */}
          <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-[#eae3d5]/10 blur-3xl" />
        </div>
      </div>
    </section>
  );
}