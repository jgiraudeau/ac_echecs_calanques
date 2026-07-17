import { Navbar } from "@/components/layout/Navbar";
import { Trophy, MapPin, Clock, Euro, Phone, Mail, Globe, Users, Zap, Star, CalendarDays, ChevronRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blitz & Rapide des Calanques | Académie Échecs Calanques",
  description:
    "Participez au Circuit Blitz et aux Rapides des Calanques. Tournois ouverts à tous niveaux, adultes et jeunes, avec le Challenge Crevette pour les écoles partenaires.",
};

const blitzDates = [
  { date: "28 Septembre", lieu: "Cassis", salle: "Centre Culturel" },
  { date: "14 Novembre", lieu: "La Ciotat", salle: "CIQ Saint Jean" },
  { date: "13 Février", lieu: "Ceyreste", salle: "Salle Polyvalente" },
  { date: "29 Mai", lieu: "Cassis", salle: "Centre Culturel" },
];

const rapideDates = [
  { date: "17 Octobre", lieu: "Cassis", salle: "Centre Culturel" },
  { date: "19 Décembre", lieu: "Cassis", salle: "Centre Culturel" },
  { date: "27 Mars", lieu: "Cassis", salle: "Centre Culturel" },
  { date: "10 Avril", lieu: "Cassis", salle: "Centre Culturel" },
];

