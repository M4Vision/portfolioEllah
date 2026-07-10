import type { Metadata } from 'next';
import '../style.css';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Ellah Services — Des systèmes qui font gagner du temps.',
  description:
    'Ellah Services propose développement, automatisation, prospection commerciale et conseil digital pour aider les entreprises à gagner en efficacité.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Satisfy&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/assets/favicon.png" type="image/x-icon" />
      </head>
      <body>{children}</body>
    </html>
  );
}
