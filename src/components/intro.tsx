'use client';
import { TextSection } from './introLeftSide';
import { CharacterSection } from './introRightSide';

import { useSectionInView } from '@/hooks/use-section-in-view';

export const Intro = () => {
  const { ref } = useSectionInView('Home');

  return (
    <section
      ref={ref}
      id="home"
      className="flex flex-col gap-2 sm:mt-40 sm:flex-row sm:gap-4 sm:text-left md:mt-10 lg:mt-10"
    >
      <TextSection />
      <CharacterSection />
    </section>
  );
};
