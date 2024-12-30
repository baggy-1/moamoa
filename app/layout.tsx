import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';

const notoSansKr = Noto_Sans_KR({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  title: "모아모아 - 스마트한 링크 관리 플랫폼",
  description: "모아모아는 현대인의 디지털 정보 관리를 위한 필수 도구 서비스입니다. 모아모아를 활용하여 링크를 더 스마트하게 관리하세요.",
  icons: {
    icon: ["/favicon/favicon.ico", "/favicon/favicon-32x32.png", "/favicon/favicon-16x16.png"],
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className="dark">
      <body className={notoSansKr.className}>{children}</body>
    </html>
  )
}
