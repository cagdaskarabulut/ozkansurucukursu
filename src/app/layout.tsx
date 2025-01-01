import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bafra Sürücü Kursu | Ehliyet Kursu Samsun | Özkan Sürücü Kursu",
  description:
    "Özel Bafra Özkan Sürücü Kursu, Samsun ve Bafra'da profesyonel eğitmenler eşliğinde B, B1, B Otomatik, A, A1, A2, D, D1 ve M sınıfı ehliyetler için güvenli sürüş eğitimi sunar.",
  keywords:
    "Bafra sürücü kursu, Samsun sürücü kursu, Bafra ehliyet kursu, Samsun ehliyet kursu, güvenli sürüş eğitimi, B sınıfı ehliyet, B Otomatik sınıfı ehliyet, B1 sınıfı ehliyet, A sınıfı ehliyet, A1 sınıfı ehliyet, A2 sınıfı ehliyet, D sınıfı ehliyet, D1 sınıfı ehliyet, M sınıfı ehliyet, Bafra araba ehliyeti, Samsun motor ehliyeti, lider sürücü kursu, ehliyet kursu Bafra, ehliyet kursu Samsun, Özkan Sürücü Kursu",
  authors: [{ name: "Çağdaş Y. Karabulut" }],
  openGraph: {
    title: "Özel Bafra Özkan Sürücü Kursu",
    description:
      "Özel Bafra Özkan Sürücü Kursu, Samsun ve Bafra'da profesyonel eğitmenler eşliğinde B, B1, B Otomatik, A, A1, A2, D, D1 ve M sınıfı ehliyetler için güvenli sürüş eğitimi sunar.",
    url: "https://www.ozkansurucukursu.com.tr",
    siteName: "Özel Bafra Özkan Sürücü Kursu",
    images: [
      {
        url: "https://www.ozkansurucukursu.com.tr/favicon.ico",
        width: 192,
        height: 192,
        alt: "Özel Bafra Özkan Sürücü Kursu",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Özel Bafra Özkan Sürücü Kursu",
    description:
      "Özel Bafra Özkan Sürücü Kursu, Samsun ve Bafra'da profesyonel eğitmenler eşliğinde B, B1, B Otomatik, A, A1, A2, D, D1 ve M sınıfı ehliyetler için güvenli sürüş eğitimi sunar.",
  },
  icons: {
    icon: "/favicon.ico",
  },
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index,follow",
  applicationName: "Özel Bafra Özkan Sürücü Kursu",
  alternates: {
    canonical: "https://www.ozkansurucukursu.com.tr",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        <meta name="revisit-after" content="7 days" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body>{children}</body>
    </html>
  );
}
