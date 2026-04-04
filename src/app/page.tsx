"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Trophy, GraduationCap, Newspaper, Crown, Info, Coffee, Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SocialHub } from "@/components/social/SocialHub";
import { clubSponsors } from "@/lib/sponsors";
import { cn } from "@/lib/utils";
import { type FfeRecentResult, type FfeSelectedTeam, type FfeTeamsApiResponse } from "@/lib/ffe-teams";

type HomeFfeResult = {
  id: string;
  teamTitle: string;
  competition: string;
  roundLabel: string;
  opponent: string;
  venue: "Domicile" | "Exterieur";
  date: string | null;
  location: string | null;
  outcome: FfeRecentResult["outcome"];
  teamScore: string;
  opponentScore: string;
  timestamp: number | null;
  roundNumber: number | null;
};

function parseFfeDateToTimestamp(value: string | null): number | null {
  if (!value) return null;
  const match = value.match(/(\d{2})\/(\d{2})\/(\d{2,4})(?:\s+(\d{1,2})[:h](\d{2}))?/);
  if (!match) return null;

  const day = Number.parseInt(match[1], 10);
  const month = Number.parseInt(match[2], 10);
  const yearRaw = Number.parseInt(match[3], 10);
  const hours = match[4] ? Number.parseInt(match[4], 10) : 0;
  const minutes = match[5] ? Number.parseInt(match[5], 10) : 0;
  const year = yearRaw < 100 ? 2000 + yearRaw : yearRaw;
  const parsed = new Date(year, month - 1, day, hours, minutes, 0, 0).getTime();
  return Number.isNaN(parsed) ? null : parsed;
}

function buildHomeFfeResults(teams: FfeSelectedTeam[]): HomeFfeResult[] {
  const flattened = teams.flatMap((team) =>
    team.recentResults.map((result, index) => ({
      id: `${team.targetId}-${result.roundNumber ?? "x"}-${result.opponent}-${result.date ?? "nd"}-${index}`,
      teamTitle: `${team.targetCategory} · ${team.targetLabel}`,
      competition: team.competition || team.division || "Interclubs FFE",
      roundLabel: result.roundLabel,
      opponent: result.opponent,
      venue: result.venue,
      date: result.date,
      location: result.location,
      outcome: result.outcome,
      teamScore: result.teamScore,
      opponentScore: result.opponentScore,
      timestamp: parseFfeDateToTimestamp(result.date),
      roundNumber: result.roundNumber,
    })),
  );

  flattened.sort((a, b) => {
    const aDate = a.timestamp;
    const bDate = b.timestamp;

    if (aDate !== null && bDate !== null && aDate !== bDate) {
      return bDate - aDate;
    }
    if (aDate !== null) return -1;
    if (bDate !== null) return 1;
    if (a.roundNumber !== null && b.roundNumber !== null) {
      return b.roundNumber - a.roundNumber;
    }
    if (a.roundNumber !== null) return -1;
    if (b.roundNumber !== null) return 1;
    return 0;
  });

  return flattened;
}

function pickNextResultIndex(results: HomeFfeResult[], previousIndex: number): number {
  if (results.length <= 1) return 0;

  const latestPoolSize = Math.min(Math.max(3, Math.ceil(results.length * 0.65)), results.length);
  const useOlderPool = results.length > latestPoolSize && Math.random() < 0.2;
  const start = useOlderPool ? latestPoolSize : 0;
  const end = useOlderPool ? results.length : latestPoolSize;

  let next = previousIndex;
  let attempts = 0;
  while (attempts < 10 && next === previousIndex) {
    next = start + Math.floor(Math.random() * (end - start));
    attempts += 1;
  }

  if (next === previousIndex) {
    return (previousIndex + 1) % results.length;
  }

  return next;
}

function outcomeBadgeClassname(outcome: FfeRecentResult["outcome"]): string {
  if (outcome === "Victoire") return "bg-green-100 text-green-700";
  if (outcome === "Défaite") return "bg-red-100 text-red-700";
  if (outcome === "Nul") return "bg-amber-100 text-amber-700";
  return "bg-slate-200 text-slate-700";
}

