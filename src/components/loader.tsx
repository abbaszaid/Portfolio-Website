import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <motion.div
        className="border-primary-500 size-10 rounded-full border-4 border-t-transparent"
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          duration: 1,
          ease: 'linear',
        }}
      />
    </div>
  );
};

export default Loader;
