import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import AuthSession from './_component/AuthSession';
import { MSWComponent } from '@/app/_component/MSWComponent';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'YB:Next14',
  description: 'YoungBin Next14',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MSWComponent />
        <AuthSession>{children}</AuthSession>
      </body>
    </html>
  );
}
