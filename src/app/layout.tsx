import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Özel Özkan Sürücü Kursu | Samsun ve Bafra'da Profesyonel Sürüş Eğitimi | B, B1, A, A1, A2, D, D1, M Sınıfı Ehliyet | Güvenli Sürüş",
  description:
    "Özel Özkan Sürücü Kursu, Samsun ve Bafra'da profesyonel eğitmenler eşliğinde B, B1, A, A1, A2, D, D1 ve M sınıfı ehliyetler için güvenli sürüş eğitimi sunar. Deneyimli kadromuz ve modern araçlarımızla, sürüş becerilerinizi geliştirin ve hızlıca ehliyetinizi kazanın. Bafra ve Samsun'da en iyi ehliyet kursu arayışınızda doğru adrestesiniz.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const title =
    "Özel Özkan Sürücü Kursu | Samsun ve Bafra'da Profesyonel Sürüş Eğitimi | B, B1, A, A1, A2, D, D1, M Sınıfı Ehliyet | Güvenli Sürüş";
  const descriptionContent =
    "Özel Özkan Sürücü Kursu, Samsun ve Bafra'da profesyonel eğitmenler eşliğinde B, B1, A, A1, A2, D, D1 ve M sınıfı ehliyetler için güvenli sürüş eğitimi sunar. Deneyimli kadromuz ve modern araçlarımızla, sürüş becerilerinizi geliştirin ve hızlıca ehliyetinizi kazanın. Bafra ve Samsun'da en iyi ehliyet kursu arayışınızda doğru adrestesiniz.";
  const keywordsContent =
    "Bafra sürücü kursu, Samsun sürücü kursu, Bafra ehliyet kursu, Samsun ehliyet kursu, güvenli sürüş eğitimi, B sınıfı ehliyet, B1 sınıfı ehliyet, A sınıfı ehliyet, A1 sınıfı ehliyet, A2 sınıfı ehliyet, D sınıfı ehliyet, D1 sınıfı ehliyet, M sınıfı ehliyet, Bafra araba ehliyeti, Samsun motor ehliyeti, lider sürücü kursu, ehliyet kursu Bafra, ehliyet kursu Samsun, Özkan Sürücü Kursu";
  const siteName = "ozkansurucukursu";
  const siteUrl = "https://www.ozkansurucukursu.com.tr";
  const imageFullPathUrl = siteUrl + "/images/favicon.ico";
  const iconHref = siteUrl + "/images/favicon.ico";
  const imageAlt = "Özel Bafra Özkan Sürücü Kursu";
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/font-awesome.min.css" />
        <link rel="stylesheet" href="/css/tooplate-gymso-style.css" />

        <meta name="title" content={title} />
        <meta data-rh="true" property="og:title" content={title} />
        <meta data-rh="true" property="twitter:title" content={title} />

        <meta name="description" content={descriptionContent} />
        <meta
          data-rh="true"
          property="og:description"
          content={descriptionContent}
        />
        <meta
          data-rh="true"
          property="twitter:description"
          content={descriptionContent}
        />

        <meta name="keywords" content={keywordsContent} />
        <meta name="og:keywords" content={keywordsContent} />

        <meta data-rh="true" property="og:site_name" content={siteName} />
        <meta name="application-name" content={siteName} />

        <meta name="robots" content="index,follow" />

        <meta property="og:image" content={imageFullPathUrl} itemProp="image" />

        <meta property="og:image:alt" content={imageAlt} />

        <link rel="icon" href={iconHref} />

        <meta httpEquiv="Content-Language" content="en" />
        <meta name="author" content="Çağdaş Y. Karabulut" />
        <meta name="revisit-after" content="7 days" />

        <meta name="doc-type" content="Web Page" />
        <meta name="doc-class" content="Published" />
        <meta name="doc-rights" content="Public" />
        <meta property="og:type" content="website" />
        <meta
          httpEquiv="Copyright"
          content="Copyright 2024 www.ozkansurucukursu.com.tr"
        />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* <meta name="google-adsense-account" content="" />       */}
      </head>
      <body>{children}</body>
    </html>
  );
}
