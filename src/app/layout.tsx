import type { Metadata } from "next";
import Analytics from "../components/Analytics";
import "./globals.css";

export const metadata: Metadata = {
  title: "Académie d'Échecs des Calanques | Club de Sport et d'Échecs Enfants & Adultes (13)",
  description: "Vous cherchez un club de sport, un stage pour enfants ou une activité pour enfants dès 6 ans proche de chez vous ? L'Académie d'Échecs des Calanques vous accueille à Cassis, Carnoux, La Ciotat, Ceyreste et Marseille.",
  keywords: [
    "club de sport",
    "club de sport 13",
    "club de sport proche de chez moi",
    "club d'échecs",
    "club echecs enfants bouches du rhone",
    "cours echecs enfants 13",
    "stage pour enfants",
    "activité pour enfants dès 6 ans",
    "academie echecs calanques",
    "club echecs cassis",
    "club echecs carnoux",
    "club echecs la ciotat",
    "club echecs ceyreste",
    "echecs marseille 13009",
    "sport cérébral 13",
    "activités extra-scolaires proche de chez vous"
  ],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Académie d'Échecs des Calanques | Club de Sport & Échecs (13)",
    description: "Rejoignez votre club de sport et d'échecs de référence proche de chez vous dans les Calanques : Cassis, Carnoux, La Ciotat, Ceyreste et Marseille.",
    url: "https://www.echecs-calanques.fr",
    siteName: "Académie d'Échecs des Calanques",
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@type": ["SportsClub", "EducationalOrganization", "LocalBusiness"],
  "name": "Académie d'Échecs des Calanques",
  "description": "Club de sport et école d'échecs d'excellence pour enfants et adultes dans les Bouches-du-Rhône (13). Cours hebdomadaires, tournois, stages pour enfants et activité pour enfants dès 6 ans proche de chez vous à Cassis, Carnoux, La Ciotat, Ceyreste et Marseille.",
  "url": "https://www.echecs-calanques.fr",
  "logo": "https://www.echecs-calanques.fr/logo.png",
  "areaServed": [
    { "@type": "City", "name": "Marseille" },
    { "@type": "City", "name": "Cassis" },
    { "@type": "City", "name": "Carnoux-en-Provence" },
    { "@type": "City", "name": "La Ciotat" },
    { "@type": "City", "name": "Ceyreste" },
    { "@type": "City", "name": "Aubagne" }
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "20 avenue du Dr Emmanuel Agostini",
    "addressLocality": "Cassis",
    "postalCode": "13260",
    "addressRegion": "Bouches-du-Rhône",
    "addressCountry": "FR"
  },
  "subOrganization": [
    {
      "@type": "SportsActivityLocation",
      "name": "Club d'Échecs Cassis - Centre Culturel",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "20 avenue du Dr Emmanuel Agostini",
        "addressLocality": "Cassis",
        "postalCode": "13260",
        "addressCountry": "FR"
      }
    },
    {
      "@type": "SportsActivityLocation",
      "name": "Club d'Échecs Carnoux - Club au COC",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Av. Paul Cézanne",
        "addressLocality": "Carnoux-en-Provence",
        "postalCode": "13470",
        "addressCountry": "FR"
      }
    },
    {
      "@type": "SportsActivityLocation",
      "name": "Club d'Échecs La Ciotat - CIQ Saint Jean",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "327 avenue de St Jean",
        "addressLocality": "La Ciotat",
        "postalCode": "13600",
        "addressCountry": "FR"
      }
    },
    {
      "@type": "SportsActivityLocation",
      "name": "Club d'Échecs Ceyreste - Salle de la Culture",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Place Albert Blanc",
        "addressLocality": "Ceyreste",
        "postalCode": "13600",
        "addressCountry": "FR"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XMJVYKG0YD"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XMJVYKG0YD');
            `
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WGSHKZLN');`
          }}
        />
      </head>
      <body className="antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WGSHKZLN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
