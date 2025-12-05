import { FadeInUp } from '@/components/animations/FadeInUp';
import { ContactForm } from '@/components/forms/ContactForm';

import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export const metadata = {
  title: 'Contacto',
  description: 'Ponte en contacto con nosotros. Estamos aquí para ayudarte',
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
              Estamos aquí para responder tus preguntas y ayudarte a reservar tu próxima cita
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
                        Calle Ejemplo, 123<br />
                        28001 Madrid, España
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-verde-pastel/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-verde-pastel" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Teléfono</h3>
                      <p className="text-muted-foreground">+34 XXX XXX XXX</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-verde-pastel/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-verde-pastel" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">info@serendinails.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-verde-pastel/20 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-verde-pastel" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Horario</h3>
                      <p className="text-muted-foreground">
                        Lunes - Viernes: 10:00 - 20:00<br />
                        Sábado: 10:00 - 14:00<br />
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
                        href="https://wa.me/34XXXXXXXXX" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-verde-pastel hover:underline"
                      >
                        Envíanos un mensaje
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="aspect-video rounded-2xl overflow-hidden bg-secondary border border-border">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <p>Mapa de Google Maps aquí</p>
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
