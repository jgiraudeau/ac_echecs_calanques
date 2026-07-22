import { Navbar } from "@/components/layout/Navbar";
import { Sparkles, CalendarDays, Users, GraduationCap, Compass, HelpCircle, Phone, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stages Vacances Échecs | Académie d'échecs des calanques",
  description:
    "Inscrivez vos enfants aux stages d'échecs de l'Académie durant chaque vacances scolaires. Groupes initiation et préparation au championnat.",
};

const trainers = [
  {
    name: "Quentin Massardo",
    role: "Entraîneur & Préparateur mental",
    desc: "Spécialiste de la préparation tactique et du renforcement de la confiance en soi pour aborder la compétition sereinement.",
  },
  {
    name: "Alexandre Merenciano",
    role: "Entraîneur du club",
    desc: "Formateur passionné, il accompagne les jeunes dans l'apprentissage des stratégies complexes et l'analyse de parties.",
  },
];

const holidayStages = [
  { name: "Toussaint", period: "Octobre / Novembre" },
  { name: "Noël", period: "Décembre" },
  { name: "Hiver", period: "Février" },
  { name: "Printemps", period: "Avril" },
  { name: "Été", period: "Juillet / Août", badge: "Sport & Échecs" },
];

export default function StagesPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0F4C81] via-[#1a6bb5] to-[#0a3560] py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-orange-400 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-blue-300 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/40 text-orange-300 text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            Jeunesse &amp; Progrès
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg">
            Stages Vacances<br />
            <span className="text-orange-400">Échecs</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            À chaque vacances scolaires, offrez à vos enfants une expérience enrichissante alliant apprentissage, perfectionnement et activités sportives.
          </p>
        </div>
        <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-[0] z-10">
          <svg className="relative block w-[calc(100%+1.3px)] h-[60px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-slate-50" />
          </svg>
        </div>
      </section>

      {/* Le concept des stages */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">Deux groupes de niveau adaptés</h2>
          <p className="text-slate-600 mt-4 text-lg">
            Pour permettre à chaque enfant de progresser à son rythme, nos stages accueillent les enfants selon leur niveau.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {/* Groupe Initiation */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200 hover:shadow-2xl transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 mb-6 font-bold text-xl">1</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Groupe Initiation</h3>
              <p className="text-slate-600 leading-relaxed">
                Destiné aux enfants débutants ou ayant de légères notions. L&apos;accent est mis sur la découverte des règles fondamentales, l&apos;éthique du jeu, les premiers schémas de mat et la résolution d&apos;exercices amusants de manière ludique et interactive.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-500">Idéal pour démarrer en douceur</span>
            </div>
          </div>

          {/* Groupe Préparation au Championnat */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200 hover:shadow-2xl transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 mb-6 font-bold text-xl">2</div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Préparation au Championnat</h3>
              <p className="text-slate-600 leading-relaxed">
                Dédié aux jeunes compétiteurs ou joueurs confirmés. Ce groupe aborde les théories d&apos;ouvertures, les finales complexes, la préparation mentale pour appréhender la compétition, et l&apos;analyse approfondie des parties jouées au cours du stage.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-500">Pour franchir un cap compétitif</span>
            </div>
          </div>
        </div>

        {/* Rythme annuel */}
        <div className="bg-white rounded-3xl p-8 max-w-5xl mx-auto border border-slate-200 shadow-lg mb-24">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <CalendarDays className="text-[#0F4C81] w-6 h-6" />
            Calendrier général des stages
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
            {holidayStages.map((stage) => (
              <div key={stage.name} className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-center hover:border-[#0F4C81] transition-all relative">
                {stage.badge && (
                  <span className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    {stage.badge}
                  </span>
                )}
                <p className="font-extrabold text-slate-800 mt-1">{stage.name}</p>
                <p className="text-xs text-slate-500 mt-1">{stage.period}</p>
              </div>
            ))}
          </div>
        </div>

        {/* L'équipe pédagogique */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-800">Un encadrement d&apos;experts</h3>
            <p className="text-slate-600 mt-2">Les cours sont dispensés par des entraîneurs qualifiés et diplômés du club.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {trainers.map((t) => (
              <div key={t.name} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md flex gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">{t.name}</h4>
                  <p className="text-[#0F4C81] text-xs font-semibold uppercase tracking-wider mb-2">{t.role}</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Focus été */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-white max-w-5xl mx-auto shadow-2xl relative overflow-hidden mb-24">
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <span className="inline-flex items-center gap-1.5 bg-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-6">
              <Compass className="w-3.5 h-3.5" />
              Spécial Été
            </span>
            <h3 className="text-3xl md:text-4xl font-extrabold mb-4">Stages d&apos;Été : Sport &amp; Échecs</h3>
            <p className="text-slate-300 text-lg max-w-3xl leading-relaxed mb-6">
              Pendant la période estivale, nous proposons des formules journées complètes ! Le matin est dédié à l&apos;apprentissage théorique et aux tournois internes d&apos;échecs. L&apos;après-midi, place aux activités sportives et de plein air au cœur de notre magnifique région :
            </p>
            <div className="grid sm:grid-cols-3 gap-4 text-center">
              <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
                <span className="text-3xl block mb-2">🛶</span>
                <p className="font-bold text-white">Kayak</p>
                <p className="text-xs text-slate-300 mt-1">Sorties encadrées</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
                <span className="text-3xl block mb-2">🎬</span>
                <p className="font-bold text-white">Cinéma</p>
                <p className="text-xs text-slate-300 mt-1">Séances collectives</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
                <span className="text-3xl block mb-2">🎪</span>
                <p className="font-bold text-white">Initiation Cirque</p>
                <p className="text-xs text-slate-300 mt-1">Agilité &amp; acrobatie</p>
              </div>
            </div>
          </div>
        </div>

        {/* Prochaines dates & inscriptions */}
        <div className="bg-white rounded-3xl p-8 md:p-10 max-w-5xl mx-auto border border-orange-200 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-orange-100 rounded-bl-full flex items-center justify-center pl-6 pb-6">
            <HelpCircle className="w-8 h-8 text-orange-500" />
          </div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Inscriptions et Prochaines Dates</h3>
            <p className="text-slate-600 max-w-2xl leading-relaxed mb-8">
              Les affiches, les dates détaillées et les formulaires d&apos;inscription en ligne pour les prochains stages de vacances scolaires seront mis en ligne très prochainement.
            </p>

            <div className="grid md:grid-cols-2 gap-6 bg-slate-50 border border-slate-200 rounded-2xl p-6">
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-3">Pré-inscriptions / Informations</p>
                <p className="font-bold text-slate-800 text-lg">Quentin Massardo</p>
                <div className="space-y-1.5 mt-3 text-sm text-slate-600">
                  <a href="tel:+33637602253" className="flex items-center gap-2 hover:text-[#0F4C81] transition-colors">
                    <Phone className="w-4 h-4 text-orange-500" />
                    06 37 60 22 53
                  </a>
                  <a href="mailto:communication@cassisechecs.fr" className="flex items-center gap-2 hover:text-[#0F4C81] transition-colors">
                    <Mail className="w-4 h-4 text-orange-500" />
                    communication@cassisechecs.fr
                  </a>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-slate-500 text-sm leading-relaxed mb-4">
                  Vous souhaitez être prévenu dès l&apos;ouverture des inscriptions ? N&apos;hésitez pas à nous envoyer un mail.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#0F4C81] hover:bg-[#0a3560] text-white font-bold px-6 py-3 rounded-xl transition-all"
                >
                  Formulaire de contact
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-400 py-8 text-center text-sm">
        <p>© 2026 Académie d&apos;échecs des calanques · <a href="mailto:communication@cassisechecs.fr" className="hover:text-white transition-colors">communication@cassisechecs.fr</a></p>
      </footer>
    </div>
  );
}
