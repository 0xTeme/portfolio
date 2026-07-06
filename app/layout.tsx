import type {Metadata} from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Temesgen Melaku | Cyber Portfolio',
  description: 'Cybersecurity student portfolio',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <body className="bg-[#0a0a0a] text-gray-200 font-mono antialiased min-h-screen flex flex-col selection:bg-[#00ff41] selection:text-black">
        <div className="fixed inset-0 bg-cyber-grid pointer-events-none z-0"></div>
        {children}
      </body>
    </html>
  );
}
