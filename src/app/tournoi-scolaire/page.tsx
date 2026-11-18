import { Navbar } from "@/components/layout/Navbar";
import {
  Trophy,
  Medal,
  Sparkles,
  CalendarDays,
  Clock,
  Users,
  CheckCircle2,
  Smile,
  Gift,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Flag,
  Swords,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tournoi Scolaire d'Échecs — Canton de La Ciotat | Académie d'échecs des calanques",
  description:
    "Tournoi Scolaire d'Échecs le samedi 5 décembre 2026 au Centre Culturel de Cassis (pointage jusqu'à 9h30, remise des prix vers 12h). Inscription gratuite, licence B offerte (3 €), 5 parties individuelles, médailles pour tous et qualification pour la finale à Aubagne le 13 janvier.",
};

const VENUE_ADDRESS = "20 avenue du Docteur Emmanuel Agostini, 13260 Cassis";
const REGISTRATION_URL = "https://sharly-chess.com/fr/events/scolaire-canton-la-ciotat";

export default function TournoiScolairePage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0F4C81] via-[#1a6bb5] to-[#0a3560] pt-16 pb-24 md:pt-24 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-orange-400 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-blue-300 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/40 text-orange-300 text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            Tournoi Découverte · Inscription Gratuite
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 drop-shadow-lg leading-tight">
            Tournoi Scolaire d&apos;Échecs<br />
            <span className="text-orange-400">Canton de La Ciotat</span>
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-orange-200 mb-4">
            Viens jouer pour ton école !
          </p>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Une matinée pour jouer, un défi pour ton école ! Un tournoi découverte en 5 parties individuelles, parfait pour débuter dans la bonne ambiance, sans pression, et tenter de qualifier son école pour la finale départementale à Aubagne.
          </p>
          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-xl transition-all hover:scale-105"
          >
            S&apos;inscrire en ligne (Gratuit)
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
        <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-[0] z-10">
          <svg
            className="relative block w-[calc(100%+1.3px)] h-[60px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-slate-50"
            />
          </svg>
        </div>
      </section>

      {/* Infos Clés (Overlap bar) */}
      <section className="container mx-auto px-4 -mt-10 mb-14 relative z-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl p-5 shadow-lg border border-slate-100 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
              <CalendarDays className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Date</p>
              <p className="font-extrabold text-slate-800 text-lg">Samedi 5 déc. 2026</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-lg border border-slate-100 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#0F4C81] flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Horaires</p>
              <p className="font-extrabold text-slate-800 text-base leading-tight">Pointage jusqu&apos;à 9h30</p>
              <p className="text-xs text-slate-500 font-medium mt-0.5">Remise des prix vers 12h</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-lg border border-slate-100 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Lieu</p>
              <p className="font-extrabold text-slate-800 text-base leading-tight">Centre Culturel</p>
              <p className="text-xs text-slate-500 font-medium mt-0.5">Cassis (13260)</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-lg border border-slate-100 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
              <Gift className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Tarif</p>
              <p className="font-extrabold text-emerald-700 text-lg leading-tight">Gratuit</p>
              <p className="text-xs text-emerald-600 font-semibold mt-0.5">Licence B (3 €) offerte</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tournoi découverte & Licence B offerte */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-orange-200 flex flex-col justify-between">
            <div>
              <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
                <Smile className="w-4 h-4" />
                Esprit &amp; Format du tournoi
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 mb-4">
                5 parties individuelles pour découvrir et s&apos;amuser !
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Chaque enfant <strong>s&apos;inscrit individuellement</strong> et joue <strong>5 parties</strong> contre des élèves d&apos;autres écoles du secteur.
              </p>
              <p className="text-slate-600 leading-relaxed">
                C&apos;est un <strong>tournoi découverte parfait pour débuter</strong> : aucune grosse pression, uniquement le plaisir de jouer dans une ambiance chaleureuse, bienveillante et festive !
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 text-sm font-bold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-xl">
                <Medal className="w-4 h-4" />
                Une médaille pour chaque participant
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm font-bold text-orange-700 bg-orange-50 border border-orange-200 px-3 py-1.5 rounded-xl">
                <Trophy className="w-4 h-4" />
                De nombreuses coupes à gagner
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 shadow-xl text-white flex flex-col justify-between border border-orange-400">
            <div>
              <span className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4 border border-white/30">
                <Gift className="w-4 h-4" />
                Participation Gratuite
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
                Inscription gratuite &amp; Licence B offerte !
              </h2>
              <p className="text-orange-50 leading-relaxed mb-4">
                Pour que chaque élève puisse tenter l&apos;aventure et défendre les couleurs de son école sans frein, la participation au tournoi est <strong>entièrement gratuite</strong>.
              </p>
              <div className="bg-black/15 rounded-2xl p-5 border border-white/15">
                <p className="font-bold text-lg text-white mb-1">
                  Exceptionnel : la licence B (valeur 3 €) est offerte par le club !
                </p>
                <p className="text-sm text-orange-50">
                  Offerte à tous les enfants participants qui ne possèdent pas encore de licence fédérale FFE.
                </p>
              </div>
            </div>
            <p className="text-xs text-orange-100 mt-6 font-medium flex items-center gap-2">
              <Swords className="w-4 h-4 shrink-0" />
              Tournoi officiel homologué FFE · Canton de La Ciotat
            </p>
          </div>
        </div>
      </section>

      {/* Affiches Officielles */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-slate-800">Les affiches officielles</h2>
            <p className="text-slate-600 mt-2">
              Retrouvez toutes les informations pratiques à partager dans votre école (cliquez pour agrandir).
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <a
              href="/images/scolaire%201.png"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white hover:shadow-2xl transition-all"
            >
              <Image
                src="/images/scolaire 1.png"
                alt="Affiche Tournoi Scolaire d'Échecs - Samedi 5 décembre 2026 au Centre Culturel de Cassis"
                width={800}
                height={1131}
                className="w-full h-auto object-contain group-hover:scale-[1.01] transition-transform duration-300"
                priority
              />
            </a>
            <a
              href="/images/scolaire%202.png"
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white hover:shadow-2xl transition-all"
            >
              <Image
                src="/images/scolaire 2.png"
                alt="Informations Tournoi Scolaire d'Échecs - 5 parties individuelles, récompenses et rendez-vous"
                width={800}
                height={1131}
                className="w-full h-auto object-contain group-hover:scale-[1.01] transition-transform duration-300"
                priority
              />
            </a>
          </div>
        </div>
      </section>

      {/* Qualification & Règlement */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
              Tes résultats comptent pour ton école !
            </h2>
            <p className="text-slate-600 mt-3 text-lg">
              Ce championnat scolaire zonal est qualificatif pour la phase finale départementale qui réunira les meilleures écoles des Bouches-du-Rhône.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Étape 1 : Tournoi Zonal du 5 décembre */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200 flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-orange-500 text-white font-black flex items-center justify-center shrink-0">
                  1
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-orange-600">Étape zonale · Samedi 5 décembre</p>
                  <h3 className="text-xl font-extrabold text-slate-800">Qualification des écoles</h3>
                </div>
              </div>

              <ul className="space-y-4 text-slate-700 flex-1">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Minimum 8 joueurs par école :</strong> pour pouvoir être classée et qualifiée, une école doit être représentée par <strong>au moins 8 joueurs</strong> au total.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Mixité obligatoire :</strong> l&apos;école doit compter <strong>au moins 2 filles et au moins 2 garçons</strong> parmi ses représentants.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Plus de 8 joueurs inscrits ?</strong> Tous les enfants peuvent jouer ! Si une école aligne plus de 8 élèves, <strong>seuls les 8 meilleurs résultats seront retenus</strong> (en respectant la mixité).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Trophy className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <span>
                    <strong>3 écoles qualifiées :</strong> à l&apos;issue du tournoi, les <strong>3 meilleures écoles</strong> se qualifient pour la phase finale départementale à Aubagne !
                  </span>
                </li>
              </ul>
            </div>

            {/* Étape 2 : Phase Finale à Aubagne le 13 janvier */}
            <div className="bg-gradient-to-br from-[#0F4C81] to-[#1a6bb5] rounded-3xl p-8 shadow-xl text-white flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-orange-500 text-white font-black flex items-center justify-center shrink-0">
                  2
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-orange-300">Phase Finale Départementale</p>
                  <h3 className="text-xl font-extrabold text-white">Finale à Aubagne en janvier</h3>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                <div className="bg-white/10 border border-white/15 rounded-xl p-4">
                  <p className="text-xs uppercase tracking-wider text-blue-200 font-bold mb-1">Date</p>
                  <p className="font-extrabold text-white flex items-center gap-2">
                    <CalendarDays className="w-4 h-4 text-orange-400 shrink-0" />
                    Mercredi 13 janvier
                  </p>
                </div>
                <div className="bg-white/10 border border-white/15 rounded-xl p-4">
                  <p className="text-xs uppercase tracking-wider text-blue-200 font-bold mb-1">Lieu</p>
                  <p className="font-extrabold text-white flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-orange-400 shrink-0" />
                    Aubagne
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-blue-50 flex-1">
                <p className="leading-relaxed">
                  Cette grande journée départementale réunira les <strong>meilleures écoles des Bouches-du-Rhône</strong> qualifiées lors des phases zonales.
                </p>
                <div className="bg-black/15 border border-white/15 rounded-2xl p-5 space-y-2">
                  <p className="font-bold text-white flex items-center gap-2">
                    <Users className="w-5 h-5 text-orange-400 shrink-0" />
                    Composition des équipes qualifiées :
                  </p>
                  <p className="text-sm text-blue-100 leading-relaxed">
                    Chaque école qualifiée devra se présenter au championnat à Aubagne avec une équipe de <strong>minimum 8 joueurs et maximum 10 joueurs</strong>, incluant obligatoirement de la mixité (<strong>au moins 2 filles et au moins 2 garçons</strong>).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Le Rendez-vous & Inscriptions */}
      <section className="container mx-auto px-4 pb-20">
        <div className="bg-white rounded-3xl p-8 md:p-10 max-w-6xl mx-auto border border-orange-200 shadow-xl grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 bg-blue-50/70 border border-blue-100 rounded-2xl p-6 space-y-4">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0F4C81] bg-blue-100 px-3 py-1 rounded-full">
              <MapPin className="w-3.5 h-3.5" />
              Le Rendez-vous
            </span>
            <div>
              <h3 className="text-xl font-extrabold text-slate-800">Samedi 5 décembre 2026</h3>
              <p className="text-slate-700 font-semibold mt-1">Centre Culturel de Cassis</p>
              <p className="text-sm text-slate-600">{VENUE_ADDRESS}</p>
            </div>
            <div className="text-sm text-slate-700 space-y-1 pt-2 border-t border-blue-200/70">
              <p>
                <strong>Pointage :</strong> jusqu&apos;à 9h30
              </p>
              <p>
                <strong>Remise des prix :</strong> prévue vers 12h
              </p>
            </div>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(VENUE_ADDRESS)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0F4C81] hover:underline"
            >
              Voir l&apos;itinéraire sur Google Maps
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="lg:col-span-7 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                <Flag className="w-3.5 h-3.5" />
                Inscriptions &amp; Renseignements
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800">
                Inscrire votre enfant ou votre école
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Inscrivez votre enfant directement et gratuitement en ligne via Sharly-Chess, ou contactez-nous pour tout renseignement sur la constitution de l&apos;équipe de votre école.
              </p>
              <div className="pt-2 space-y-1.5 text-sm text-slate-700 font-medium">
                <p className="font-bold text-slate-900">Quentin Massardo</p>
                <a href="tel:+33637602253" className="flex items-center gap-2 hover:text-[#0F4C81] transition-colors">
                  <Phone className="w-4 h-4 text-orange-500" />
                  06 37 60 22 53
                </a>
                <a
                  href="mailto:communication@echecs-calanques.fr"
                  className="flex items-center gap-2 hover:text-[#0F4C81] transition-colors"
                >
                  <Mail className="w-4 h-4 text-orange-500" />
                  communication@echecs-calanques.fr
                </a>
              </div>
            </div>

            <div className="shrink-0 flex flex-col gap-3">
              <a
                href={REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all hover:scale-105"
              >
                S&apos;inscrire en ligne
                <ExternalLink className="w-4 h-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#0F4C81] hover:bg-[#0a3560] text-white font-bold px-8 py-3.5 rounded-xl shadow-md transition-all hover:scale-105"
              >
                Nous contacter
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 text-slate-400 py-8 text-center text-sm">
        <p>
          © 2026 Académie d&apos;échecs des calanques ·{" "}
          <a href="mailto:communication@echecs-calanques.fr" className="hover:text-white transition-colors">
            communication@echecs-calanques.fr
          </a>
        </p>
      </footer>
    </div>
  );
}
