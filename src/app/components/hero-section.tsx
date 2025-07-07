"use client"

import { Button } from "@/components/ui/button"
import { Download, ArrowRight, Github, Linkedin, Mail, Phone, MapPin } from "lucide-react"

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section id="home" className="pt-20 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
                <img
                  src="/images/me.jpeg?height=120&width=300"
                  alt="Houcine Oumeslakht"
                  className="w-28 h-28 rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Houcine Oumeslakht
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 max-w-3xl mx-auto">
            Ingénieur en Développement Digital & Développeur Mobile
          </p>

          <div className="flex flex-col sm:flex-row gap-2 justify-center items-center mb-8 text-gray-600 dark:text-gray-300">
            <div className="flex items-center hover:scale-105 transition-transform duration-300">
              <Phone className="h-4 w-4 mr-2" />
              <span>+212 766 36 94 73</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center hover:scale-105 transition-transform duration-300">
              <Mail className="h-4 w-4 mr-2" />
              <span>houcineoumeslakht14@gmail.com</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <div className="flex items-center hover:scale-105 transition-transform duration-300">
              <MapPin className="h-4 w-4 mr-2" />
              <span>Rabat, Maroc</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="/cv_houcine_latex.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              >
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
            >
              <Download className="mr-2 h-4 w-4" />
              Télécharger CV
            </Button>
            </a>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
            >
              Me Contacter
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a  
              href="https://github.com/houcine0078"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:scale-125 transition-all duration-300 hover:bg-green-100 dark:hover:bg-green-900"
              >
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/houcine-oumeslakht-117600254/"
              target="_blank"
              rel="noopener noreferrer"
              >
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:scale-125 transition-all duration-300 hover:bg-green-100 dark:hover:bg-green-900"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            </a>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:scale-125 transition-all duration-300 hover:bg-green-100 dark:hover:bg-green-900"
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
