"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Code, Palette, Users, Target, Dumbbell } from "lucide-react"

export default function AboutSection() {
  const skills = [
    {
      category: "Langages",
      items: [ "C++", "Java", "Python", "PHP", "JavaScript", "SQL", "Kotlin", "Swift"],
    },
    {
      category: "Frameworks/Outils",
      items: ["Laravel", "React", "Java Swing", "Tailwind", "Django", "Git", "Firebase", "MySQL", "Android Studio"],
    },
    {
      category: "Certifications",
      items: [
        "JavaScript (Univ. Michigan)",
        "C++ (Univ. Michigan)",
        "Python Data Science (IBM)",
        "Linux Workbench (Johns Hopkins)",
      ],
    },
  ]

  const languages = [
    { language: "Arabe", level: "Langue maternelle" },
    { language: "Français", level: "Intermédiaire" },
    { language: "Anglais", level: "Courant" },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">À Propos</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Étudiant ingénieur passionné par le développement digital et les systèmes d'information
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">Mon Parcours</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Actuellement en première année du cycle d'ingénieur à l'EMSI, je me spécialise dans le développement
              digital et les systèmes d'information. Fort d'un diplôme de technicien spécialisé en développement mobile,
              j'ai acquis une solide expérience pratique à travers mes projets et mon stage chez GreenTel.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Ma passion pour la technologie me pousse à explorer constamment de nouvelles solutions et à développer des
              applications innovantes qui répondent aux besoins réels des utilisateurs.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="hover:scale-105 transition-transform duration-300">
                <Users className="h-3 w-3 mr-1" />
                Travail collectif
              </Badge>
              <Badge variant="secondary" className="hover:scale-105 transition-transform duration-300">
                <Target className="h-3 w-3 mr-1" />
                Développement personnel
              </Badge>
              <Badge variant="secondary" className="hover:scale-105 transition-transform duration-300">
                <Dumbbell className="h-3 w-3 mr-1" />
                Sport
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {[
              {
                icon: Smartphone,
                title: "Développement Mobile",
                desc: "Applications Android natives avec Java, Kotlin et intégration Firebase",
                color: "text-green-600",
              },
              {
                icon: Code,
                title: "Développement Web",
                desc: "Applications web full-stack avec Django, Laravel et React",
                color: "text-emerald-600",
              },
              {
                icon: Palette,
                title: "Systèmes d'Information",
                desc: "Conception et gestion de bases de données MySQL et systèmes CRUD",
                color: "text-teal-600",
              },
            ].map((item, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  <item.icon className={`h-8 w-8 ${item.color} mr-3`} />
                  <h4 className="text-xl font-semibold">{item.title}</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Compétences Techniques</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <h4 className="text-xl font-semibold mb-4">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className="hover:bg-green-100 dark:hover:bg-green-900 transition-colors duration-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Langues</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {languages.map((lang, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                <h4 className="text-lg font-semibold mb-2">{lang.language}</h4>
                <p className="text-gray-600 dark:text-gray-300">{lang.level}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
