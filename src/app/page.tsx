"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Trophy, GraduationCap, Newspaper, Crown, Info, Coffee } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SocialHub } from "@/components/social/SocialHub";

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
            Unir les esprits, conquérir les sommets !
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
          <Link href="/club" className="flex flex-col items-center justify-center p-4 hover:bg-blue-50 rounded-xl transition-colors group text-center">
            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Info className="w-5 h-5" />
            </div>
            <span className="font-bold text-slate-700">Infos du Club</span>
          </Link>
          <Link href="/activites" className="flex flex-col items-center justify-center p-4 hover:bg-orange-50 rounded-xl transition-colors group text-center">
            <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <GraduationCap className="w-5 h-5" />
            </div>
            <span className="font-bold text-slate-700">Stages</span>
          </Link>
          <Link href="/festival" className="flex flex-col items-center justify-center p-4 hover:bg-purple-50 rounded-xl transition-colors group text-center">
            <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Trophy className="w-5 h-5" />
            </div>
            <span className="font-bold text-slate-700">Festival</span>
          </Link>
          <Link href="/cafes-echecs" className="flex flex-col items-center justify-center p-4 hover:bg-green-50 rounded-xl transition-colors group text-center">
            <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Coffee className="w-5 h-5" />
            </div>
            <span className="font-bold text-slate-700">Cafés Échecs</span>
          </Link>
        </div>
      </section>

      {/* Actualités & Résultats (2 colonnes) */}
      <section className="py-10 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Colonne Actualités (Social Hub) */}
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-3 mb-8">
              <Newspaper className="text-primary w-8 h-8" />
              Actualités en direct
            </h2>
            <SocialHub />
          </div>

          {/* Colonne Résultats / Live */}
          <div className="lg:w-1/3">
            <h2 className="text-3xl font-bold text-slate-800 flex items-center gap-3 mb-8">
              <Trophy className="text-accent w-8 h-8" />
              Derniers Résultats
            </h2>
            <div className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-accent h-[500px] flex flex-col">
              <div className="space-y-6 flex-1 overflow-y-auto">
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

      {/* Sponsors Rolling Banner */}
      <section className="py-16 bg-white border-y border-slate-100 overflow-hidden">
        <div className="container mx-auto px-4 text-center mb-10">
          <h2 className="text-2xl font-bold text-slate-800 uppercase tracking-widest">Ils nous soutiennent</h2>
        </div>

        {/* Marquee Container */}
        <div className="relative w-full overflow-hidden">
          {/* Gradient masks for smooth fade effect at edges */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Rolling Track */}
          <div className="flex gap-16 items-center animate-scroll whitespace-nowrap w-max">
            {/* LOGOS REPEATED TWICE FOR SEAMLESS LOOP */}
            {[...Array(2)].map((_, groupIndex) => (
              <div key={groupIndex} className="flex gap-16 items-center">

                {/* Ville de Cassis */}
                <div className="flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                  <span className="text-3xl">🏰</span>
                  <span className="font-bold text-slate-800 text-xl">Ville de Cassis</span>
                </div>

                {/* Département */}
                <div className="flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                  <span className="text-xl font-bold bg-blue-600 text-white px-3 py-1 rounded">13</span>
                  <span className="font-bold text-blue-900 text-xl mt-1">Département</span>
                </div>

                {/* Région Sud */}
                <div className="flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                  <span className="text-3xl">☀️</span>
                  <span className="font-bold text-orange-500 text-xl">Région Sud</span>
                </div>

                {/* FFE */}
                <div className="flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                  <span className="text-3xl">♟️</span>
                  <span className="font-bold text-slate-800 text-xl">F.F.Echecs</span>
                </div>

                {/* ANS */}
                <div className="flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                  <span className="text-3xl">🇫🇷</span>
                  <span className="font-bold text-blue-800 text-xl">Agence du Sport</span>
                </div>

                {/* Private Sponsors Placeholders */}
                <div className="flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                  <span className="text-3xl">🏨</span>
                  <span className="font-bold text-slate-600 text-xl">Hôtel Les Roches</span>
                </div>

                <div className="flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                  <span className="text-3xl">🛒</span>
                  <span className="font-bold text-red-600 text-xl">Intermarché</span>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* CSS Animation Injection */}
        <style jsx>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-white text-2xl font-bold mb-6">Echecs Calanques</h3>
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
                <li>contact@echecs-calanques.fr</li>
                <li>06 12 34 56 78</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p>© 2026 Echecs Calanques. Site réalisé avec passion.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
