import { Button } from '@/components/button';

export const Footer = () => {
  return (
    <footer className="text-muted-foreground my-2 text-center text-sm">
      © {new Date().getFullYear()}{' '}
      <Button variant="link" className="text-muted-foreground p-0 font-medium">
        <a href="https://github.com/abbaszaid">Abbas Zaidi</a>
      </Button>
      <p>
        My tech stack for this website: React, Next.js, Three.js, TailwindCSS
        and Typescript
      </p>
    </footer>
  );
};
