import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Trophy, Users, GraduationCap, Calendar, Newspaper, PlayCircle, Crown } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50">
      <Navbar />

      {/* Hero Section Immersive */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_calanques_v2.png"
            alt="Echecs dans les Calanques"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Gradient Overlay for Text Readability - Slightly Darker for white text */}
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F4C81]/80 via-transparent to-transparent" />
        </div>

        {/* Badge Top Left */}
        <div className="absolute top-8 left-8 z-20">
          <span className="inline-flex items-center px-4 py-2 rounded-lg bg-white/90 text-orange-600 text-sm font-bold uppercase tracking-wider shadow-lg backdrop-blur-md border border-white/50">
            <Crown className="w-4 h-4 mr-2" />
            Club Officiel FFE
          </span>
        </div>

        <div className="container relative z-10 px-4 text-center mt-10">
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight mb-8 text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
            Académie Echecs <br />
            <span className="text-white">
              Calanques
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-10 max-w-3xl mx-auto font-medium leading-relaxed drop-shadow-md">
            Stratégie et nature se rencontrent. Du loisir à la haute compétition,
            rejoignez le club d'échecs le plus inspirant en Provence.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button className="bg-accent hover:bg-accent/90 text-white px-8 py-7 text-lg rounded-xl shadow-xl shadow-black/20 transition-all hover:scale-105 font-bold border-2 border-transparent">
              Rejoindre le Club
            </Button>
            <Button variant="outline" className="text-white bg-white/10 backdrop-blur-md border-white/60 hover:bg-white/20 px-8 py-7 text-lg rounded-xl font-semibold">
              Nos Horaires & Lieux
            </Button>
          </div>
        </div>

        {/* Wave Separator */}
        <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-[0] z-10">
          <svg className="relative block w-[calc(100%+1.3px)] h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-slate-50"></path>
          </svg>
        </div>
      </section>

      {/* Quick Links Bar (Negative margin to overlap Hero) */}
      <section className="relative z-20 -mt-16 container mx-auto px-4 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white rounded-2xl shadow-xl p-4 border border-slate-100">
          <a href="#" className="flex flex-col items-center justify-center p-4 hover:bg-blue-50 rounded-xl transition-colors group text-center">
            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Calendar className="w-5 h-5" />
            </div>
            <span className="font-bold text-slate-700">Agenda</span>
          </a>
          <a href="#" className="flex flex-col items-center justify-center p-4 hover:bg-orange-50 rounded-xl transition-colors group text-center">
            <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Trophy className="w-5 h-5" />
            </div>
            <span className="font-bold text-slate-700">Tournois</span>
          </a>
          <a href="#" className="flex flex-col items-center justify-center p-4 hover:bg-green-50 rounded-xl transition-colors group text-center">
            <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Crown className="w-5 h-5" />
            </div>
            <span className="font-bold text-slate-700">Résultats</span>
          </a>
          <a href="#" className="flex flex-col items-center justify-center p-4 hover:bg-purple-50 rounded-xl transition-colors group text-center">
            <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <GraduationCap className="w-5 h-5" />
            </div>
            <span className="font-bold text-slate-700">Cours</span>
          </a>
        </div>
      </section>

      {/* Actualités & Résultats (2 colonnes) */}
      <section className="py-10 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Colonne Actualités */}
          <div className="lg:w-2/3">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-3">
                <Newspaper className="text-primary w-8 h-8" />
                À la Une
              </h2>
              <Button variant="ghost" className="text-primary">Tout voir</Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Actu 1 */}
              <div className="group rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all border border-slate-100">
                <div className="h-48 bg-slate-200 relative overflow-hidden">
                  {/* Placeholder image */}
                  <div className="absolute inset-0 bg-blue-900/10 group-hover:scale-105 transition-transform duration-500"></div>
                  <span className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-blue-800">
                    02 Mai 2026
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-primary transition-colors">
                    Stage de Printemps : Inscrivez-vous !
                  </h3>
                  <p className="text-slate-600 line-clamp-2">
                    Une semaine intensive pour progresser avec nos Grands Maîtres. Places limitées.
                  </p>
                </div>
              </div>

              {/* Actu 2 */}
              <div className="group rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all border border-slate-100">
                <div className="h-48 bg-slate-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-orange-900/10 group-hover:scale-105 transition-transform duration-500"></div>
                  <span className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-orange-800">
                    28 Avril 2026
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-primary transition-colors">
                    Victoire de l'équipe 1 en Nationale !
                  </h3>
                  <p className="text-slate-600 line-clamp-2">
                    Un match décisif contre Lyon qui nous propulse en tête du classement.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne Résultats / Live */}
          <div className="lg:w-1/3">
            <div className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-accent">
              <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <Trophy className="text-accent w-6 h-6" />
                Derniers Résultats
              </h2>

              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div>
                    <div className="font-bold text-slate-700">Open de Cassis</div>
                    <div className="text-sm text-slate-500">Rapide • 120 joueurs</div>
                  </div>
                  <div className="text-right">
                    <span className="block font-bold text-green-600">J. Durand 1er</span>
                    <span className="text-xs text-slate-400">Perf 2450</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div>
                    <div className="font-bold text-slate-700">Interclubs N2</div>
                    <div className="text-sm text-slate-500">AC Echecs vs Marseille</div>
                  </div>
                  <div className="text-right">
                    <span className="block font-bold text-blue-600">Gain 5-2</span>
                    <span className="text-xs text-slate-400">Ronde 7</span>
                  </div>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl text-center">
                  <p className="text-sm text-slate-600 mb-3">Prochain match à domicile</p>
                  <div className="font-bold text-lg text-primary">Dimanche 15 Mai</div>
                  <div className="text-sm text-slate-500">vs Nice Alekhine</div>
                </div>
              </div>

              <Button variant="outline" className="w-full mt-6">Voir tous les classements</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intermediate Action Banner (Video/Parties) */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden mt-10">
        {/* Abstract background */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/30 to-transparent"></div>

        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="md:w-1/2">
            <span className="text-accent font-bold tracking-widest uppercase mb-2 block">Immersion</span>
            <h2 className="text-4xl font-bold mb-6">Revivez les grands moments</h2>
            <p className="text-slate-300 mb-8 text-lg">
              Analyses de parties, interviews de nos champions et résumés des tournois.
              Plongez au cœur de l'action échiquéenne.
            </p>
            <div className="flex gap-4">
              <Button className="bg-white text-primary hover:bg-slate-100 px-6 py-4 rounded-lg font-bold flex items-center gap-2">
                <PlayCircle className="w-5 h-5" />
                Voir la vidéo
              </Button>
              <Button variant="ghost" className="text-white hover:bg-white/10 px-6 py-4 rounded-lg">
                Accéder aux parties (PGN)
              </Button>
            </div>
          </div>

          {/* Fake Video Player UI */}
          <div className="md:w-1/2 w-full">
            <div className="aspect-video bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 flex items-center justify-center relative group cursor-pointer overflow-hidden">
              {/* Placeholder Thumbnail content */}
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 to-slate-800"></div>
              <div className="w-20 h-20 bg-accent/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform relative z-10 pl-1">
                <PlayCircle className="w-10 h-10 text-white" />
              </div>
              <div className="absolute bottom-4 left-4 z-10">
                <div className="text-sm font-bold">Résumé Open International 2025</div>
                <div className="text-xs text-slate-400">Durée : 12:30</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-white text-2xl font-bold mb-6">AC Echecs Calanques</h3>
              <p className="max-w-xs mb-6">
                Le club d'échecs de référence au cœur du Parc National.
                Apprendre, jouer, progresser.
              </p>
              <div className="flex gap-4">
                {/* Social Icons Placeholders */}
                <div className="w-10 h-10 rounded-full bg-slate-800 hover:bg-primary transition-colors cursor-pointer"></div>
                <div className="w-10 h-10 rounded-full bg-slate-800 hover:bg-primary transition-colors cursor-pointer"></div>
                <div className="w-10 h-10 rounded-full bg-slate-800 hover:bg-primary transition-colors cursor-pointer"></div>
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Liens Rapides</h4>
              <ul className="space-y-3">
                <li><a href="#" className="hover:text-white transition-colors">Le Club</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Adhésions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Planning</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tournois</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Contact</h4>
              <ul className="space-y-3">
                <li>Maison des Associations</li>
                <li>13260 Cassis</li>
                <li>contact@ac-echecs.fr</li>
                <li>06 12 34 56 78</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p>© 2026 AC Echecs Calanques. Site réalisé avec passion.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
