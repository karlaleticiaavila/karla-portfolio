export default function Footer() {
  return (
    <footer className="bg-[#050505] px-6 pb-12 pt-24 text-[#eae3d5] md:px-12">
      <div className="mx-auto max-w-7xl">
        
        {/* FRASE */}
        <p className="mb-12 max-w-xl text-sm leading-7 text-[#eae3d5]/60">
          Designed and developed with intention and exploring the intersection
          between visual identity and digital experience.
        </p>

       
        {/* BOTTOM BAR */}
        <div className="flex flex-col gap-6 border-t border-[#eae3d5]/10 pt-6 text-xs uppercase tracking-[0.3em] text-[#eae3d5]/40 md:flex-row md:items-center md:justify-between">
          
          <div>
            © {new Date().getFullYear()}
          </div>

          <div className="flex gap-6">
            <a href="#projects" className="hover:text-[#eae3d5] transition">
              Work
            </a>
            <a href="#about" className="hover:text-[#eae3d5] transition">
              About
            </a>
            <a href="#contact" className="hover:text-[#eae3d5] transition">
              Contact
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}