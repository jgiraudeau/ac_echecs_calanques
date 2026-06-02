import { Navbar } from "@/components/layout/Navbar";
import { Clock, MapPin } from "lucide-react";
import Link from "next/link";

export default function ActivitesPage() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <Navbar />
            <div className="container mx-auto px-4 py-12 text-center">
                <h1 className="text-4xl font-extrabold text-slate-800 mb-4">Cours et Stages</h1>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
                    Retrouvez le planning hebdomadaire de nos cours et entraînements.
                </p>

                {/* Section Horaires Globaux */}
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
                                    <th className="p-4 font-bold">Horaires & Infos</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 text-slate-700">
                                <tr className="hover:bg-slate-50">
                                    <td className="p-4 font-semibold text-slate-900">Lundi</td>
                                    <td className="p-4">
                                        <Link 
                                            href="/lieux?id=ceyreste-echecs-siege"
                                            className="text-blue-600 hover:text-accent font-semibold hover:underline inline-flex items-center gap-1"
                                        >
                                            CIQ Saint Jean, La Ciotat
                                            <MapPin className="w-3.5 h-3.5" />
                                        </Link>
                                    </td>
                                    <td className="p-4 text-emerald-700 font-medium">16h30 à 18h30</td>
                                </tr>
                                <tr className="hover:bg-slate-50">
                                    <td className="p-4 font-semibold text-slate-900">Mardi</td>
                                    <td className="p-4">
                                        <Link 
                                            href="/lieux?id=institution-sainte-trinite-marseille"
                                            className="text-blue-600 hover:text-accent font-semibold hover:underline inline-flex items-center gap-1"
                                        >
                                            Sainte Trinité (Marseille)
                                            <MapPin className="w-3.5 h-3.5" />
                                        </Link>
                                        <br/>
                                        <span className="text-sm text-slate-500">et</span>
                                        <br/>
                                        <Link 
                                            href="/lieux?id=salle-culture-ceyreste"
                                            className="text-blue-600 hover:text-accent font-semibold hover:underline inline-flex items-center gap-1 mt-1"
                                        >
                                            Ceyreste
                                            <MapPin className="w-3.5 h-3.5" />
                                        </Link>
                                    </td>
                                    <td className="p-4 text-emerald-700 font-medium">16h30 à 18h30</td>
                                </tr>
                                <tr className="hover:bg-slate-50">
                                    <td className="p-4 font-semibold text-slate-900">Mercredi</td>
                                    <td className="p-4">
                                        <Link 
                                            href="/lieux?id=centre-culturel-cassis"
                                            className="text-blue-600 hover:text-accent font-semibold hover:underline inline-flex items-center gap-1"
                                        >
                                            Cassis
                                            <MapPin className="w-3.5 h-3.5" />
                                        </Link>
                                        <br/>
                                        <span className="text-sm text-slate-500">et</span>
                                        <br/>
                                        <Link 
                                            href="/lieux?id=salle-culture-ceyreste"
                                            className="text-blue-600 hover:text-accent font-semibold hover:underline inline-flex items-center gap-1 mt-1"
                                        >
                                            Ceyreste
                                            <MapPin className="w-3.5 h-3.5" />
                                        </Link>
                                    </td>
                                    <td className="p-4">
                                        <div className="text-emerald-700 font-medium">15h à 18h <span className="text-slate-500 text-sm font-normal">(Cassis)</span></div>
                                        <div className="text-emerald-700 font-medium">15h à 16h30 <span className="text-slate-500 text-sm font-normal">(Ceyreste)</span></div>
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-50">
                                    <td className="p-4 font-semibold text-slate-900">Jeudi</td>
                                    <td className="p-4">
                                        <Link 
                                            href="/lieux?id=centre-culturel-cassis"
                                            className="text-blue-600 hover:text-accent font-semibold hover:underline inline-flex items-center gap-1"
                                        >
                                            Cassis
                                            <MapPin className="w-3.5 h-3.5" />
                                        </Link>
                                        <br/>
                                        <span className="text-sm text-slate-500">et</span>
                                        <br/>
                                        <Link 
                                            href="/lieux?id=club-coq-carnoux"
                                            className="text-blue-600 hover:text-accent font-semibold hover:underline inline-flex items-center gap-1 mt-1"
                                        >
                                            Carnoux
                                            <MapPin className="w-3.5 h-3.5" />
                                        </Link>
                                    </td>
                                    <td className="p-4">
                                        <div className="text-emerald-700 font-medium">16h30 à 18h30</div>
                                        <div className="text-blue-600 font-medium mt-1">19h à 20h <span className="text-slate-500 text-sm font-normal">(Cours Élite Cassis & Visio)</span></div>
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-50">
                                    <td className="p-4 font-semibold text-slate-900">Vendredi</td>
                                    <td className="p-4">
                                        <Link 
                                            href="/lieux?id=centre-culturel-cassis"
                                            className="text-blue-600 hover:text-accent font-semibold hover:underline inline-flex items-center gap-1"
                                        >
                                            Cassis
                                            <MapPin className="w-3.5 h-3.5" />
                                        </Link>
                                    </td>
                                    <td className="p-4">
                                        <div className="text-emerald-700 font-medium">16h30 à 18h30</div>
                                        <div className="text-blue-600 font-medium mt-1">19h à 20h <span className="text-slate-500 text-sm font-normal">(Cours Élite & En ligne)</span></div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

