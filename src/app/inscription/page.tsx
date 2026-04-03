import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { ExternalLink, School, UserPlus } from "lucide-react";
import { HELLO_ASSO_LINKS, resolveHelloAssoLink } from "@/lib/inscription-links";

export default function InscriptionPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />

      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Inscription</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-medium">
            Choisis ton parcours d&apos;inscription.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl border border-slate-100 shadow-lg p-8 flex flex-col">
            <div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-5">
              <UserPlus className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-800 mb-3">S&apos;inscrire au club</h2>
            <p className="text-slate-600 mb-6 flex-1">
              Accède à l&apos;inscription club via HelloAsso.
            </p>
            <Button asChild className="w-full bg-accent hover:bg-accent/90 text-white font-bold">
              <a
                href={resolveHelloAssoLink(HELLO_ASSO_LINKS.club)}
                target="_blank"
                rel="noreferrer"
              >
                Aller vers HelloAsso <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-lg p-8 flex flex-col">
            <div className="w-14 h-14 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-5">
              <School className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-800 mb-3">S&apos;inscrire dans une école</h2>
            <p className="text-slate-600 mb-6 flex-1">
              Choisis un établissement puis accède à son lien d&apos;inscription.
            </p>
            <Button asChild variant="outline" className="w-full font-bold border-primary text-primary hover:bg-blue-50">
              <Link href="/inscription/ecoles">Choisir une école</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
