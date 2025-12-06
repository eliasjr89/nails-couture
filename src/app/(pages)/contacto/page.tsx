import { FadeInUp } from "@/components/animations/FadeInUp";
import { ContactForm } from "@/components/forms/ContactForm";

import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export const metadata = {
  title: "Contacto",
  description: "Ponte en contacto con nosotros. Estamos aquí para ayudarte",
};

export default function ContactoPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="text-center mb-16">
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Contáctanos
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Estamos aquí para responder tus preguntas y ayudarte a reservar tu
              próxima cita
            </p>
          </div>
        </FadeInUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <FadeInUp delay={0.2}>
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-3xl font-bold mb-6">
                  Información de Contacto
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-verde-pastel/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-verde-pastel" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Dirección</h3>
                      <p className="text-muted-foreground">
                        Calle Sapporo 22
                        <br />
                        28923 Alcorcón, Madrid, España
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-verde-pastel/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-verde-pastel" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Teléfono</h3>
                      <a
                        href="tel:+34623068610"
                        className="text-muted-foreground hover:text-verde-pastel transition-colors">
                        +34 623 06 86 10
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-verde-pastel/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-verde-pastel" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a
                        href="mailto:serendinails@gmail.com"
                        className="text-muted-foreground hover:text-verde-pastel transition-colors">
                        serendinails@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-verde-pastel/20 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-verde-pastel" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Horario</h3>
                      <p className="text-muted-foreground">
                        Lunes - Viernes: 09:00 - 21:00
                        <br />
                        Sábado: 09:00 - 14:00
                        <br />
                        Domingo: Cerrado
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-verde-pastel/20 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-6 w-6 text-verde-pastel" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">WhatsApp</h3>
                      <a
                        href="https://wa.me/34623068610"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 bg-verde-pastel text-primary-foreground shadow hover:bg-verde-pastel/90 w-full">
                        Envíanos un mensaje
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Section */}
              <div className="bg-card rounded-2xl p-2 shadow-lg border border-border h-[400px] overflow-hidden relative group">
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src="https://maps.google.com/maps?q=Calle%20Sapporo%2022%2C%20Alcorc%C3%B3n%2C%20Madrid&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  title="Ubicación Serendinails"
                  className="w-full h-full rounded-xl grayscale group-hover:grayscale-0 transition-all duration-500"></iframe>
                <div className="absolute bottom-4 right-4 bg-white/90 dark:bg-black/90 px-4 py-2 rounded-lg shadow backdrop-blur text-xs font-semibold">
                  Calle Sapporo 22, Alcorcón
                </div>
              </div>
            </div>
          </FadeInUp>

          {/* Contact Form */}
          <FadeInUp delay={0.4}>
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
              <h2 className="font-display text-3xl font-bold mb-6">
                Envíanos un Mensaje
              </h2>
              <ContactForm />
            </div>
          </FadeInUp>
        </div>
      </div>
    </div>
  );
}
