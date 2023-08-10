import './globals.css';
import type { Metadata } from 'next';
import {inter} from "@/app/utils/fonts";
import Head from "next/head";

export const metadata: Metadata = {
  title: 'Cedric Aoun - Portfolio',
  description: 'Portfolio app - Created by Cedric Aoun',
};

export default function RootLayout(
  { children }: { children: React.ReactNode },
) {
  return (
    <html lang='en' className={'dark overflow-x-hidden'}>
      <body className={`${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
