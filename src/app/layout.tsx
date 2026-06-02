import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Académie d'Échecs des Calanques | Club d'Échecs Enfants Bouches-du-Rhône (13)",
  description: "Club d'échecs d'excellence pour enfants et adultes dans les Bouches-du-Rhône. Cours d'échecs hebdomadaires et stages d'échecs à Cassis, Carnoux, La Ciotat, Ceyreste et Marseille.",
  keywords: [
    "echecs enfants bouches du rhone",
    "club echecs enfants 13",
    "cours echecs enfants bouches du rhone",
    "academie echecs calanques",
    "club echecs echecs cassis",
    "club echecs carnoux",
    "club echecs la ciotat",
    "club echecs ceyreste",
    "echecs marseille 13009",
    "stage echecs enfants",
    "initiation echecs 13"
  ],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Académie d'Échecs des Calanques | Club d'Échecs Enfants (13)",
    description: "Rejoignez le club d'échecs de référence pour les enfants et adultes dans les Calanques : Cassis, Carnoux, La Ciotat, Ceyreste et Marseille. Cours, compétitions et stages.",
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
  "@type": "EducationalOrganization",
  "name": "Académie d'Échecs des Calanques",
  "description": "Club et école d'échecs d'excellence pour enfants et adultes dans les Bouches-du-Rhône (13). Cours hebdomadaires, tournois et stages d'échecs à Cassis, Carnoux, La Ciotat, Ceyreste et Marseille.",
  "url": "https://www.echecs-calanques.fr",
  "logo": "https://www.echecs-calanques.fr/logo.png",
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
      "name": "Club d'Échecs Carnoux - Club au COQ",
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
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
        {children}
      </body>
    </html>
  );
}
