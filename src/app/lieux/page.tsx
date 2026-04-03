"use client";

import { Navbar } from "@/components/layout/Navbar";
import LocationsMap from "@/components/map/LocationsMap";
import { MapPin, School, Building2 } from "lucide-react";
import "leaflet/dist/leaflet.css"; // Important pour le style de la carte

const LOCATIONS_LIST = [
    {
        city: "Cassis",
        places: [
            { name: "Centre Culturel", type: "club", address: "20 Av. Dr Emmanuel Agostini, 13260 Cassis" },
            { name: "École Saint Augustin", type: "ecole", address: "Cassis / Carnoux" } // Modulable
        ]
    },
    {
        city: "Carnoux",
        places: [
            { name: "Le Coq", type: "club", address: "Salle Polyvalente, Carnoux" },
            { name: "École Saint Augustin", type: "ecole", address: "Carnoux-en-Provence" }
        ]
    },
    {
        city: "Marseille",
        places: [
            { name: "Sainte-Trinité", type: "club", address: "Club & École" },
            { name: "École Sainte Claire", type: "ecole", address: "Marseille" }
        ]
    },
    {
        city: "La Ciotat",
        places: [
            { name: "CIQ Saint-Jean", type: "club", address: "Maison de Quartier" },
            { name: "École Zebra", type: "ecole", address: "La Ciotat" }
        ]
    },
    {
        city: "Ceyreste",
        places: [
            { name: "Salle Polyvalente", type: "club", address: "Ceyreste" },
            { name: "Salle de la Culture", type: "club", address: "Ceyreste" }
        ]
    }
];

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
                        Cliquez sur les marqueurs pour voir le détail.
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
                                        {place.type === 'ecole' ? (
                                            <School className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                                        ) : (
                                            <Building2 className="w-5 h-5 text-orange-500 mt-1 shrink-0" />
                                        )}
                                        <div>
                                            <div className="font-bold text-slate-700">{place.name}</div>
                                            <div className="text-sm text-slate-500">{place.address}</div>
                                            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-1">
                                                {place.type === 'ecole' ? 'SCOLAIRE' : 'CLUB'}
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
