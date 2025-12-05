import { getGalleryItems } from '@/lib/supabase';
import { FadeInUp } from '@/components/animations/FadeInUp';
import { StaggerContainer } from '@/components/animations/StaggerContainer';
import { GalleryGrid } from '@/components/GalleryGrid';
import { Image as ImageIcon } from 'lucide-react';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Galería',
  description: 'Descubre nuestros trabajos y resultados en uñas y tratamientos corporales',
};

export default async function GaleriaPage() {
  const items = await getGalleryItems();

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-4">
              <ImageIcon className="h-6 w-6 text-dorado" />
              <span className="text-sm font-semibold text-dorado uppercase tracking-wider">
                Galería
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Nuestros Trabajos
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cada trabajo es único y refleja nuestra dedicación a la excelencia
            </p>
          </div>
        </FadeInUp>

        {items.length > 0 ? (
          <GalleryGrid items={items} />
        ) : (
          <FadeInUp>
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                Próximamente añadiremos fotos de nuestros trabajos.
              </p>
            </div>
          </FadeInUp>
        )}
      </div>
    </div>
  );
}
