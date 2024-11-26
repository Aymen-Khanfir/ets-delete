import { Button } from "@/components/ui/button"
import { Link } from "react-router";

import logo from "@/assets/images/logo.png";

export default function NavBar() {
  return (
    <header className="w-full border-b">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt={'logo'}/>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="#accueil"
              className="text-gray-700 hover:text-[#14137D] transition-colors"
            >
              Accueil
            </Link>
            <Link
              to="/secteurs"
              className="text-gray-700 hover:text-[#14137D] transition-colors"
            >
              Secteurs
            </Link>
            <Link
              to="#about"
              className="text-gray-700 hover:text-[#14137D] transition-colors"
            >
              Activité
            </Link>
            <Link
              to="#services"
              className="text-gray-700 hover:text-[#14137D] transition-colors"
            >
              Services
            </Link>
          </div>

          {/* Contact Button */}
          {/* todo: change the button background */}
          <Button
            className="bg-[#081394] hover:bg-[#0f0f60] text-white"
          >
            Contactez-nous
          </Button>
        </nav>
      </div>
    </header>
  )
}

