import './globals.css';

import { Poppins } from '@next/font/google';

// If loading a variable font, you don't need to specify the font weight
const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['200', '400', '600'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={poppins.variable}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>
  );
}
