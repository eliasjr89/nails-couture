'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Euro } from 'lucide-react';
import { Service } from '@/lib/supabase';
import { itemVariants } from './animations/StaggerContainer';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link href={`/servicios/${service.slug}`} className="block">
        <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-border h-full">
          {service.image_url && (
            <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-verde-pastel/20 to-dorado/20">
              <img
                src={service.image_url}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <div className="p-6">
            {service.category && (
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-verde-pastel/20 text-verde-pastel mb-3">
                {service.category}
              </span>
            )}
            
            <h3 className="font-display text-2xl font-bold mb-3">{service.title}</h3>
            
            {service.description && (
              <p className="text-muted-foreground mb-4 line-clamp-2">
                {service.description}
              </p>
            )}

            <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
              {service.duration && (
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{service.duration} min</span>
                </div>
              )}
              {service.price && (
                <div className="flex items-center space-x-1">
                  <Euro className="h-4 w-4" />
                  <span className="font-semibold text-foreground">{service.price}</span>
                </div>
              )}
            </div>

            <div className="flex items-center space-x-2 text-verde-pastel font-semibold">
              <span>Ver detalles</span>
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
