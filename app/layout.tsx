import type { Metadata } from 'next';
import { Noto_Sans_JP, Sen, Albert_Sans } from 'next/font/google';
import './globals.css';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
});

const sen = Sen({
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  display: 'swap',
  variable: '--font-sen',
});

const albertSans = Albert_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-albert-sans',
});

export const metadata: Metadata = {
  title: '島根県安来市の外壁塗装・屋根塗装ならまつ塗研',
  description: '創業40年以上、山陰の住まいに寄り添い続けてきたまつ塗研。丁寧な仕事を大切にする職人たちが、住まいに真摯に向き合い、細部まで心を配った確かな仕上がりをお届けします。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${sen.variable} ${albertSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
