export default function Navbar() {
  return (
    <nav className="fixed w-full bg-black/40 backdrop-blur-md border-b border-yellow-500/20 z-50">
      <div className=" mx-auto px-6 py-4 flex flex-col md:flex-row md:justify-between items-center">
        
        {/* Logo */}
        <h1 className="font-bold text-xl gradient-text text-center md:text-left">
          DARK GOLD
        </h1>

        {/* Navigation */}
        <ul className="flex gap-6 text-sm text-gray-300 mt-4 text-right md:mt-0">
          <li><a href="#hero" className="hover:text-yellow-400 transition">Accueil</a></li>
          <li><a href="#projects" className="hover:text-yellow-400 transition">Projets</a></li>
          <li><a href="#skills" className="hover:text-yellow-400 transition">Compétences</a></li>
          <li><a href="#contact" className="hover:text-yellow-400 transition">Contact</a></li>
        </ul>

      </div>
    </nav>
  )
}