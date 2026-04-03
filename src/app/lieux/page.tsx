"use client";

import { Navbar } from "@/components/layout/Navbar";
import LocationsMap from "@/components/map/LocationsMap";
import { MapPin, School, Building2, ExternalLink } from "lucide-react";
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
