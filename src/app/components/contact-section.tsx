"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Contactez-moi</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Prêt à collaborer sur votre prochain projet ? Discutons ensemble
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Informations de Contact</h3>
            <div className="space-y-4">
              {[
                { icon: Mail, text: "houcineoumeslakht14@gmail.com" },
                { icon: Phone, text: "+212 766 36 94 73" },
                { icon: MapPin, text: "Rabat, Maroc" },
                { icon: Github, text: "Houcine-oumeslakht" },
                { icon: Linkedin, text: "houcine0078" },
              ].map((item, index) => (
                <div key={index} className="flex items-center hover:translate-x-2 transition-transform duration-300">
                  <item.icon className="h-5 w-5 text-green-600 mr-3" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <Card className="p-6 hover:shadow-xl transition-all duration-300">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nom</label>
                  <Input placeholder="Votre nom" className="focus:ring-green-500 focus:border-green-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    placeholder="votre@email.com"
                    className="focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Sujet</label>
                <Input placeholder="Demande de projet" className="focus:ring-green-500 focus:border-green-500" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  placeholder="Parlez-moi de votre projet..."
                  rows={4}
                  className="focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300">
                Envoyer le Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
