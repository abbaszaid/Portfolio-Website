import { env } from '@/env.mjs';

export const siteConfig = {
  title: 'Abbas Zaidi | CS @ UTA',
  description:
    "Hello, I'm Abbas.I am a senior at the University of Texas at Arlington majoring in CS. I love developing and deploying websites, apps, games and extensions that serve a purpose.",
  keywords: [
    'Abbas Zaidi',
    'Software Engineer',
    'United States',
    'React',
    'Next.js',
    'Web development',
    'Front-end',
    'Back-end',
    'UI/UX',
    'Responsive design',
    'JavaScript',
    'HTML',
    'CSS',
    'Portfolio',
    'Projects',
    'Website',
    'Web applications',
    'Developer',
    'Code',
    'Programming',
    'Tech enthusiast',
  ],
  url: env.SITE_URL || 'https://abbas-zaid.com',
  googleSiteVerificationId: env.GOOGLE_SITE_VERIFICATION_ID || '',
};
