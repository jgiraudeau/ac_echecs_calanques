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
    href: "/inscription/ecoles/saint-augustin",
  },
  {
    key: "sainteTriniteMarseille",
    name: "Sainte Trinité",
    city: "Marseille",
    href: "/inscription/ecoles/sainte-trinite",
  },
  {
    key: "donBoscoSaintCyrSurMer",
    name: "Don Bosco",
    city: "Saint-Cyr-sur-Mer",
    href: "/inscription/ecoles/don-bosco",
  },
] as const;

export default function InscriptionsEcolesPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-24 lg:py-32">
        {/* Ambient glow effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-700/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 shadow-sm backdrop-blur-md text-sm font-medium text-blue-200 mb-8 transition-all hover:bg-white/10 cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Saison 2026-2027
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 drop-shadow-sm">
            Inscription en école
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-200/80 max-w-2xl mx-auto font-light leading-relaxed">
            Sélectionne l&apos;école concernée.
          </p>
        </div>
        
        {/* Decorative blur orbs */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
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
                <Link href={school.href}>
                  S'inscrire en ligne
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
