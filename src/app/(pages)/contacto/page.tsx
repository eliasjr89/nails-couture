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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info (Left) */}
          <FadeInUp delay={0.2}>
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border h-full">
              <h2 className="font-display text-3xl font-bold mb-8 text-center lg:text-left">
                Información de Contacto
              </h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-verde-pastel/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-verde-pastel" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-lg">Dirección</h3>
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
                    <h3 className="font-semibold mb-1 text-lg">Teléfono</h3>
                    <a
                      href="tel:+34623068610"
                      className="text-muted-foreground hover:text-verde-pastel transition-colors text-lg">
                      +34 623 06 86 10
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-verde-pastel/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-verde-pastel" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-lg">Email</h3>
                    <a
                      href="mailto:Nails Couture@gmail.com"
                      className="text-muted-foreground hover:text-verde-pastel transition-colors">
                      Nails Couture@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-verde-pastel/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-verde-pastel" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-lg">Horario</h3>
                    <p className="text-muted-foreground">
                      Lunes - Viernes: 09:00 - 21:00
                      <br />
                      Sábado: 09:00 - 14:00
                      <br />
                      Domingo: Cerrado
                    </p>
                  </div>
                </div>

                <div className="pt-6">
                  <a
                    href="https://wa.me/34623068610"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center rounded-xl text-base font-semibold transition-all hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-12 px-6 bg-verde-pastel text-primary-foreground shadow-lg hover:bg-verde-pastel/90 hover:shadow-xl">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Envíanos un WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </FadeInUp>

          {/* Map Section (Right) */}
          <FadeInUp delay={0.4}>
            <div
              id="mapa"
              className="bg-card rounded-2xl p-2 shadow-lg border border-border h-[600px] overflow-hidden relative group">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="https://maps.google.com/maps?q=Calle%20Sapporo%2022%2C%20Alcorc%C3%B3n%2C%20Madrid&t=&z=16&ie=UTF8&iwloc=&output=embed"
                title="Ubicación Nails Couture"
                className="w-full h-full rounded-xl grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute bottom-6 right-6 bg-white/95 dark:bg-black/90 px-6 py-3 rounded-xl shadow-lg backdrop-blur text-sm font-bold border border-border/50">
                📍 Calle Sapporo 22, Alcorcón
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>
    </div>
  );
}
