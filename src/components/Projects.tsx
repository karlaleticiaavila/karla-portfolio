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
  id: string;
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
    id: "becoming",
    title: "Who Are You Becoming?",
    type: "Full-Stack Application / Career & Personal Growth Platform",
    description:
      "A production-deployed full-stack platform for documenting and visualizing personal and professional growth through milestones, evidence, and interactive journeys. Built with authentication, CRUD workflows, MongoDB persistence, Cloudinary uploads, public/private visibility, mentor and recruiter experiences, React Flow visualization, and real-time functionality.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Auth.js",
      "Cloudinary",
      "React Flow",
      "Socket.IO",
    ],
    image: becomingImg,
    github: "https://github.com/karlaleticiaavila/ciccc-program-project",
    live: "https://who-are-you-becoming.vercel.app",
  },

  {
    id: "joining-bridges",
    title: "Joining Bridges Canada Society",
    type: "Freelance Client Project / React Website & Digital Infrastructure",
    description:
      "Inherited and shipped a production React website for a Canadian nonprofit, handling UI refinements, responsive QA, contact and donation workflows, deployment, domain configuration, Google Workspace, institutional email infrastructure, DNS, and client-facing troubleshooting through final delivery.",
    tech: [
      "React",
      "JavaScript",
      "CSS",
      "Responsive Design",
      "Hostinger",
      "Cloudflare",
      "Google Workspace",
      "DNS",
      "Zeffy",
      "Formspree",
    ],
    image: joiningBridgesImg,
    live: "https://www.jbcsociety.ca/",
  },

  {
    id: "vancouver-fashion-week",
    title: "Vancouver Fashion Week",
    type: "Official Website / Frontend Contribution",
    description:
      "Contributed to the official Vancouver Fashion Week website by developing and refining branded web sections, responsive layouts, timelines, testimonials, multimedia content, and interactive experiences based on creative and stakeholder direction.",
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
    id: "trip-atlas",
    title: "Trip Atlas",
    type: "Travel Budget App / Frontend Redesign",
    description:
      "A responsive travel budget and expense tracking application with onboarding, dashboards, trip detail views, expense management, and a cinematic visual redesign created around usability and responsive product thinking.",
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
    id: "model-portfolio",
    title: "Model Portfolio",
    type: "Personal Brand Website / Editorial Experience",
    description:
      "An editorial modeling portfolio built around cinematic motion, responsive image presentation, personal branding, and a luxury-inspired digital experience for agencies, photographers, designers, and creative collaborators.",
    tech: ["React", "TypeScript", "Tailwind CSS", "GSAP"],
    image: modelImg,
    live: "https://www.karlathearcher.com/",
    github: "https://github.com/karlaleticiaavila/karla-the-archer",
  },

  {
    id: "tacachondo",
    title: "Tacachondo",
    type: "Concept Website / Street Food Brand Experience",
    description:
      "A responsive concept website for a Vancouver taco brand combining Mexican street food, underground nightlife, motion design, visual storytelling, and mobile-first ordering interactions.",
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
    id: "upakut-manic",
    title: "Upakut / Manic",
    type: "In Progress / New Zealand Streetwear & Graffiti Website",
    description:
      "An evolving digital experience for a graffiti-driven clothing brand focused on artwork presentation, responsive galleries, motion design, product storytelling, and future e-commerce functionality.",
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
    id: "quiz-arena",
    title: "Quiz Arena",
    type: "Real-Time Multiplayer Game",
    description:
      "A multiplayer quiz experience featuring team participation, shared interactions, live game updates, and real-time communication powered by WebSockets.",
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
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="scroll-mt-24 bg-[#050505] px-6 py-24 pt-12 text-[#eae3d5] md:px-12 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2
              className="text-[clamp(3rem,8vw,7rem)] leading-[0.85]"
              style={{ fontFamily: "BillaMount" }}
            >
              Projects...
            </h2>
          </div>

          <p className="hidden max-w-md text-sm leading-7 text-white/60 md:block md:text-base">
            Selected work across production web development, full-stack
            applications, client delivery, and creative frontend experiences.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="project-card group relative flex min-h-[520px] overflow-hidden rounded-[2rem] border border-[#eae3d5]/10 bg-white/[0.03] p-7 transition-colors duration-500 hover:border-[#eae3d5]/30 hover:bg-white/[0.06] sm:p-8"
            >
              <img
                src={project.image}
                alt={`${project.title} project preview`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-60 transition duration-700 md:opacity-0 md:blur-[2px] md:group-hover:scale-105 md:group-hover:opacity-35"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/95 via-[#050505]/50 to-transparent md:from-[#050505]/95 md:via-[#050505]/65 md:to-transparent" />

              <div className="relative z-10 flex w-full flex-col transition-transform duration-500 md:group-hover:-translate-y-1">
                <div className="mb-10 flex items-start justify-between gap-4">
                  <span className="shrink-0 text-xs uppercase tracking-[0.35em] text-[#eae3d5]/45">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="max-w-[72%] rounded-full border border-[#eae3d5]/15 bg-black/20 px-4 py-2 text-right text-[9px] uppercase leading-4 tracking-[0.18em] text-[#eae3d5]/70 backdrop-blur-sm sm:text-[10px] sm:tracking-[0.22em]">
                    {project.type}
                  </span>
                </div>

                <h3 className="mb-5 text-3xl font-medium tracking-tight text-white drop-shadow-lg md:text-4xl">
                  {project.title}
                </h3>

                <p className="mb-8 max-w-xl text-sm leading-7 text-white/75 drop-shadow-md">
                  {project.description}
                </p>

                <div className="mb-10 flex flex-wrap gap-2.5">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-black/35 px-3.5 py-2 text-[11px] text-[#eae3d5]/85 backdrop-blur-sm"
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
                      className="group/link relative flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#eae3d5]/75 transition-all duration-300 hover:text-white"
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
                      className="group/link relative flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#eae3d5]/75 transition-all duration-300 hover:text-white"
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