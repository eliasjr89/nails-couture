import Link from 'next/link';
import { Instagram, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold bg-gradient-to-r from-verde-pastel to-dorado bg-clip-text text-transparent">
              Serendinails
            </h3>
            <p className="text-sm text-muted-foreground">
              Tu centro de confianza para uñas y tratamientos corporales. Profesionalidad y calidad en cada servicio.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/servicios" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/cursos" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Cursos
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/galeria" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Galería
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-verde-pastel" />
                <span>Dirección del centro</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-verde-pastel" />
                <span>+34 XXX XXX XXX</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-verde-pastel" />
                <span>info@serendinails.com</span>
              </li>
              <li className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MessageCircle className="h-4 w-4 text-verde-pastel" />
                <a href="https://wa.me/34XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-r from-verde-pastel to-dorado flex items-center justify-center text-black hover:shadow-lg transition-shadow"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-r from-verde-pastel to-dorado flex items-center justify-center text-black hover:shadow-lg transition-shadow"
                aria-label="TikTok"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Serendinails. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
