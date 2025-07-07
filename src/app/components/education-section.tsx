"use client"

import { Card } from "@/components/ui/card"
import { Calendar, Award } from "lucide-react"

export default function EducationSection() {
  const education = [
    {
      school: "École Marocaine des Sciences de l'Ingénierie (EMSI)",
      degree: "Diplôme d'Ingénieur, Développement Digital et Systèmes d'Information",
      period: "Sep 2024 - Août 2027 (Prévu)",
      status: "Actuellement en 1ère année du cycle d'ingénieur",
    },
    {
      school: "ISTA Hayriad, Rabat",
      degree: "Diplôme de Technicien Spécialisé en développement mobile",
      period: "Sep 2022 - Août 2024",
      status: "Diplômé",
    },
    {
      school: "Lycée Al Minbat Boutaleb",
      degree: "Baccalauréat en Sciences Physiques",
      period: "2022",
      status: "Diplômé",
    },
  ]

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Formation</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Mon parcours académique et mes certifications
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                  <p className="text-lg text-green-600 dark:text-green-400 mb-1">{edu.school}</p>
                  <p className="text-gray-600 dark:text-gray-300">{edu.status}</p>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300 mt-4 md:mt-0">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{edu.period}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "JavaScript", org: "Université du Michigan" },
              { title: "C++", org: "Université du Michigan" },
              { title: "Python Data Science", org: "IBM" },
              { title: "Linux Workbench", org: "Johns Hopkins" },
            ].map((cert, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 text-yellow-600 mr-3 animate-pulse" />
                  <h4 className="text-lg font-semibold">{cert.title}</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{cert.org}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