export default function Home() {
  const [ffeResults, setFfeResults] = useState<HomeFfeResult[]>([]);
  const [ffeResultsLoading, setFfeResultsLoading] = useState(true);
  const [ffeResultsError, setFfeResultsError] = useState<string | null>(null);
  const [activeFfeResultIndex, setActiveFfeResultIndex] = useState(0);

  useEffect(() => {
    const abortController = new AbortController();

    const loadFfeResults = async () => {
      try {
        setFfeResultsLoading(true);
        setFfeResultsError(null);

        const response = await fetch("/api/ffe/teams", {
          cache: "no-store",
          signal: abortController.signal,
        });

        const payload = (await response.json()) as unknown;
        if (!response.ok) {
          const message =
            typeof payload === "object" &&
            payload !== null &&
            "error" in payload &&
            typeof (payload as { error?: unknown }).error === "string"
              ? (payload as { error: string }).error
              : `Erreur API (${response.status})`;
          throw new Error(message);
        }

        const apiPayload = payload as FfeTeamsApiResponse;
        const nextResults = buildHomeFfeResults(apiPayload.teams);
        setFfeResults(nextResults);
        setActiveFfeResultIndex(nextResults.length > 0 ? pickNextResultIndex(nextResults, -1) : 0);
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") return;
        const message = error instanceof Error ? error.message : "Erreur inconnue";
        setFfeResultsError(message);
      } finally {
        setFfeResultsLoading(false);
      }
    };

    void loadFfeResults();
    return () => abortController.abort();
  }, []);

  useEffect(() => {
    if (ffeResults.length <= 1) return;

    const intervalId = window.setInterval(() => {
      setActiveFfeResultIndex((current) => pickNextResultIndex(ffeResults, current));
    }, 8000);

    return () => window.clearInterval(intervalId);
  }, [ffeResults]);

  const activeFfeResult = ffeResults[activeFfeResultIndex] ?? null;
  const latestFfeResultsPreview = ffeResults.slice(0, 3);

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
            <Button asChild className="bg-accent hover:bg-accent/90 text-white px-8 py-7 text-lg rounded-xl shadow-xl shadow-black/20 transition-all hover:scale-105 font-bold border-2 border-transparent">
              <Link href="/inscription">Rejoindre le Club</Link>
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
              <div className="space-y-4 flex-1 overflow-y-auto">
                {ffeResultsLoading ? (
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-slate-600 flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Chargement des résultats FFE...
                  </div>
                ) : null}

                {!ffeResultsLoading && activeFfeResult ? (
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
                          {activeFfeResult.teamTitle}
                        </p>
                        <p className="font-bold text-slate-800 mt-1">{activeFfeResult.competition}</p>
                        <p className="text-xs text-slate-500 mt-1">{activeFfeResult.roundLabel}</p>
                      </div>
                      <span
                        className={cn(
                          "inline-flex rounded-full px-2.5 py-1 text-xs font-bold",
                          outcomeBadgeClassname(activeFfeResult.outcome),
                        )}
                      >
                        {activeFfeResult.outcome}
                      </span>
                    </div>

                    <p className="mt-4 text-sm font-semibold text-slate-700">
                      {activeFfeResult.venue === "Exterieur" ? "à" : "vs"} {activeFfeResult.opponent}
                    </p>
                    <p className="text-2xl font-black text-slate-900 mt-1">
                      {activeFfeResult.teamScore} - {activeFfeResult.opponentScore}
                    </p>
                    <p className="text-xs text-slate-500 mt-2">
                      {activeFfeResult.date || "Date non précisée"}
                      {activeFfeResult.location ? ` · ${activeFfeResult.location}` : ""}
                    </p>
                  </div>
                ) : null}

                {!ffeResultsLoading && !activeFfeResult ? (
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
                    Aucun résultat d'équipe publié pour le moment.
                  </div>
                ) : null}

                {!ffeResultsLoading && latestFfeResultsPreview.length > 0 ? (
                  <div className="rounded-xl border border-slate-200 bg-white p-3">
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Résultats récents</p>
                    <div className="mt-2 space-y-2">
                      {latestFfeResultsPreview.map((result, index) => (
                        <div
                          key={result.id}
                          className={cn(
                            "rounded-lg border border-slate-100 px-3 py-2",
                            index === activeFfeResultIndex ? "bg-blue-50 border-blue-200" : "bg-slate-50",
                          )}
                        >
                          <p className="text-sm font-semibold text-slate-700">{result.teamTitle}</p>
                          <p className="text-xs text-slate-500">
                            {result.venue === "Exterieur" ? "à" : "vs"} {result.opponent} · {result.teamScore} - {result.opponentScore}
                          </p>
                        </div>
                      ))}
                    </div>
                    {ffeResults.length > 1 ? (
                      <p className="text-xs text-slate-400 mt-2">Affichage aléatoire, priorité aux résultats les plus récents.</p>
                    ) : null}
                  </div>
                ) : null}

                {ffeResultsError ? (
                  <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg p-2">
                    Résultats FFE temporairement indisponibles: {ffeResultsError}
                  </p>
                ) : null}
              </div>

              <Button asChild variant="outline" className="w-full mt-6">
                <Link href="/ffe">Voir tous les classements</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Rolling Banner */}
      <section className="py-16 bg-white border-y border-slate-100 overflow-hidden">
        <div className="container mx-auto px-4 text-center mb-10">
          <h2 className="text-2xl font-bold text-slate-800 uppercase tracking-widest">Ils nous soutiennent</h2>
          <p className="mt-3 text-slate-500">Nouveau sponsor 2026: Cultura Aubagne</p>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

          <div className="flex gap-6 items-center animate-sponsors whitespace-nowrap w-max px-3">
            {[...Array(2)].map((_, groupIndex) => (
              <div key={groupIndex} className="flex gap-6 items-center">
                {clubSponsors.map((sponsor) => (
                  <Link
                    key={`${groupIndex}-${sponsor.id}`}
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "group relative flex h-32 w-[240px] flex-col justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
                      sponsor.cardClassName
                    )}
                  >
                    {sponsor.isNew ? (
                      <span className="absolute -top-2 right-3 rounded-full bg-[#00338d] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                        Nouveau
                      </span>
                    ) : null}

                    <div className="relative flex h-14 w-full items-center justify-center">
                      <Image
                        src={sponsor.logoSrc}
                        alt={`Logo ${sponsor.name}`}
                        width={170}
                        height={70}
                        className={cn("h-auto max-h-[56px] w-auto object-contain", sponsor.logoClassName)}
                      />
                    </div>

                    <div className="space-y-0.5 text-center leading-tight">
                      <p className={cn("text-sm font-bold text-slate-800", sponsor.textClassName)}>{sponsor.name}</p>
                      <p className={cn("text-xs text-slate-500", sponsor.textClassName ? "text-slate-300" : "")}>
                        {sponsor.tagline}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes sponsors-scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-sponsors {
            animation: sponsors-scroll 42s linear infinite;
          }
          .animate-sponsors:hover {
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
