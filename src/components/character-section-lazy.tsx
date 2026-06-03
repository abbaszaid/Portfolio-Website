'use client';

import { useInView } from 'react-intersection-observer';
import dynamic from 'next/dynamic';

import Loader from '@/components/loader';

const CharacterSection = dynamic(
  () =>
    import('@/components/introRightSide').then((mod) => mod.CharacterSection),
  {
    ssr: false,
    loading: () => <Loader />,
  }
);

export const CharacterSectionLazy = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '200px',
  });

  return (
    <div ref={ref} className="min-h-[320px] basis-1/2">
      {inView ? <CharacterSection /> : <Loader />}
    </div>
  );
};
