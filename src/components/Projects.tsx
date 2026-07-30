import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FiExternalLink, FiGithub } from "react-icons/fi";

import becomingImg from "../assets/becoming.jpg";
import joiningBridgesImg from "../assets/joiningBridgesImg.jpg";
import vfwImg from "../assets/vfw.jpg";
import tripAtlasImg from "../assets/trip-atlas.jpg";
import tacachondoImg from "../assets/tacachondo.jpg";
import modelImg from "../assets/model.jpg";
import upakutImg from "../assets/upakut.jpg";
import quizImg from "../assets/quiz.jpg";

gsap.registerPlugin(ScrollTrigger);

type Project = {
  title: string;
  type: string;
  description: string;
  tech: string[];
  image: string;
  live?: string;
  github?: string;
};

const projects: Project[] = [
  {
    title: "Who Are You Becoming?",
    type: "Full-Stack Application / Personal Growth Platform",
    description:
      "An authenticated full-stack application that helps users document and visualize personal growth through milestones, achievements, and supporting evidence. The platform includes an interactive journey map, complete CRUD workflows, secure user-specific data management, Google authentication, and a refactored architecture designed for maintainability and future scalability.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "Auth.js",
      "React Flow",
    ],
    image: becomingImg,
    github: "https://github.com/karlaleticiaavila/ciccc-program-project",

    // Add these when the project is deployed:
    // live: "YOUR_LIVE_URL",
    
  },

  {
    title: "Joining Bridges Canada Society",
    type: "Freelance Client Project / Digital Infrastructure",
    description:
      "Delivered a production-ready website and digital infrastructure solution for a Canadian nonprofit organization. The project included frontend implementation, deployment, domain and DNS configuration, Cloudflare, Google Workspace, professional email setup, donation and contact workflows, technical troubleshooting, client training, documentation, and post-launch support.",
    tech: [
      "Wix Studio",
      "HTML",
      "CSS",
      "JavaScript",
      "Cloudflare",
      "Google Workspace",
      "DNS",
      "Formspree",
    ],
    image: joiningBridgesImg,
    live: "https://www.jbcsociety.ca/",
  },

  {
    title: "Vancouver Fashion Week",
    type: "Official Website / Frontend Contribution",
    description:
      "Contributed to the official Vancouver Fashion Week website by designing and developing the About, Non-Profit, and Awards pages. My work included responsive layouts, custom interactive sections, timelines, testimonials, impact content, program information, award galleries, and visual implementation aligned with the organization’s brand identity.",
    tech: [
      "Wix",
      "HTML",
      "CSS",
      "JavaScript",
      "Responsive Design",
      "UX Design",
    ],
    image: vfwImg,
    live: "https://www.vanfashionweek.com",
  },

  {
    title: "Trip Atlas",
    type: "Travel Budget App / Frontend Redesign",
    description:
      "A responsive travel budget and expense tracking application redesigned with a cinematic visual identity. The experience includes onboarding, dashboards, trip detail pages, expense management, and a backend-ready interface for Google authentication and currency exchange integration.",
    tech: [
      "React",
      "TypeScript",
      "Responsive UI",
      "UX Design",
      "API Integration",
    ],
    image: tripAtlasImg,
    live: "https://trip-atlas-client.onrender.com",
    github:
      "https://github.com/Cornerstone-CICCC/react-js-final-project-iconicteam",
  },

  {
    title: "Tacachondo",
    type: "Concept Website / Street Food Brand Experience",
    description:
      "A responsive concept website for a Vancouver taco brand, combining Mexican street food with underground nightlife and rave-inspired art direction. The experience includes animated interactions, a cinematic video hero, responsive menu presentation, visual storytelling, and mobile-first ordering actions.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GSAP",
      "Responsive Design",
    ],
    image: tacachondoImg,
    live: "https://tacachondo.vercel.app",
    github: "https://github.com/karlaleticiaavila/tacachondo",
  },

  {
    title: "Model Portfolio",
    type: "Personal Brand Website / Editorial Experience",
    description:
      "An editorial modeling portfolio developed around a strong personal identity, cinematic motion, responsive image presentation, and a luxury-inspired visual experience designed for agencies, photographers, and creative collaborators.",
    tech: ["React", "TypeScript", "Tailwind CSS", "GSAP"],
    image: modelImg,
    live: "https://www.karlathearcher.com/",
    github: "https://github.com/karlaleticiaavila/karla-the-archer",
  },

  {
    title: "Upakut / Manic",
    type: "In Progress / Streetwear & Graffiti Website from New Zealand",
    description:
      "An evolving digital experience for a graffiti-driven clothing brand, focused on bold visual identity, artwork presentation, responsive gallery layouts, motion design, product storytelling, and future e-commerce functionality.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GSAP",
      "Node.js",
    ],
    image: upakutImg,
    github: "https://github.com/karlaleticiaavila/upakut-manic",
  },

  {
    title: "Quiz Arena",
    type: "Real-Time Multiplayer Game",
    description:
      "A multiplayer quiz experience featuring team participation, live game updates, shared interactions, and real-time communication powered by WebSockets.",
    tech: ["React", "Node.js", "Socket.IO", "Real-Time Systems"],
    image: quizImg,
    github:
      "https://github.com/Cornerstone-CICCC/nodejs-final-project-team_tkdh",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".project-card");

      cards.forEach((card) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 70,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              once: true,
            },
          },
        );
      });
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
            <p className="mb-3 text-xs uppercase tracking-[0.45em] text-[#eae3d5]/50">
              Selected Work
            </p>

            <h2
              className="text-[clamp(3rem,8vw,7rem)] leading-[0.85]"
              style={{ fontFamily: "BillaMount" }}
            >
              Projects...
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-white/55 md:text-base">
            Selected work spanning full-stack product development, client
            delivery, digital infrastructure, creative direction, and
            interactive frontend experiences.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="project-card group relative flex min-h-[520px] overflow-hidden rounded-[2rem] border border-[#eae3d5]/10 bg-white/[0.03] p-7 transition-colors duration-500 hover:border-[#eae3d5]/30 hover:bg-white/[0.06] sm:p-8"
            >
              <img
                src={project.image}
                alt={`${project.title} project preview`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-25 transition duration-700 md:opacity-0 md:blur-[2px] md:group-hover:scale-105 md:group-hover:opacity-25"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-[#050505]/20 md:from-[#050505]/95 md:via-[#050505]/65 md:to-transparent" />

              <div className="relative z-10 flex w-full flex-col transition-transform duration-500 md:group-hover:-translate-y-1">
                <div className="mb-10 flex items-start justify-between gap-4">
                  <span className="shrink-0 text-xs uppercase tracking-[0.35em] text-[#eae3d5]/45">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="max-w-[72%] rounded-full border border-[#eae3d5]/15 px-4 py-2 text-right text-[9px] uppercase leading-4 tracking-[0.18em] text-[#eae3d5]/60 sm:text-[10px] sm:tracking-[0.22em]">
                    {project.type}
                  </span>
                </div>

                <h3 className="mb-5 text-3xl font-medium tracking-tight md:text-4xl">
                  {project.title}
                </h3>

                <p className="mb-8 max-w-xl text-sm leading-7 text-white/60">
                  {project.description}
                </p>

                <div className="mb-10 flex flex-wrap gap-2.5">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#eae3d5]/5 bg-[#eae3d5]/10 px-3.5 py-2 text-[11px] text-[#eae3d5]/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap items-center gap-x-8 gap-y-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${project.title} live website`}
                      className="group/link relative flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#eae3d5]/60 transition-all duration-300 hover:text-[#eae3d5]"
                    >
                      <FiExternalLink
                        size={14}
                        className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                      />

                      Live

                      <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#eae3d5] transition-all duration-500 group-hover/link:w-full" />
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${project.title} source code`}
                      className="group/link relative flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#eae3d5]/60 transition-all duration-300 hover:text-[#eae3d5]"
                    >
                      <FiGithub
                        size={14}
                        className="transition-transform duration-300 group-hover/link:-translate-y-0.5"
                      />

                      Code

                      <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#eae3d5] transition-all duration-500 group-hover/link:w-full" />
                    </a>
                  )}
                </div>
              </div>

              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 md:group-hover:opacity-100">
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#eae3d5]/10 blur-3xl" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}