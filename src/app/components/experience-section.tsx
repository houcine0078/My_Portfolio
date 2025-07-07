"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Expérience Professionnelle</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Mon expérience pratique dans le développement mobile et web
          </p>
        </div>

        <Card className="p-8 hover:shadow-xl transition-all duration-300">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stagiaire en Développement Mobile</h3>
              <p className="text-lg text-green-600 dark:text-green-400 mb-2">GreenTel, Société de télécommunication</p>
              <p className="text-gray-600 dark:text-gray-300">Rabat, MA</p>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-300 mt-4 md:mt-0">
              <Calendar className="h-4 w-4 mr-2" />
              <span>Mars 2024 – Avril 2024</span>
            </div>
          </div>

          <div className="space-y-3">
            {[
              "Développer une application Mobile avec Android Studio pour gérer les tâches des employés",
              "Intégré Firebase pour conserver les données",
              "Utilisé JAVA, Git et méthodes Agile (versioning, sprints)",
            ].map((item, index) => (
              <div key={index} className="flex items-start hover:translate-x-2 transition-transform duration-300">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-600 dark:text-gray-300">{item}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mt-6">
            {["Java", "Android Studio", "Firebase", "Git", "Agile"].map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="hover:bg-green-100 dark:hover:bg-green-900 transition-colors duration-300"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </section>
  )
}
