'use client';

import { motion } from 'framer-motion';

export const SectionDivider = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
      className="bg-muted lg:my-25 h-20 w-1 rounded-full sm:my-10 md:my-20"
    ></motion.div>
  );
};
