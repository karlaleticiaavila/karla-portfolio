import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
   <header className="absolute left-0 top-0 z-30 w-full px-5 py-5 text-[#eae3d5] md:px-12">
      <nav className="mx-auto flex max-w-7xl items-center justify-between border-b border-[#eae3d5]/25 bg-black/10 pb-4 backdrop-blur-[2px]">
        <a href="#home" className="font-[BillaMount] text-0.5xl leading-none md:text0.5xl">
          {/* Logo */ }
        </a>

        <div className="hidden items-center gap-10 text-xs uppercase tracking-[0.35em] text-[#eae3d5]/75 md:flex">
          <a href="#projects" className="transition hover:text-[#eae3d5]">Work</a>
          <a href="#about" className="transition hover:text-[#eae3d5]">About</a>
          <a href="#contact" className="transition hover:text-[#eae3d5]">Contact</a>
        </div>

        <a
          href="#contact"
          className="hidden rounded-full border border-[#eae3d5]/30 px-5 py-2 text-[10px] uppercase tracking-[0.22em] text-[#eae3d5]/80 transition-all duration-300 hover:border-[#eae3d5] hover:bg-[#eae3d5] hover:text-black md:block"
        >
          Hire Me
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Open menu"
        >
          <span className="h-[1px] w-7 bg-[#eae3d5]" />
          <span className="h-[1px] w-7 bg-[#eae3d5]" />
          <span className="h-[1px] w-7 bg-[#eae3d5]" />
        </button>
      </nav>

      {open && (
        <div className="mt-4 flex flex-col gap-4 rounded-2xl border border-[#eae3d5]/15 bg-black/70 p-5 text-xs uppercase tracking-[0.3em] backdrop-blur-md md:hidden">
          <a href="#projects" onClick={() => setOpen(false)}>Work</a>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </header>
  );
}