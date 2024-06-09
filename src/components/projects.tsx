'use client';

import { motion } from 'framer-motion';

import { Project } from '@/components/project';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { projectsData } from '@/lib/data';

export const Projects = () => {
  const { ref } = useSectionInView('Projects');

  // Split projectsData into two groups
  const firstRowProjects = projectsData.slice(0, 3);
  const secondRowProjects = projectsData.slice(3, 6);

  return (
    <section ref={ref} id="projects" className="my-10 scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.175,
        }}
        viewport={{
          once: true,
        }}
      >
        <SectionHeading
          heading="My Projects"
          content="Some of my favorite projects"
        />
      </motion.div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-8 md:flex-row">
          {firstRowProjects.map((project, index) => (
            <Project key={project.title} project={project} index={index} />
          ))}
        </div>
        <div className="flex flex-col gap-8 md:flex-row">
          {secondRowProjects.map((project, index) => (
            <Project key={project.title} project={project} index={index + 3} />
          ))}
        </div>
      </div>
    </section>
  );
};
