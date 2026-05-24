"use client";

import { Navbar } from "@/components/layout/Navbar";
import LocationsMap from "@/components/map/LocationsMap";
import { MapPin, School, Building2, ExternalLink, Clock } from "lucide-react";
import { LOCATION_ENTRIES } from "@/lib/locations";

const LOCATIONS_LIST = Object.entries(
    LOCATION_ENTRIES.reduce<Record<string, typeof LOCATION_ENTRIES>>((acc, location) => {
        const current = acc[location.city] ?? [];
        acc[location.city] = [...current, location];
        return acc;
    }, {}),
).map(([city, places]) => ({ city, places }));

export default function LieuxPage() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <Navbar />

            <div className="container mx-auto px-4 py-12">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-extrabold text-slate-800 mb-4">Nos Lieux d'Intervention</h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Retrouvez l'Académie Échecs Calanques près de chez vous.
                        Nous intervenons dans les écoles et proposons des créneaux clubs sur tout le territoire.
                    </p>
                </div>

                {/* Section Horaires Globaux */}
                <div className="bg-white rounded-2xl shadow-lg border border-slate-200 mb-12 overflow-hidden">
                    <div className="bg-primary px-6 py-4 border-b border-slate-200">
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <Clock className="w-5 h-5" />
                            Planning Hebdomadaire
                        </h2>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50 text-slate-600 border-b border-slate-200">
                                    <th className="p-4 font-bold">Jour</th>
                                    <th className="p-4 font-bold">Lieu(x)</th>
                                    <th className="p-4 font-bold">Horaires & Infos</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 text-slate-700">
                                <tr className="hover:bg-slate-50">
                                    <td className="p-4 font-semibold text-slate-900">Lundi</td>
                                    <td className="p-4">CIQ Saint Jean, La Ciotat</td>
                                    <td className="p-4 text-emerald-700 font-medium">16h30 à 18h30</td>
                                </tr>
                                <tr className="hover:bg-slate-50">
                                    <td className="p-4 font-semibold text-slate-900">Mardi</td>
                                    <td className="p-4">Sainte Trinité (Marseille) <br/><span className="text-sm text-slate-500">et</span> Ceyreste</td>
                                    <td className="p-4 text-emerald-700 font-medium">16h30 à 18h30</td>
                                </tr>
                                <tr className="hover:bg-slate-50">
                                    <td className="p-4 font-semibold text-slate-900">Mercredi</td>
                                    <td className="p-4">Cassis <br/><span className="text-sm text-slate-500">et</span> Ceyreste</td>
                                    <td className="p-4">
                                        <div className="text-emerald-700 font-medium">15h à 18h <span className="text-slate-500 text-sm font-normal">(Cassis)</span></div>
                                        <div className="text-emerald-700 font-medium">15h à 16h30 <span className="text-slate-500 text-sm font-normal">(Ceyreste)</span></div>
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-50">
                                    <td className="p-4 font-semibold text-slate-900">Jeudi</td>
                                    <td className="p-4">Cassis <br/><span className="text-sm text-slate-500">et</span> Carnoux</td>
                                    <td className="p-4">
                                        <div className="text-emerald-700 font-medium">16h30 à 18h30</div>
                                        <div className="text-blue-600 font-medium mt-1">19h à 20h <span className="text-slate-500 text-sm font-normal">(Cours Élite Cassis & Visio)</span></div>
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-50">
                                    <td className="p-4 font-semibold text-slate-900">Vendredi</td>
                                    <td className="p-4">Cassis</td>
                                    <td className="p-4">
                                        <div className="text-emerald-700 font-medium">16h30 à 18h30</div>
                                        <div className="text-blue-600 font-medium mt-1">19h à 20h <span className="text-slate-500 text-sm font-normal">(Cours Élite & En ligne)</span></div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Section Carte */}
                <div className="bg-white p-4 rounded-2xl shadow-xl border border-slate-200 mb-12">
                    <LocationsMap />
                    <div className="text-center text-sm text-slate-400 mt-4 italic">
                        Carte Google Maps avec sélection des lieux et itinéraires.
                    </div>
                </div>

                {/* Section Liste détaillée */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {LOCATIONS_LIST.map((loc, idx) => (
                        <div key={idx} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition">
                            <div className="bg-slate-100 px-6 py-4 border-b border-slate-200 flex justify-between items-center">
                                <h3 className="font-bold text-lg text-slate-800">{loc.city}</h3>
                                <MapPin className="w-5 h-5 text-accent" />
                            </div>
                            <div className="p-6 space-y-4">
                                {loc.places.map((place, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        {place.type === "ecole" ? (
                                            <School className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                        ) : (
                                            <Building2 className="w-5 h-5 text-orange-500 mt-1 shrink-0" />
                                        )}
                                        <div>
                                            <div className="font-bold text-slate-700">{place.name}</div>
                                            <div className="text-sm text-slate-500">{place.address}</div>
                                            {place.note && (
                                                <div className="text-sm font-medium text-emerald-700 mt-2 bg-emerald-50 p-2 rounded-md border border-emerald-100">
                                                    📅 {place.note}
                                                </div>
                                            )}
                                            <div className="flex flex-wrap items-center gap-2 mt-2">
                                                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                                                    {place.type === "ecole" ? "SCOLAIRE" : "CLUB"}
                                                </span>
                                                <span
                                                    className={`text-[10px] font-bold uppercase tracking-wider ${place.verification === "verified" ? "text-emerald-600" : "text-amber-600"
                                                        }`}
                                                >
                                                    {place.verification === "verified" ? "Adresse vérifiée" : "Adresse à confirmer"}
                                                </span>
                                            </div>
                                            <div className="mt-2 flex flex-wrap items-center gap-3">
                                                <a
                                                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(place.address)}`}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="text-xs font-bold text-blue-600 hover:underline inline-flex items-center gap-1"
                                                >
                                                    Itinéraire <ExternalLink className="w-3 h-3" />
                                                </a>
                                                <a
                                                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.address)}`}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="text-xs font-bold text-blue-600 hover:underline inline-flex items-center gap-1"
                                                >
                                                    Ouvrir la carte <ExternalLink className="w-3 h-3" />
                                                </a>
                                            </div>
                                            <div className="text-[10px] text-slate-400 mt-1">
                                                Source: {place.source}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
