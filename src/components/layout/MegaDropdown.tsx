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
          transition={{ duration: 0.15, ease: 'easeOut' }}
          className="absolute left-1/2 -translate-x-1/2 top-full z-40 w-[800px]"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div className="bg-black/90 backdrop-blur-md border border-white/10 rounded-lg mt-2">
            <div className="px-8 py-8">
              <div className="grid grid-cols-3 gap-8">
                {items.map((category) => (
                  <div key={category.category}>
                    <h3 className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-4">
                      {category.category}
                    </h3>
                    <ul className="space-y-3">
                      {category.items.map((item) => (
                        <li key={item.label}>
                          <Link 
                            href={item.href} 
                            className="group block"
                          >
                            <div className="text-white font-normal text-sm group-hover:text-white/80 transition-colors duration-150">
                              {item.label}
                            </div>
                            {item.description && (
                              <div className="text-xs text-white/40 mt-0.5 group-hover:text-white/50 transition-colors duration-150">
                                {item.description}
                              </div>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
