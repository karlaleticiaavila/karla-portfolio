import aboutImage from "../assets/about.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#050505] px-6 py-16 pb-28 text-[#eae3d5] md:px-12 md:pt-20"
    >
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-6 text-xs uppercase tracking-[0.45em] text-[#eae3d5]/50">
            About
          </p>

          <h2
            className="mb-10 text-[clamp(4rem,9vw,9rem)] leading-[0.8]"
            style={{ fontFamily: "BillaMount-Regular" }}
          >
            Karla
          </h2>

          <p className="mb-6 max-w-xl text-sm leading-7 text-white/70 md:text-base">
            I’m a frontend and full-stack developer focused on building
            responsive, production-ready web experiences with React, Next.js,
            TypeScript, and modern web tooling. My work spans full-stack
            applications, client websites, digital infrastructure, and creative
            frontend experiences.
          </p>

          <p className="mb-6 max-w-xl text-sm leading-7 text-white/70 md:text-base">
            I came into tech from a non-traditional background, which shaped the
            way I approach problem-solving: practical, visual, adaptable, and
            user-focused. I care about clean interfaces, strong visual identity,
            and the technical details that make a product reliable in
            production.
          </p>

          <p className="max-w-xl text-sm leading-7 text-white/70 md:text-base">
            I’ve worked across authenticated applications, CRUD workflows,
            APIs, deployment, responsive UI, domain and hosting configuration,
            and client-facing delivery. I enjoy turning complex requirements
            into experiences that feel clear, intentional, and complete.
          </p>
        </div>

        <div className="relative h-[400px] w-full overflow-hidden rounded-[2rem] border border-[#eae3d5]/10">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${aboutImage})`,
            }}
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-[#eae3d5]/10 blur-3xl" />
        </div>
      </div>
    </section>
  );
}