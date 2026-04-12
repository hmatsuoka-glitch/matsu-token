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
  title: '名古屋市の外壁塗装・修繕工事なら㈱ユタカプラス',
  description: '塗装のプロフェッショナルとして、お客様一人ひとりのお悩みに寄り添う住宅塗装をはじめ、鉄道、高速道路、工場、ビル、マンション、アミューズメントパークに至るまで愛知の街を守る幅広い塗装工事に携わってまいりました。',
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
