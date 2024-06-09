'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex flex-col items-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="Get to know me!" />
      <div className="mt-5 flex max-w-full flex-col items-center justify-center md:flex-row md:justify-between">
        <div className="mb-5 flex justify-center md:mb-0 md:w-1/2">
          <div className="md:w-70% w-32">
            <Image
              src="/headshot2.png"
              alt="Your Photo"
              width={300}
              height={300}
              className="w-full"
            />
          </div>
        </div>
        <div className="flex-1 text-center leading-7 md:w-1/2 md:text-left">
          <p className="mb-4">
            I&apos;m currently a senior @ UTA majoring in CS. I love building
            and hosting personal projects with new technologies that I&apos;m
            interested in learning.
          </p>
          <p className="mb-4">
            Other than programming, I love travelling, going to the gym, and
            trying out new cuisines.
          </p>
          <p>
            I&apos;m looking for full time/internship software engineering roles
            at a place where I can get an opportunity to contribute as well as
            work and learn from great engineers.
          </p>
        </div>
      </div>
      <Skills />
    </motion.section>
  );
};
