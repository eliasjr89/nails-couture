'use client';

import { motion } from 'framer-motion';
import { GalleryItem } from '@/lib/supabase';
import { StaggerContainer, itemVariants } from './animations/StaggerContainer';
import { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryGridProps {
  items: GalleryItem[];
}

export function GalleryGrid({ items }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <>
      <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => setSelectedImage(item)}
            className="cursor-pointer"
          >
            <div className="aspect-square relative overflow-hidden rounded-lg bg-gradient-to-br from-verde-pastel/20 to-dorado/20">
              <img
                src={item.image_url}
                alt={item.title || 'Gallery image'}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        ))}
      </StaggerContainer>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="h-6 w-6 text-white" />
          </button>
          
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="max-w-4xl max-h-[90vh]"
          >
            <img
              src={selectedImage.image_url}
              alt={selectedImage.title || 'Gallery image'}
              className="w-full h-full object-contain rounded-lg"
            />
            {selectedImage.title && (
              <p className="text-white text-center mt-4 text-lg font-semibold">
                {selectedImage.title}
              </p>
            )}
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