export default function BlitzRapidePage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#0F4C81] via-[#1a6bb5] to-[#0a3560] py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-orange-400 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-blue-300 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/40 text-orange-300 text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <Trophy className="w-4 h-4" />
            Tournois Officiels
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg">
            Blitz &amp; Rapide<br />
            <span className="text-orange-400">des Calanques</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Deux circuits de tournois ouverts à tous — affrontez des joueurs de votre région dans un cadre exceptionnel.
          </p>
        </div>
        <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-[0] z-10">
          <svg className="relative block w-[calc(100%+1.3px)] h-[60px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-slate-50" />
          </svg>
        </div>
      </section>

      {/* Challenge Crevette Banner */}
      <section className="container mx-auto px-4 -mt-4 mb-16 relative z-20">
        <div className="bg-gradient-to-r from-[#0F4C81] to-[#1a6bb5] rounded-2xl p-6 md:p-8 shadow-2xl text-white flex flex-col md:flex-row items-center gap-6">
          <div className="text-5xl md:text-6xl flex-shrink-0 select-none" aria-hidden>🦐</div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-extrabold text-orange-300 mb-2 uppercase tracking-wide">🏆 Challenge Crevette</h2>
            <p className="text-blue-100 leading-relaxed text-base md:text-lg">
              Les <strong className="text-white">3 premiers de chaque école partenaire</strong> sont récompensés lors de chaque tournoi !<br />
              <span className="text-sm text-blue-200 mt-1 block">
                Accessible à <strong className="text-white">tous les enfants scolarisés dans un établissement partenaire du club</strong> —
                c'est-à-dire les écoles où l'un de nos animateurs dispense des cours d'échecs.
              </span>
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-orange-300 font-bold flex-shrink-0">
            <Star className="w-5 h-5 fill-orange-300" />
            <Star className="w-5 h-5 fill-orange-300" />
            <Star className="w-5 h-5 fill-orange-300" />
          </div>
        </div>
      </section>

      {/* ── CIRCUIT BLITZ ── */}
      <section className="container mx-auto px-4 mb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Affiche */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-orange-400/30 group">
            <Image
              src="/images/affiche-blitz-calanques.png"
              alt="Affiche Circuit Blitz des Calanques"
              width={700}
              height={990}
              className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
              priority
            />
          </div>

          {/* Infos */}
          <div className="flex flex-col gap-6">
            <div>
              <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
                <Zap className="w-3.5 h-3.5" />
                Circuit Blitz
              </span>
              <h2 className="text-4xl font-extrabold text-slate-800 leading-tight mb-4">
                Circuit Blitz<br />
                <span className="text-orange-500">des Calanques</span>
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Le Circuit Blitz propose 4 rendez-vous intenses et dynamiques dans une ambiance festive et sportive.
              </p>
              <div className="mt-4 space-y-3 border-l-4 border-orange-500 pl-4">
                <p className="text-slate-700 text-sm">
                  ⚡ <strong>Pour les compétiteurs &amp; clubs :</strong> Tournoi homologué FFE (Elo Blitz). Une occasion parfaite de vous mesurer aux joueurs de la région, de soigner votre classement et d&apos;enchaîner des parties rapides de haut niveau.
                </p>
                <p className="text-slate-700 text-sm">
                  🐣 <strong>Pour les enfants &amp; grands débutants :</strong> Ne craignez pas la pendule ! C&apos;est le format idéal pour apprendre à jouer sous le signe du jeu et de la réactivité, le tout sans la pression des parties longues. Les enfants jouent dans une ambiance chaleureuse et bienveillante et peuvent remporter des prix pour leur école grâce au <strong>Challenge Crevette</strong>.
                </p>
              </div>
            </div>

            {/* Caractéristiques */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 text-orange-500 font-bold mb-1">
                  <Clock className="w-4 h-4" />
                  Cadence
                </div>
                <p className="text-slate-700 font-semibold">9 rondes · 3min + 2s/coup</p>
              </div>
              <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 text-orange-500 font-bold mb-1">
                  <Euro className="w-4 h-4" />
                  Inscription
                </div>
                <p className="text-slate-700 font-semibold">Adultes 6 € · Jeunes 3 €</p>
              </div>
              <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm col-span-2">
                <div className="flex items-center gap-2 text-orange-500 font-bold mb-1">
                  <CalendarDays className="w-4 h-4" />
                  Horaires
                </div>
                <p className="text-slate-700">Fin de pointage : <strong>9h30</strong> · Remise des prix : <strong>11h45</strong></p>
              </div>
            </div>

            {/* Dates */}
            <div>
              <h3 className="font-bold text-slate-700 uppercase text-sm tracking-wider mb-3 flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-orange-500" />
                Les 4 dates du circuit
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {blitzDates.map((d) => (
                  <div
                    key={d.date}
                    className="bg-white border border-orange-200 rounded-xl p-3 hover:border-orange-400 hover:shadow-md transition-all"
                  >
                    <p className="font-extrabold text-orange-500 text-sm">{d.date}</p>
                    <p className="font-semibold text-slate-800 text-sm">{d.lieu}</p>
                    <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3" />
                      {d.salle}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Inscription */}
            <div className="bg-slate-800 rounded-2xl p-5 text-white">
              <h3 className="font-bold text-orange-400 mb-3 flex items-center gap-2 uppercase text-sm tracking-wide">
                <Users className="w-4 h-4" />
                Inscriptions &amp; Renseignements
              </h3>
              <div className="space-y-2 text-sm mb-4">
                <p className="flex items-center gap-2 text-slate-300">
                  <Phone className="w-4 h-4 text-orange-400 flex-shrink-0" />
                  Quentin MASSARDO : 06 37 60 22 53 · 04 42 01 89 71
                </p>
                <p className="flex items-center gap-2 text-slate-300">
                  <Mail className="w-4 h-4 text-orange-400 flex-shrink-0" />
                  communication@echecs-calanques.fr
                </p>
              </div>
              <Button asChild className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-6 text-base rounded-xl shadow-lg transition-transform hover:scale-[1.02]">
                <a 
                  href="https://events.sharly-chess.com/fr/events/rapides-des-calanques" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  S&apos;inscrire en ligne (Blitz)
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Séparateur */}
      <div className="container mx-auto px-4 mb-24">
        <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
      </div>

      {/* ── RAPIDES DES CALANQUES ── */}
      <section className="container mx-auto px-4 mb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Infos (ordre inversé sur desktop) */}
          <div className="flex flex-col gap-6 lg:order-1 order-2">
            <div>
              <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3">
                <ChevronRight className="w-3.5 h-3.5" />
                Tournoi Rapide
              </span>
              <h2 className="text-4xl font-extrabold text-slate-800 leading-tight mb-4">
                Rapides<br />
                <span className="text-[#0F4C81]">des Calanques</span>
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Les Rapides des Calanques offrent une cadence plus longue (10 min + 2s), idéale pour poser sa stratégie et prendre son temps.
              </p>
              <div className="mt-4 space-y-3 border-l-4 border-[#0F4C81] pl-4">
                <p className="text-slate-700 text-sm">
                  🏆 <strong>Pour les joueurs de club :</strong> Un tournoi homologué FFE (Elo Rapide) relevé, composé de 9 rondes palpitantes. Un premier prix garanti de <strong>50 €</strong> pour récompenser la performance.
                </p>
                <p className="text-slate-700 text-sm">
                  🌟 <strong>Pour les scolaires et ultra-débutants :</strong> C&apos;est la formule parfaite pour commencer ! La cadence permet de bien réfléchir sans se presser, avec un encadrement rassurant et bienveillant adapté aux premières compétitions. Tout le monde a sa chance de briller et de s&apos;amuser.
                </p>
              </div>
            </div>

            {/* Caractéristiques */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 text-[#0F4C81] font-bold mb-1">
                  <Clock className="w-4 h-4" />
                  Cadence
                </div>
                <p className="text-slate-700 font-semibold">9 rondes · 10min + 2s/coup</p>
              </div>
              <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 text-[#0F4C81] font-bold mb-1">
                  <Euro className="w-4 h-4" />
                  Inscription
                </div>
                <p className="text-slate-700 font-semibold">Adultes 10 € · Jeunes 5 €</p>
              </div>
              <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 text-[#0F4C81] font-bold mb-1">
                  <CalendarDays className="w-4 h-4" />
                  Horaires
                </div>
                <p className="text-slate-700 text-sm">Pointage jusqu&apos;à <strong>9h30</strong><br />Départ Rapide : <strong>15h30</strong></p>
              </div>
              <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 text-[#0F4C81] font-bold mb-1">
                  <Trophy className="w-4 h-4" />
                  Prix &amp; Avantages
                </div>
                <p className="text-slate-700 text-sm">1er prix : <strong>50 €</strong><br />Buvette sur place</p>
              </div>
            </div>

            {/* Lieu fixe */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#0F4C81] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-slate-800">Centre Culturel de Cassis</p>
                <p className="text-slate-600 text-sm">20 avenue Emmanuel Agostini — 13260 Cassis</p>
              </div>
            </div>

            {/* Dates */}
            <div>
              <h3 className="font-bold text-slate-700 uppercase text-sm tracking-wider mb-3 flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-[#0F4C81]" />
                Les 4 dates du circuit
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {rapideDates.map((d) => (
                  <div
                    key={d.date}
                    className="bg-white border border-blue-200 rounded-xl p-3 hover:border-blue-400 hover:shadow-md transition-all"
                  >
                    <p className="font-extrabold text-[#0F4C81] text-sm">{d.date}</p>
                    <p className="font-semibold text-slate-800 text-sm">{d.lieu}</p>
                    <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3" />
                      {d.salle}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Inscription */}
            <div className="bg-[#0F4C81] rounded-2xl p-5 text-white">
              <h3 className="font-bold text-orange-400 mb-3 flex items-center gap-2 uppercase text-sm tracking-wide">
                <Users className="w-4 h-4" />
                Inscriptions &amp; Renseignements
              </h3>
              <div className="space-y-2 text-sm mb-4">
                <p className="flex items-center gap-2 text-blue-200">
                  <Phone className="w-4 h-4 text-orange-400 flex-shrink-0" />
                  Quentin MASSARDO : 06 37 60 22 53 · 04 42 01 89 71
                </p>
                <p className="flex items-center gap-2 text-blue-200">
                  <Mail className="w-4 h-4 text-orange-400 flex-shrink-0" />
                  communication@echecs-calanques.fr
                </p>
              </div>
              <Button asChild className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-6 text-base rounded-xl shadow-lg transition-transform hover:scale-[1.02]">
                <a 
                  href="https://events.sharly-chess.com/fr/events/rapides-des-calanques" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  S&apos;inscrire en ligne (Rapide)
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Affiche */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#0F4C81]/30 group lg:order-2 order-1">
            <Image
              src="/images/affiche-rapide-calanques.png"
              alt="Affiche Rapides des Calanques"
              width={700}
              height={990}
              className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* CTA Contact */}
      <section className="bg-white border-t border-slate-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Une question ?</h2>
          <p className="text-slate-600 mb-8 max-w-lg mx-auto">
            Contactez-nous pour toute information sur les tournois, les inscriptions ou le Challenge Crevette.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#0F4C81] hover:bg-[#0a3560] text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition-all"
          >
            <Mail className="w-5 h-5" />
            Nous contacter
          </Link>
        </div>
      </section>

      {/* Footer minimal */}
      <footer className="bg-slate-950 text-slate-400 py-8 text-center text-sm">
        <p>© 2026 Académie Échecs Calanques · <a href="mailto:communication@echecs-calanques.fr" className="hover:text-white transition-colors">communication@echecs-calanques.fr</a></p>
      </footer>
    </div>
  );
}
