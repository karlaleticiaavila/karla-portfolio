import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FiExternalLink, FiGithub } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
  title: "Upakut / Manic",
  type: "In Progress / Clothing Brand Website",
  description:
    "A developing web experience for a graffiti-inspired clothing brand, focused on visual identity, product presentation, and future e-commerce functionality.",
  tech: ["React", "Tailwind", "Node"],
  image: "/src/assets/upakut.jpg",
  github: "https://github.com/karlaleticiaavila/upakut-manic",
},
  {
  title: "Model Portfolio",
  type: "Personal Brand Website",
  description:
    "Editorial modeling website with strong visual direction, booking flow, and luxury aesthetic.",
  tech: ["React", "Tailwind", "GSAP"],
  image: "/src/assets/model.jpg",
  live: "https://www.karlathearcher.com/",
  github: "https://github.com/karlaleticiaavila/karla-the-archer",
},
  {
  title: "Tacachondo",
  type: "Street Food Brand Experience",
  description:
    "A visual concept for a Mexican street food brand inspired by rave culture, bringing together strong identity, modern web design, and immersive user experience.",
  tech: ["React", "Tailwind", "GSAP"],
  image: "/src/assets/tacachondo.jpg",
  github: "...",
},
 {
  title: "Quiz Arena",
  type: "Real-Time Game",
  description:
    "A multiplayer quiz interface with team interaction and real-time logic using sockets.",
  tech: ["React", "Socket.io", "Node"],
  image: "/src/assets/quiz.jpg",
  github:
    "https://github.com/Cornerstone-CICCC/nodejs-final-project-team_tkdh",
},
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
   <section
  ref={sectionRef}
  id="projects"
  className="scroll-mt-24 bg-[#050505] px-6 py-24 text-[#eae3d5] md:px-12"
>
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-13 text-xs uppercase tracking-[0.45em] text-[#eae3d5]/50">
              Selected Work
            </p>

            <h2
              className="text-[clamp(2rem,6vw,6rem)] leading-[0.9]"
              style={{ fontFamily: "BillaMount" }}
            >
              Projects...
            </h2>
          </div>

          <p className="max-w-md text-sm leading- text-white/55 md:text-base">
            
            A curated collection of creative web experiences with strong visual
            direction and full-stack functionality.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="project-card group relative overflow-hidden rounded-[2rem] border border-[#eae3d5]/10 bg-white/[0.03] p-8 transition-colors duration-500 hover:border-[#eae3d5]/30 hover:bg-white/[0.06]">
              <img
                src={project.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-0 blur-[2px] transition duration-700 group-hover:scale-105 group-hover:opacity-25"
              />

              <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-1">
                <div className="mb-10 flex items-center justify-between gap-4">
                  <span className="text-xs uppercase tracking-[0.35em] text-[#eae3d5]/45">
                    0{index + 1}
                  </span>

                  <span className="rounded-full border border-[#eae3d5]/15 px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-[#eae3d5]/60">
                    {project.type}
                  </span>
                </div>

                <h3 className="mb-5 text-3xl font-medium tracking-tight md:text-4xl">
                  {project.title}
                </h3>

                <p className="mb-8 max-w-xl text-sm leading-7 text-white/55">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3">
               <div className="mt-8 flex items-center gap-8">
  
  <a
    href={project.live}
    target="_blank"
    rel="noreferrer"
    className="group relative flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#eae3d5]/60 transition-all duration-300 hover:text-[#eae3d5]"
  >
    <FiExternalLink size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
    Live

    {/* línea animada */}
    <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-[#eae3d5] transition-all duration-500 group-hover:w-full" />
  </a>

  <a
    href={project.github}
    target="_blank"
    rel="noreferrer"
    className="group relative flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#eae3d5]/60 transition-all duration-300 hover:text-[#eae3d5]"
  >
    <FiGithub size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
    Code

    {/* line */}
    <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-[#eae3d5] transition-all duration-500 group-hover:w-full" />
  </a>

</div>
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-[#eae3d5]/10 px-4 py-2 text-xs text-[#eae3d5]/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#eae3d5]/10 blur-3xl" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}