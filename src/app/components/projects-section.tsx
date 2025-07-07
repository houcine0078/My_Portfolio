"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

export default function ProjectsSection() {
  const projects = [
    {
      title: "Système de Gestion des Employés et des services RH",
      description:
        "Application web complète avec CRUD et authentification sécurisée pour la gestion des ressources humaines.",
      image: "/images/StaffFlow-employeInterface.png?height=300&width=500",
      tags: ["Python", "Django", "MySQL", "CRUD", "Authentication"],
      github: "https://github.com/houcine0078/StaffFlow",
      live: "#",
    },
    {
      title: "Application Mobile de Matchmaking de Football",
      description:
        "Application mobile permettant aux utilisateurs de trouver, créer et rejoindre des matchs de football près de chez eux.",
      image: "/images/KickMatch-Interface.png?height=300&width=500",
      tags: ["Kotlin", "Android Studio", "MySQL", "Retrofit", "API REST"],
      github: "https://github.com/houcine0078/KickMatch",
      live: "#",
    },
    {
      title: "Application de Chat en Temps Réel",
      description:
        "Application de chat avec interface réactive et intégration Firebase pour la messagerie en temps réel.",
      image: "/images/LinkApp-chatInterface.png?height=300&width=500",
      tags: ["Java", "Java Swing", "Firebase", "Realtime Database"],
      github: "https://github.com/houcine0078/LinkApp",
      live: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projets Professionnels</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Une sélection de mes projets les plus significatifs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" variant="secondary" className="hover:scale-110 transition-transform duration-300">
                        <Github className="h-4 w-4" />
                      </Button>
                    </a>
                  )}
                  {project.live && project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="sm" variant="secondary" className="hover:scale-110 transition-transform duration-300">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </a>
                  )}
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-green-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="hover:bg-green-100 dark:hover:bg-green-900 transition-colors duration-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
          </section>
        );
    }