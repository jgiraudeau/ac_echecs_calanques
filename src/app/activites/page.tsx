import { Navbar } from "@/components/layout/Navbar";
import { Clock, MapPin, Euro, Star, ExternalLink, School, Building2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import LocationsMap from "@/components/map/LocationsMap";
import { LOCATION_ENTRIES } from "@/lib/locations";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cours & Lieux de Pratique | Académie d'échecs des calanques",
    description: "Découvrez nos plannings de cours hebdomadaires d'échecs, nos tarifs d'adhésion, cotisations et nos différents lieux d'intervention à Cassis, La Ciotat, Carnoux, Ceyreste et Marseille.",
};

const LOCATIONS_LIST = Object.entries(
    LOCATION_ENTRIES.reduce<Record<string, typeof LOCATION_ENTRIES>>((acc, location) => {
        const current = acc[location.city] ?? [];
        acc[location.city] = [...current, location];
        return acc;
    }, {}),
).map(([city, places]) => ({ city, places }));

export default function ActivitesPage() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <Navbar />
            
            <div className="container mx-auto px-4 py-12 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4">Cours &amp; Lieux de Pratique</h1>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
                    Retrouvez le planning hebdomadaire de nos cours et tous nos lieux d&apos;intervention.
                </p>

                {/* ── SECTION HAUT : COURS / PLANNING ── */}
                <div className="bg-white rounded-2xl shadow-lg border border-slate-200 mb-12 overflow-hidden max-w-4xl mx-auto text-left">
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
                                    <th className="p-4 font-bold">Horaires &amp; Infos</th>
                                    <th className="p-4 font-bold text-orange-600 bg-orange-50/50">Date de reprise</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 text-slate-700">
                                <tr className="hover:bg-slate-50">
                                    <td className="p-4 font-semibold text-slate-900">Lundi</td>
                                    <td className="p-4">
                                        <a 
                                            href="#lieux-liste"
                                            className="text-blue-600 hover:text-accent font-semibold hover:underline inline-flex items-center gap-1"
                                        >
                                            CIQ Saint Jean, La Ciotat
                                            <MapPin className="w-3.5 h-3.5" />
                                        </a>
                                        <br/>
                                        <span className="text-sm text-slate-500">et</span>
                                        <br/>
                                        <a 
                                            href="#lieux-liste"
                                            className="text-blue-600 hover:text-accent font-semibold hover:underline inline-flex items-center gap-1 mt-1"
                                        >
                                            Carnoux au COC
                                            <MapPin className="w-3.5 h-3.5" />
                                        </a>
                                    </td>
                                    <td className="p-4">
                                        <div className="text-emerald-700 font-medium">16h30 à 18h30 <span className="text-slate-500 text-sm font-normal">La Ciotat</span></div>
                                        <div className="text-emerald-700 font-medium">16h30 à 18h30 <span className="text-slate-500 text-sm font-normal">Carnoux</span></div>
                                    </td>
                                    <td className="p-4 align-top">
                                        <div className="flex flex-col gap-2">
                                            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-700 bg-orange-100/50 px-2.5 py-1 rounded-md border border-orange-200/50 whitespace-nowrap">
                                                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                                                La Ciotat : 7 Sept.
                                            </span>
                                            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-700 bg-orange-100/50 px-2.5 py-1 rounded-md border border-orange-200/50 whitespace-nowrap">
                                                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                                                Carnoux : 7 Sept.
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-50">
                                    <td className="p-4 font-semibold text-slate-900">Mardi</td>
                                    <td className="p-4">
                                        <a 
                                            href="#lieux-liste"
                                            className="text-blue-600 hover:text-accent font-semibold hover:underline inline-flex items-center gap-1"
                                        >
                                            Sainte Trinité (Marseille)
                                            <MapPin className="w-3.5 h-3.5" />
                                        </a>
                                        <br/>
                                        <span className="text-sm text-slate-500">et</span>
                                        <br/>
                                        <a 
                                            href="#lieux-liste"
                                            className="text-blue-600 hover:text-accent font-semibold hover:underline inline-flex items-center gap-1 mt-1"
                                        >
                                            Ceyreste
                                            <MapPin className="w-3.5 h-3.5" />
                                        </a>
                                    </td>
                                    <td className="p-4 text-emerald-700 font-medium">16h30 à 18h30</td>
                                    <td className="p-4 align-top">
                                        <div className="flex flex-col gap-2">
                                            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-700 bg-orange-100/50 px-2.5 py-1 rounded-md border border-orange-200/50 whitespace-nowrap">
                                                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                                                Marseille : 29 Sept.
                                            </span>
                                            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-700 bg-orange-100/50 px-2.5 py-1 rounded-md border border-orange-200/50 whitespace-nowrap">
                                                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                                                Ceyreste : 8 Sept.
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-50">
                                    <td className="p-4 font-semibold text-slate-900">Mercredi</td>
                                    <td className="p-4">
                                        <a 
                                            href="#lieux-liste"
                                            className="text-blue-600 hover:text-accent font-semibold hover:underline inline-flex items-center gap-1"
                                        >
                                            Cassis
                                            <MapPin className="w-3.5 h-3.5" />
                                        </a>
                                        <br/>
                                        <span className="text-sm text-slate-500">et</span>
                                        <br/>
                                        <a 
                                            href="#lieux-liste"
                                            className="text-blue-600 hover:text-accent font-semibold hover:underline inline-flex items-center gap-1 mt-1"
                                        >
                                            Ceyreste
                                            <MapPin className="w-3.5 h-3.5" />
                                        </a>
                                    </td>
                                    <td className="p-4">
                                        <div className="text-emerald-700 font-medium">15h à 18h <span className="text-slate-500 text-sm font-normal">Cassis</span></div>
                                        <div className="text-emerald-700 font-medium">15h à 16h30 <span className="text-slate-500 text-sm font-normal">Ceyreste</span></div>
                                    </td>
                                    <td className="p-4 align-top">
                                        <div className="flex flex-col gap-2">
                                            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-700 bg-orange-100/50 px-2.5 py-1 rounded-md border border-orange-200/50 whitespace-nowrap">
                                                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                                                Cassis : 9 Sept.
                                            </span>
                                            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200/50 whitespace-nowrap">
                                                <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                                                Ceyreste : À confirmer
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-50">
                                    <td className="p-4 font-semibold text-slate-900">Jeudi</td>
                                    <td className="p-4">
                                        <a 
                                            href="#lieux-liste"
                                            className="text-blue-600 hover:text-accent font-semibold hover:underline inline-flex items-center gap-1"
                                        >
                                            Cassis
                                            <MapPin className="w-3.5 h-3.5" />
                                        </a>
                                        <br/>
                                        <span className="text-sm text-slate-500">et</span>
                                        <br/>
                                        <a 
                                            href="#lieux-liste"
                                            className="text-blue-600 hover:text-accent font-semibold hover:underline inline-flex items-center gap-1 mt-1"
                                        >
                                            Carnoux
                                            <MapPin className="w-3.5 h-3.5" />
                                        </a>
                                    </td>
                                    <td className="p-4">
                                        <div className="text-emerald-700 font-medium">16h30 à 18h30</div>
                                        <div className="text-blue-600 font-medium mt-1">19h à 20h <span className="text-slate-500 text-sm font-normal">(Cours Élite Cassis &amp; Visio)</span></div>
                                    </td>
                                    <td className="p-4 align-top">
                                        <div className="flex flex-col gap-2">
                                            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-700 bg-orange-100/50 px-2.5 py-1 rounded-md border border-orange-200/50 whitespace-nowrap">
                                                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                                                Cassis : 10 Sept.
                                            </span>
                                            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-700 bg-orange-100/50 px-2.5 py-1 rounded-md border border-orange-200/50 whitespace-nowrap">
                                                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                                                Carnoux : 10 Sept.
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-50">
                                    <td className="p-4 font-semibold text-slate-900">Vendredi</td>
                                    <td className="p-4">
                                        <a 
                                            href="#lieux-liste"
                                            className="text-blue-600 hover:text-accent font-semibold hover:underline inline-flex items-center gap-1"
                                        >
                                            Cassis
                                            <MapPin className="w-3.5 h-3.5" />
                                        </a>
                                    </td>
                                    <td className="p-4">
                                        <div className="text-emerald-700 font-medium">16h30 à 18h30</div>
                                        <div className="text-blue-600 font-medium mt-1">19h à 20h <span className="text-slate-500 text-sm font-normal">(Cours Élite &amp; En ligne)</span></div>
                                    </td>
                                    <td className="p-4 align-top">
                                        <div className="flex flex-col gap-2">
                                            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-700 bg-orange-100/50 px-2.5 py-1 rounded-md border border-orange-200/50 whitespace-nowrap">
                                                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                                                Cassis : 11 Sept.
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* ── SECTION MILIEU : TARIFS & ADHÉSIONS ── */}
                <div className="bg-white rounded-2xl shadow-lg border border-slate-200 mb-12 overflow-hidden max-w-4xl mx-auto text-left">
                    <div className="bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-4 border-b border-slate-200">
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <Euro className="w-5 h-5" />
                            Tarif et Adhésion Formule Club Saison 2026-2027
                        </h2>
                    </div>
                    <div className="p-6 md:p-8 space-y-6">
                        <p className="text-slate-600">
                            L&apos;inscription à l&apos;Académie d&apos;échecs des calanques se fait entièrement en ligne sur notre page HelloAsso officielle.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Formule Adhésion */}
                            <div className="border border-slate-200 rounded-2xl p-5 hover:border-orange-500 hover:shadow-md transition">
                                <span className="inline-flex rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide text-slate-600 mb-2">
                                    Adhésion Simple
                                </span>
                                <h3 className="text-xl font-bold text-slate-800">Formule Adhésion</h3>
                                <p className="text-2xl font-black text-slate-900 mt-1 mb-3">30 € <span className="text-xs font-normal text-slate-500">/ an (hors licence)</span></p>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Permet uniquement de faire partie du club, d&apos;être membre officiel et de soutenir son développement.
                                </p>
                                <p className="text-xs text-amber-600 font-semibold mt-3 bg-amber-50 p-2 rounded border border-amber-100">
                                    ⚠️ Attention : cette formule ne permet pas de participer aux cours.
                                </p>
                            </div>

                            {/* Formule Cotisation */}
                            <div className="border border-orange-200 rounded-2xl p-5 bg-orange-50/20 hover:border-orange-500 hover:shadow-md transition">
                                <span className="inline-flex rounded-full bg-orange-100 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide text-orange-600 mb-2">
                                    Cotisation Complète
                                </span>
                                <h3 className="text-xl font-bold text-slate-800">Formule Cotisation</h3>
                                <p className="text-2xl font-black text-[#0F4C81] mt-1 mb-3">230 € <span className="text-xs font-normal text-slate-500">/ an (hors licence)</span></p>
                                <p className="text-sm text-slate-600 leading-relaxed font-semibold text-slate-800">
                                    ✓ Comprend la formule adhésion.
                                </p>
                                <p className="text-sm text-slate-600 leading-relaxed mt-2">
                                    Donne accès aux entraînements et aux cours réguliers du club.
                                </p>
                                <p className="text-xs text-emerald-700 font-semibold mt-3 bg-emerald-50 p-2 rounded border border-emerald-100">
                                    💡 Avantage unique : l&apos;inscription au club permet de participer à autant de créneaux hebdomadaires que vous le souhaitez !
                                </p>
                            </div>
                        </div>

                        {/* Renseignements Licences */}
                        <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 text-sm">
                            <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-1.5">
                                <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
                                Licences fédérales obligatoires
                            </h4>
                            <p className="text-slate-600 leading-relaxed mb-3">
                                Toute formule choisie (Adhésion ou Cotisation) doit obligatoirement être accompagnée d&apos;une licence de la Fédération Française des Échecs (FFE) :
                            </p>
                            <ul className="space-y-1.5 text-slate-700 list-none mb-3 bg-white p-4 rounded-xl border border-slate-100">
                                <li className="flex justify-between items-center py-1 border-b border-slate-100">
                                    <span className="font-semibold">Adultes / Seniors</span>
                                    <span className="text-right">47€ <span className="text-xs text-slate-500 font-normal">Licence A</span> • 10€ <span className="text-xs text-slate-500 font-normal">Licence B</span></span>
                                </li>
                                <li className="flex justify-between items-center py-1 border-b border-slate-100">
                                    <span className="font-semibold">U20 et U18</span>
                                    <span className="text-right">27€ <span className="text-xs text-slate-500 font-normal">Licence A</span></span>
                                </li>
                                <li className="flex justify-between items-center py-1">
                                    <span className="font-semibold">U8 à U16</span>
                                    <span className="text-right">21€ <span className="text-xs text-slate-500 font-normal">Licence A</span></span>
                                </li>
                            </ul>
                            <p className="text-xs text-slate-500 italic border-t border-slate-200 pt-2">
                                ℹ️ Le club ne fait <strong>aucun bénéfice sur les licences</strong> : nous appliquons et reversons strictement le tarif fédéral officiel de la FFE.
                            </p>
                        </div>

                        {/* Remarques structure accueillante */}
                        <div className="bg-blue-50/50 rounded-2xl p-5 border border-blue-100 text-sm">
                            <h4 className="font-bold text-[#0F4C81] mb-1">Structures d&apos;accueil</h4>
                            <p className="text-slate-600 leading-relaxed">
                                Notez que sur certains lieux de pratique, une carte d&apos;adhésion propre à la structure d&apos;accueil peut être demandée en supplément (comme par exemple la carte d&apos;adhésion annuelle obligatoire exigée par le <strong>Centre Culturel de Cassis</strong>).
                            </p>
                        </div>

                        {/* Lien HelloAsso */}
                        <div className="flex justify-center pt-2">
                            <Button asChild className="bg-accent hover:bg-accent/90 text-white font-bold py-6 px-8 rounded-xl shadow-lg transition-transform hover:scale-[1.02]">
                                <a
                                    href="https://www.helloasso.com/associations/echecs-cassis/adhesions/cotisations-et-adhesion-club-d-echecs-2025-2026"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2"
                                >
                                    S&apos;inscrire et régler sa cotisation en ligne (HelloAsso)
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* ── SECTION BAS : LIEUX D'INTERVENTION ── */}
                <div id="lieux-liste" className="text-left max-w-6xl mx-auto mt-20">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-extrabold text-slate-800 mb-2">Nos Lieux d&apos;Intervention</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Nous intervenons dans les écoles et proposons des créneaux clubs sur l&apos;ensemble du territoire.
                        </p>
                    </div>

                    {/* Section Carte */}
                    <div className="bg-white p-4 rounded-2xl shadow-xl border border-slate-200 mb-12">
                        <LocationsMap />
                        <div className="text-center text-sm text-slate-400 mt-4 italic">
                            Carte interactive des lieux d&apos;entraînements et d&apos;animations.
                        </div>
                    </div>

                    {/* Liste détaillée */}
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
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <footer className="bg-slate-950 text-slate-400 py-8 text-center text-sm mt-20">
                <p>© 2026 Académie d&apos;échecs des calanques · <a href="mailto:communication@echecs-calanques.fr" className="hover:text-white transition-colors">communication@echecs-calanques.fr</a></p>
            </footer>
        </div>
    );
}
