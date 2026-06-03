'use client';

import dynamic from 'next/dynamic';

const Experience = dynamic(
  () => import('@/components/experience').then((mod) => mod.Experience),
  { loading: () => <div className="my-10 min-h-[400px]" aria-hidden /> }
);

export const ExperienceLazy = () => <Experience />;
