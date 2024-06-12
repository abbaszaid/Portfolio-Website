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
      className="my-5 flex scroll-mt-96 flex-col gap-2 sm:flex-row sm:gap-4 "
    >
      <TextSection />
      <CharacterSection />
    </section>
  );
};
