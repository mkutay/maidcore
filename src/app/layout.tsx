import type { Metadata } from 'next';
import { Manrope, Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

import '@/app/globals.css';
import { NavBar } from '@/components/navBar';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: 'Home | Everything Maidcore Music',
  description: 'Your site for finding everything about maidcore. Discord, Spotify, Reddit, and more.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body
        className={`${inter.className} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
