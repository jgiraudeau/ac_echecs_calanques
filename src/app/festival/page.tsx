import { Navbar } from "@/components/layout/Navbar";
import { CalendarDays, Trophy, Globe2, Users, MapPin, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Festival International | Académie d'échecs des calanques",
  description: "Découvrez le Festival International d'Échecs de Ceyreste et Cassis. Retrouvez prochainement les informations pour la 4ème édition en 2027.",
};

export default function FestivalPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-[#0F4C81] to-slate-800 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-10 w-96 h-96 rounded-full bg-blue-400 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-orange-400 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-100 text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <Trophy className="w-4 h-4 text-orange-400" />
            Événement Majeur
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-lg leading-tight">
            Festival International<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
              d&apos;Échecs
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Ceyreste &amp; Cassis Échecs
          </p>
        </div>
        
        {/* Wave divider */}
        <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-[0] z-10">
          <svg className="relative block w-[calc(100%+1.3px)] h-[60px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-slate-50" />
          </svg>
        </div>
      </section>

      {/* Édition 2027 - Coming Soon */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200 max-w-5xl mx-auto text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full flex items-start justify-end p-6">
            <CalendarDays className="w-10 h-10 text-orange-400 opacity-50" />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-6">
              4ème Édition – Horizon 2027
            </h2>
            <div className="inline-block bg-orange-100 text-orange-700 font-bold px-6 py-3 rounded-xl mb-8 text-lg">
              En cours de préparation
            </div>
            
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
              Nous communiquerons très prochainement toutes les informations, les dates exactes ainsi que les modalités d'inscription pour la <strong>4ème édition de notre Festival International</strong> qui aura lieu en <strong>2027</strong>.
            </p>
            
            <p className="text-slate-500 max-w-2xl mx-auto">
              L'Académie d'échecs des calanques travaille d'arrache-pied pour vous proposer un événement encore plus spectaculaire, festif et compétitif. Restez connectés !
            </p>

            <div className="mt-10 pt-10 border-t border-slate-100 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#0F4C81] hover:bg-[#0a3560] text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <Mail className="w-5 h-5" />
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rétrospective */}
      <section className="bg-slate-100 py-16 md:py-24 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-800 mb-4">Un succès grandissant</h2>
            <p className="text-slate-600 text-lg">
              Retour sur les éditions précédentes qui ont fait de ce festival un rendez-vous incontournable des échecs en France.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 text-center hover:shadow-md transition-shadow hover:border-orange-200">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-blue-600">
                <Users className="w-7 h-7" />
              </div>
              <div className="text-4xl font-black text-slate-800 mb-2">240+</div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Joueurs</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 text-center hover:shadow-md transition-shadow hover:border-orange-200">
              <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-amber-500">
                <Trophy className="w-7 h-7" />
              </div>
              <div className="text-4xl font-black text-slate-800 mb-2">25</div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Maîtres &amp; GMI</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 text-center hover:shadow-md transition-shadow hover:border-orange-200">
              <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-emerald-600">
                <Globe2 className="w-7 h-7" />
              </div>
              <div className="text-4xl font-black text-slate-800 mb-2">7</div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Pays représentés</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 text-center hover:shadow-md transition-shadow hover:border-orange-200">
              <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-purple-600">
                <MapPin className="w-7 h-7" />
              </div>
              <div className="text-4xl font-black text-slate-800 mb-2">59</div>
              <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Clubs français</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-10 text-center text-sm border-t border-slate-900">
        <div className="container mx-auto px-4">
          <p className="mb-2">© 2026 Académie d&apos;échecs des calanques</p>
          <a href="mailto:communication@echecs-calanques.fr" className="hover:text-white transition-colors">
            communication@echecs-calanques.fr
          </a>
        </div>
      </footer>
    </div>
  );
}
