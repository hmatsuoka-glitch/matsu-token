import type { Metadata } from 'next';
import './globals.css';

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
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&family=Sen:wght@400;700;800&family=Albert+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
