"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Users, ExternalLink, Trophy } from "lucide-react";

export default function FFEPage() {
    const [activeTab, setActiveTab] = useState<'club' | 'players' | 'teams'>('club');

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
                            href={
                                activeTab === 'club' ? "http://www.echecs.asso.fr/FicheClub.aspx?Ref=2705" :
                                    activeTab === 'players' ? "http://www.echecs.asso.fr/ListeJoueurs.aspx?Action=JOUEURCLUBREF&JrTri=Elo&ClubRef=2705" :
                                        "https://www.echecs.asso.fr/ListeEquipes.aspx?ClubRef=2705"
                            }
                            target="_blank"
                            className="text-xs flex items-center gap-1 text-blue-600 hover:underline font-bold"
                        >
                            Ouvrir dans une nouvelle fenêtre <ExternalLink className="w-3 h-3" />
                        </a>
                    </div>

                    {/* IFRAME Container */}
                    <div className="w-full h-full bg-slate-50">
                        {activeTab === 'club' && (
                            <iframe
                                src="https://www.echecs.asso.fr/FicheClub.aspx?Ref=2705"
                                className="w-full h-full border-none"
                                title="Fiche Club FFE"
                            />
                        )}

                        {activeTab === 'players' && (
                            <iframe
                                src="https://www.echecs.asso.fr/ListeJoueurs.aspx?Action=JOUEURCLUBREF&JrTri=Elo&ClubRef=2705"
                                className="w-full h-full border-none"
                                title="Liste Joueurs FFE"
                            />
                        )}

                        {activeTab === 'teams' && (
                            <iframe
                                src="https://www.echecs.asso.fr/ListeEquipes.aspx?ClubRef=2705"
                                className="w-full h-full border-none"
                                title="Liste Équipes FFE"
                            />
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
