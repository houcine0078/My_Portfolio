"use client"

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

interface NavigationProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
  theme: string | undefined;
  setTheme: (theme: string) => void;
}

export default function Navigation({ activeSection, scrollToSection, theme, setTheme }: NavigationProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Houcine
          </div>

          <div className="hidden md:flex space-x-8">
            {["home", "about", "experience", "projects", "education", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-all duration-300 hover:text-green-600 dark:hover:text-green-400 hover:scale-110 transform ${
                  activeSection === section ? "text-green-600 dark:text-green-400 scale-110" : ""
                }`}
              >
                {section === "experience" ? "Expérience" : section === "education" ? "Formation" : section}
              </button>
            ))}
          </div>

          {/* Only render the theme toggle after mount to avoid hydration mismatch */}
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full hover:scale-110 transition-transform duration-300"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
}