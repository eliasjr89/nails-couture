'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { DropdownCategory } from '@/types/navbar';

interface MegaDropdownProps {
  items: DropdownCategory[];
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export function MegaDropdown({ items, isOpen, onMouseEnter, onMouseLeave }: MegaDropdownProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="absolute left-1/2 -translate-x-1/2 top-full z-40 w-[700px] pt-4"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {/* Arrow pointing up */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[12px] border-b-white/10" />
          
          <div className="bg-black/90 backdrop-blur-md border border-white/10 rounded-lg shadow-2xl overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1, ease: 'easeOut' }}
              className="px-8 py-8"
            >
              <div className="grid grid-cols-3 gap-8">
                {items.map((category, categoryIndex) => (
                  <motion.div
                    key={category.category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: 0.15 + (categoryIndex * 0.05),
                      ease: 'easeOut' 
                    }}
                  >
                    <h3 className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-4">
                      {category.category}
                    </h3>
                    <ul className="space-y-3">
                      {category.items.map((item, itemIndex) => (
                        <motion.li
                          key={item.label}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ 
                            duration: 0.2, 
                            delay: 0.2 + (categoryIndex * 0.05) + (itemIndex * 0.03),
                            ease: 'easeOut' 
                          }}
                        >
                          <Link 
                            href={item.href} 
                            className="group block"
                          >
                            <div className="text-white font-normal text-sm group-hover:text-verde-pastel transition-colors duration-150">
                              {item.label}
                            </div>
                            {item.description && (
                              <div className="text-xs text-white/40 mt-0.5 group-hover:text-white/60 transition-colors duration-150">
                                {item.description}
                              </div>
                            )}
                          </Link>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
