import { getServices } from '@/lib/supabase';
import { FadeInUp } from '@/components/animations/FadeInUp';
import { StaggerContainer, itemVariants } from '@/components/animations/StaggerContainer';
import { ServiceCard } from '@/components/ServiceCard';
import { Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Servicios',
  description: 'Descubre nuestra amplia gama de servicios profesionales de uñas y tratamientos corporales',
};

export default async function ServiciosPage() {
  const services = await getServices();

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-4">
              <Sparkles className="h-6 w-6 text-verde-pastel" />
              <span className="text-sm font-semibold text-verde-pastel uppercase tracking-wider">
                Nuestros Servicios
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Tratamientos Profesionales
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cada servicio está diseñado para ofrecerte la mejor experiencia y resultados excepcionales
            </p>
          </div>
        </FadeInUp>

        {services.length > 0 ? (
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </StaggerContainer>
        ) : (
          <FadeInUp>
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                Próximamente añadiremos nuestros servicios. Mientras tanto, puedes{' '}
                <a href="https://www.fresha.com" target="_blank" rel="noopener noreferrer" className="text-verde-pastel hover:underline">
                  reservar una cita
                </a>
                .
              </p>
            </div>
          </FadeInUp>
        )}
      </div>
    </div>
  );
}
