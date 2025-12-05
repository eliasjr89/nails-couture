import { getCourses } from '@/lib/supabase';
import { FadeInUp } from '@/components/animations/FadeInUp';
import { StaggerContainer } from '@/components/animations/StaggerContainer';
import { CourseCard } from '@/components/CourseCard';
import { GraduationCap } from 'lucide-react';

export const metadata = {
  title: 'Cursos',
  description: 'Formación profesional en uñas y tratamientos corporales. Cursos certificados para todos los niveles',
};

export default async function CursosPage() {
  const courses = await getCourses();

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInUp>
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-4">
              <GraduationCap className="h-6 w-6 text-dorado" />
              <span className="text-sm font-semibold text-dorado uppercase tracking-wider">
                Formación Profesional
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              Cursos y Formaciones
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Aprende de los mejores profesionales y obtén tu certificación oficial
            </p>
          </div>
        </FadeInUp>

        {courses.length > 0 ? (
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </StaggerContainer>
        ) : (
          <FadeInUp>
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                Próximamente añadiremos nuestros cursos. Mantente atenta a nuestras redes sociales.
              </p>
            </div>
          </FadeInUp>
        )}
      </div>
    </div>
  );
}
