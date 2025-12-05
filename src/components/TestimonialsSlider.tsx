'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Testimonial {
  name: string;
  comment: string;
  rating: number;
}

interface TestimonialsSliderProps {
  testimonials: Testimonial[];
  autoPlayInterval?: number;
}

export function TestimonialsSlider({ testimonials, autoPlayInterval = 6000 }: TestimonialsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length, autoPlayInterval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div 
      className="relative w-full max-w-4xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Testimonial Content */}
      <div className="relative h-[300px] md:h-[250px] flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0 flex items-center justify-center px-4"
          >
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border w-full max-w-3xl">
              {/* Rating Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-dorado fill-dorado" />
                ))}
              </div>
              
              {/* Comment */}
              <p className="text-center text-lg md:text-xl text-muted-foreground mb-8 italic leading-relaxed">
                &ldquo;{testimonials[currentIndex].comment}&rdquo;
              </p>
              
              {/* Name */}
              <p className="text-center font-semibold text-xl">
                {testimonials[currentIndex].name}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-verde-pastel w-8'
                : 'bg-border hover:bg-verde-pastel/50'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      {/* Pause Indicator */}
      {isPaused && (
        <div className="absolute top-4 right-4 text-xs text-muted-foreground bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full">
          Pausado
        </div>
      )}
    </div>
  );
}
