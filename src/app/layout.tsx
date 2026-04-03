import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Académie d'Échecs des Calanques",
  description: "Club d'échecs de Cassis et des Calanques",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
