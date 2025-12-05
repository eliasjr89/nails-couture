import { getBlogPosts } from '@/lib/supabase';
import { FadeInUp } from '@/components/animations/FadeInUp';
import { StaggerContainer } from '@/components/animations/StaggerContainer';
import { BlogCard } from '@/components/BlogCard';
import { BookOpen } from 'lucide-react';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Blog',
  description: 'Consejos, tendencias y novedades sobre uñas y tratamientos de belleza',
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-4">
              <BookOpen className="h-6 w-6 text-verde-pastel" />
              <span className="text-sm font-semibold text-verde-pastel uppercase tracking-wider">
                Blog
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Consejos y Tendencias
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Descubre las últimas tendencias, consejos profesionales y novedades del mundo de la belleza
            </p>
          </div>
        </FadeInUp>

        {posts.length > 0 ? (
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </StaggerContainer>
        ) : (
          <FadeInUp>
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                Próximamente publicaremos artículos interesantes. ¡Vuelve pronto!
              </p>
            </div>
          </FadeInUp>
        )}
      </div>
    </div>
  );
}
