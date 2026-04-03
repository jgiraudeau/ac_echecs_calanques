import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { ExternalLink, GraduationCap } from "lucide-react";
import { HELLO_ASSO_LINKS, resolveHelloAssoLink } from "@/lib/inscription-links";

const SCHOOL_OPTIONS = [
  {
    key: "saintAugustinCarnoux",
    name: "Saint Augustin",
    city: "Carnoux",
    href: resolveHelloAssoLink(HELLO_ASSO_LINKS.schools.saintAugustinCarnoux),
  },
  {
    key: "sainteTriniteMarseille",
    name: "Sainte Trinité",
    city: "Marseille",
    href: resolveHelloAssoLink(HELLO_ASSO_LINKS.schools.sainteTriniteMarseille),
  },
  {
    key: "sainteClaireCassis",
    name: "Sainte Claire",
    city: "Cassis",
    href: resolveHelloAssoLink(HELLO_ASSO_LINKS.schools.sainteClaireCassis),
  },
  {
    key: "donBoscoSaintCyrSurMer",
    name: "Don Bosco",
    city: "Saint-Cyr-sur-Mer",
    href: resolveHelloAssoLink(HELLO_ASSO_LINKS.schools.donBoscoSaintCyrSurMer),
  },
] as const;

export default function InscriptionsEcolesPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />

      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Inscription en école</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-medium">
            Sélectionne l&apos;école concernée.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Button asChild variant="ghost" className="text-primary hover:bg-blue-50">
            <Link href="/inscription">← Retour au choix d&apos;inscription</Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {SCHOOL_OPTIONS.map((school) => (
            <div
              key={school.key}
              className="bg-white rounded-2xl border border-slate-100 shadow-md p-6 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-800">{school.name}</h2>
              <p className="text-slate-500 font-medium mb-6">{school.city}</p>
              <Button asChild className="mt-auto bg-accent hover:bg-accent/90 text-white font-bold">
                <a href={school.href} target="_blank" rel="noreferrer">
                  S&apos;inscrire <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
