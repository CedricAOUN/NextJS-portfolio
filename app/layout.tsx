import './globals.css';
import type { Metadata } from 'next';
import { Inter, Orbitron } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-orbitron',
});

export const metadata: Metadata = {
  title: 'Cedric Aoun - Portfolio',
  description: 'Portfolio app - Created by Cedric Aoun',
};

export default function RootLayout(
  { children }: { children: React.ReactNode },
) {
  return (
    <html lang='en' className={''}>
      <body className={`${inter.className} ${orbitron.className}`}>
        {children}
      </body>
    </html>
  );
}
