"use client";

import { useEffect, useMemo, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Users, ExternalLink, Trophy, Loader2 } from "lucide-react";
import {
    FFE_TARGET_TEAMS,
    type FfeSelectedTeam,
    type FfeTargetTeamId,
    type FfeTeamsApiResponse,
} from "@/lib/ffe-teams";

type FfeTab = "club" | "players" | "teams";
type TeamFilter = "all" | FfeTargetTeamId;

const FFE_LINKS = {
    club: "https://www.echecs.asso.fr/FicheClub.aspx?Ref=2705",
    players: "https://www.echecs.asso.fr/ListeJoueurs.aspx?Action=JOUEURCLUBREF&JrTri=Elo&ClubRef=2705",
    teams: "https://www.echecs.asso.fr/ListeEquipes.aspx?ClubRef=2705",
} as const;

function formatUpdateDate(value: string | null): string {
    if (!value) return "";
    const parsedDate = new Date(value);
    if (Number.isNaN(parsedDate.getTime())) return value;
    return parsedDate.toLocaleString("fr-FR", {
        dateStyle: "short",
        timeStyle: "short",
    });
}

export default function FFEPage() {
    const [activeTab, setActiveTab] = useState<FfeTab>("club");
    const [teamFilter, setTeamFilter] = useState<TeamFilter>("all");
    const [teams, setTeams] = useState<FfeSelectedTeam[]>([]);
    const [missingTeams, setMissingTeams] = useState<string[]>([]);
    const [teamsLoading, setTeamsLoading] = useState(false);
    const [teamsError, setTeamsError] = useState<string | null>(null);
    const [teamsUpdatedAt, setTeamsUpdatedAt] = useState<string | null>(null);

    useEffect(() => {
        if (activeTab !== "teams") return;

        const abortController = new AbortController();

        const fetchTeams = async () => {
            try {
                setTeamsLoading(true);
                setTeamsError(null);

                const response = await fetch("/api/ffe/teams", {
                    cache: "no-store",
                    signal: abortController.signal,
                });

                const payload = (await response.json()) as unknown;

                if (!response.ok) {
                    const errorMessage =
                        typeof payload === "object" &&
                            payload !== null &&
                            "error" in payload &&
                            typeof (payload as { error?: unknown }).error === "string"
                            ? (payload as { error: string }).error
                            : `Erreur API (${response.status})`;
                    throw new Error(errorMessage);
                }

                const successPayload = payload as FfeTeamsApiResponse;
                setTeams(successPayload.teams);
                setMissingTeams(successPayload.missingTeams);
                setTeamsUpdatedAt(successPayload.updatedAt);
            } catch (error) {
                if (error instanceof Error && error.name === "AbortError") {
                    return;
                }
                const message = error instanceof Error ? error.message : "Erreur inconnue";
                setTeamsError(message);
            } finally {
                setTeamsLoading(false);
            }
        };

        void fetchTeams();

        return () => abortController.abort();
    }, [activeTab]);

    const visibleTeams = useMemo(() => {
        if (teamFilter === "all") return teams;
        return teams.filter((team) => team.targetId === teamFilter);
    }, [teamFilter, teams]);

    const activeExternalLink = FFE_LINKS[activeTab];

    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <Navbar />

            <div className="container mx-auto px-4 py-12">
                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-extrabold text-slate-800 mb-4">Données Officielles FFE</h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
                        Retrouvez en temps réel les informations administratives, les classements Elo de nos joueurs et les résultats de nos équipes via la base fédérale.
                    </p>

                    <div className="inline-flex flex-wrap justify-center gap-2 bg-white p-1 rounded-xl shadow-sm border border-slate-200">
                        <button
                            onClick={() => setActiveTab('club')}
                            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${activeTab === 'club' ? 'bg-primary text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
                        >
                            <Trophy className="w-4 h-4" />
                            Fiche Club FFE
                        </button>
                        <button
                            onClick={() => setActiveTab('players')}
                            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${activeTab === 'players' ? 'bg-accent text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
                        >
                            <Users className="w-4 h-4" />
                            Joueurs & Elo
                        </button>
                        <button
                            onClick={() => setActiveTab('teams')}
                            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${activeTab === 'teams' ? 'bg-green-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
                        >
                            <Trophy className="w-4 h-4" />
                            Équipes
                        </button>
                    </div>
                </div>

                {/* Content Wrapper */}
                <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden h-[800px] relative">

                    {/* Header barre d'outils (pour ouvrir en grand si besoin) */}
                    <div className="bg-slate-100 p-3 flex justify-between items-center border-b border-slate-200">
                        <span className="text-xs font-bold text-slate-500 uppercase flex items-center gap-2">
                            <span className={`w-2 h-2 rounded-full ${activeTab === 'club' ? 'bg-primary' : activeTab === 'players' ? 'bg-accent' : 'bg-green-600'}`}></span>
                            Source : echecs.asso.fr (Ref: 2705)
                        </span>
                        <a
                            href={activeExternalLink}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xs flex items-center gap-1 text-blue-600 hover:underline font-bold"
                        >
                            Ouvrir dans une nouvelle fenêtre <ExternalLink className="w-3 h-3" />
                        </a>
                    </div>

                    {/* IFRAME Container */}
                    <div className="w-full h-full bg-slate-50">
                        {activeTab === 'club' && (
                            <iframe
                                src={FFE_LINKS.club}
                                className="w-full h-full border-none"
                                title="Fiche Club FFE"
                            />
                        )}

                        {activeTab === 'players' && (
                            <iframe
                                src={FFE_LINKS.players}
                                className="w-full h-full border-none"
                                title="Liste Joueurs FFE"
                            />
                        )}

                        {activeTab === 'teams' && (
                            <div className="w-full h-full bg-slate-50 overflow-auto p-6">
                                <div className="rounded-xl border border-slate-200 bg-white p-5 mb-6">
                                    <h2 className="text-lg font-extrabold text-slate-800">Équipes sélectionnées</h2>
                                    <p className="text-sm text-slate-600 mt-1">
                                        Affichage limité aux équipes demandées (Interclub + Interclub Jeunes).
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-4">
                                        <button
                                            onClick={() => setTeamFilter("all")}
                                            className={`px-3 py-2 rounded-lg text-sm font-bold transition-colors ${teamFilter === "all"
                                                ? "bg-green-600 text-white"
                                                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                                }`}
                                        >
                                            Toutes les équipes
                                        </button>
                                        {FFE_TARGET_TEAMS.map((team) => (
                                            <button
                                                key={team.id}
                                                onClick={() => setTeamFilter(team.id)}
                                                className={`px-3 py-2 rounded-lg text-sm font-bold transition-colors ${teamFilter === team.id
                                                    ? "bg-green-600 text-white"
                                                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                                                    }`}
                                            >
                                                {team.category} · {team.label}
                                            </button>
                                        ))}
                                    </div>

                                    {teamsUpdatedAt && (
                                        <p className="text-xs text-slate-500 mt-3">
                                            Dernière mise à jour : {formatUpdateDate(teamsUpdatedAt)}
                                        </p>
                                    )}
                                </div>

                                {teamsLoading && (
                                    <div className="rounded-xl border border-slate-200 bg-white p-6 text-slate-600 flex items-center gap-2">
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        Chargement des équipes FFE...
                                    </div>
                                )}

                                {!teamsLoading && teamsError && (
                                    <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-red-700">
                                        Impossible de charger les données FFE: {teamsError}
                                    </div>
                                )}

                                {!teamsLoading && !teamsError && missingTeams.length > 0 && (
                                    <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-800 mb-4 text-sm">
                                        Équipes non trouvées actuellement sur FFE : {missingTeams.join(", ")}
                                    </div>
                                )}

                                {!teamsLoading && !teamsError && visibleTeams.length === 0 && (
                                    <div className="rounded-xl border border-slate-200 bg-white p-6 text-slate-600">
                                        Aucune équipe correspondante pour ce filtre.
                                    </div>
                                )}

                                {!teamsLoading && !teamsError && visibleTeams.length > 0 && (
                                    <div className="grid gap-4">
                                        {visibleTeams.map((team) => (
                                            <article
                                                key={`${team.targetId}-${team.teamId ?? team.name}`}
                                                className="rounded-xl border border-slate-200 bg-white p-5"
                                            >
                                                <div className="flex flex-wrap items-start justify-between gap-3">
                                                    <div>
                                                        <h3 className="text-xl font-extrabold text-slate-800">
                                                            {team.targetCategory} · {team.targetLabel}
                                                        </h3>
                                                        <p className="text-sm text-slate-500 mt-1">
                                                            Nom FFE: {team.name}
                                                        </p>
                                                        <p className="text-slate-600 mt-2">{team.competition}</p>
                                                    </div>
                                                    <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-bold text-green-700">
                                                        Place : {team.place || "-"}
                                                    </span>
                                                </div>

                                                <div className="grid gap-3 sm:grid-cols-2 mt-4">
                                                    <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                                                        <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Division</p>
                                                        <p className="text-sm text-slate-700 mt-1">{team.division || "-"}</p>
                                                    </div>
                                                    <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                                                        <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Groupe</p>
                                                        <p className="text-sm text-slate-700 mt-1">{team.group || "-"}</p>
                                                    </div>
                                                </div>

                                                <div className="flex flex-wrap gap-3 mt-4">
                                                    {team.teamUrl && (
                                                        <a
                                                            href={team.teamUrl}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className="inline-flex items-center gap-1 text-sm font-bold text-blue-600 hover:underline"
                                                        >
                                                            Fiche équipe <ExternalLink className="w-3 h-3" />
                                                        </a>
                                                    )}
                                                    {team.groupUrl && (
                                                        <a
                                                            href={team.groupUrl}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className="inline-flex items-center gap-1 text-sm font-bold text-blue-600 hover:underline"
                                                        >
                                                            Voir le groupe <ExternalLink className="w-3 h-3" />
                                                        </a>
                                                    )}
                                                </div>
                                            </article>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-6 text-center text-sm text-slate-400 italic">
                    Ces données sont hébergées par la Fédération Française des Echecs et mises à jour automatiquement.
                </div>

            </div>
        </div>
    );
}
