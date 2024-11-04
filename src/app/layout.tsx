import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Özel Bafra Özkan Sürücü Kursu",
  description:
    "Özel Bafra Özkan Sürücü Kursu | Samsun ve Bafra'da Profesyonel Sürüş Eğitimi | B, B1, A, A1, A2, D, D1, M Sınıfı Ehliyet | Güvenli Sürüş",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const title =
    "Özel Bafra Özkan Sürücü Kursu | Samsun ve Bafra'da Profesyonel Sürüş Eğitimi | B, B1, A, A1, A2, D, D1, M Sınıfı Ehliyet | Güvenli Sürüş";
  const descriptionContent =
    "Özel Bafra Özkan Sürücü Kursu, Samsun ve Bafra'da profesyonel eğitmenler eşliğinde B, B1, A, A1, A2, D, D1 ve M sınıfı ehliyetler için güvenli sürüş eğitimi sunar. Deneyimli kadromuz ve modern araçlarımızla, sürüş becerilerinizi geliştirin ve hızlıca ehliyetinizi kazanın. Bafra ve Samsun'da en iyi ehliyet kursu arayışınızda doğru adrestesiniz.";
  const keywordsContent =
    "Bafra sürücü kursu, Samsun sürücü kursu, Bafra ehliyet kursu, Samsun ehliyet kursu, güvenli sürüş eğitimi, B sınıfı ehliyet, B1 sınıfı ehliyet, A sınıfı ehliyet, A1 sınıfı ehliyet, A2 sınıfı ehliyet, D sınıfı ehliyet, D1 sınıfı ehliyet, M sınıfı ehliyet, Bafra araba ehliyeti, Samsun motor ehliyeti, lider sürücü kursu, ehliyet kursu Bafra, ehliyet kursu Samsun, Özkan Sürücü Kursu";
  const siteName = "Özel Bafra Özkan Sürücü Kursu";
  const siteUrl = "https://www.ozkansurucukursu.com.tr";
  const imageFullPathUrl = `${siteUrl}/favicon.ico`;
  const iconHref = `${siteUrl}/favicon.ico`;
  const imageAlt = "Özel Bafra Özkan Sürücü Kursu";

  return (
    <html lang="en">
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
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>

        {/* Basic SEO */}
        <meta name="title" content={title} />
        <meta name="description" content={descriptionContent} />
        <meta name="keywords" content={keywordsContent} />
        <meta name="robots" content="index,follow" />
        <meta name="author" content="Çağdaş Y. Karabulut" />
        <meta name="revisit-after" content="7 days" />

        {/* Open Graph Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={descriptionContent} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:image" content={imageFullPathUrl} />
        <meta property="og:image:alt" content={imageAlt} />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={descriptionContent} />

        {/* Favicon */}
        <link rel="icon" href={iconHref} type="image/x-icon" />

        {/* Misc Meta */}
        <meta name="application-name" content={siteName} />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body>{children}</body>
    </html>
  );
}
