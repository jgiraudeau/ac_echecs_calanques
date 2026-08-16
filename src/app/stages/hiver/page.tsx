import { Navbar } from "@/components/layout/Navbar";
import { CalendarDays, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { HelloAssoWidget } from "@/components/HelloAssoWidget";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stage Vacances Échecs Hiver | Académie des calanques",
  description:
    "Aperçu du stage d'échecs des vacances d'Hiver de l'Académie.",
};

export default function HiverPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />

      <div className="pt-24 pb-8 container mx-auto px-4">
        <Link href="/stages" className="inline-flex items-center gap-2 text-[#0F4C81] hover:underline mb-8 font-semibold">
          <ArrowLeft className="w-4 h-4" /> Retour aux stages
        </Link>
        
        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl border border-slate-200 max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
              Aperçu
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-800">Stage d&apos;Hiver 2027</h1>
            <p className="text-slate-600 mt-4 text-lg max-w-2xl mx-auto">
              Les 01/03 et 02/03 au Centre Culturel de Cassis.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Affiches */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              <div className="relative aspect-[1/1.4] w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 group">
                <Image src="/images/stage-hiver-2027-recto.jpg" alt="Affiche Stage Hiver 2027" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="relative aspect-[1/1.4] w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200 group">
                <Image src="/images/stage-hiver-2027-verso.jpg" alt="Informations Stage Hiver 2027" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
            </div>

            {/* Inscription Widget HelloAsso */}
            <div className="lg:col-span-7 bg-slate-50 rounded-2xl p-4 md:p-6 shadow-inner border border-slate-200 sticky top-24">
              <h3 className="text-xl font-bold text-[#0F4C81] mb-6 flex items-center justify-center gap-2">
                <CalendarDays className="w-6 h-6" />
                Aperçu de l&apos;inscription
              </h3>
              <HelloAssoWidget url="https://www.helloasso.com/associations/echecs-cassis/evenements/stage-d-echecs-pour-enfant-hivers-2027/widget" />
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-slate-950 text-slate-400 py-8 text-center text-sm mt-12">
        <p>© 2026 Académie d&apos;échecs des calanques · <a href="mailto:communication@echecs-calanques.fr" className="hover:text-white transition-colors">communication@echecs-calanques.fr</a></p>
      </footer>
    </div>
  );
}
