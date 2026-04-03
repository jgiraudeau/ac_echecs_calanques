import { Navbar } from "@/components/layout/Navbar";
import { Check, Star, Heart, TrendingUp, Users, Globe, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PartenairesPage() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <Navbar />

            {/* Header Hero */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 pt-20 pb-24 text-white text-center px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Devenez Partenaire</h1>
                <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                    Associez votre image à l'excellence. <br />
                    Soutenez un projet éducatif et sportif majeur sur le territoire.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                    <span className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/50 font-bold text-sm">
                        <Star className="w-4 h-4 mr-2" /> 66% Déductible d'impôts
                    </span>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16 -mt-10 relative z-10">

                {/* Arguments Clés - Pourquoi nous soutenir ? */}
                <div className="grid md:grid-cols-3 gap-8 mb-20 text-center">
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                            <Users className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-3">Image RSE Compétitive</h3>
                        <p className="text-slate-600">
                            Associez votre marque à un club reconnu d'utilité publique pour son rôle éducatif, social et sportif auprès des jeunes.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-600">
                            <Globe className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-3">Rayonnement International</h3>
                        <p className="text-slate-600">
                            Visibilité lors de notre Festival International qui réunit des joueurs de 4 continents, ainsi qu'auprès des familles locales.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                            <Heart className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-3">Avantage Fiscal</h3>
                        <p className="text-slate-600">
                            <strong>66% de votre don</strong> est déductible de vos impôts. Un don de 1000€ ne vous coûte réellement que 340€.
                        </p>
                    </div>
                </div>

                {/* Les Packs Sponsoring */}
                <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Nos Formules de Partenariat</h2>

                <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">

                    {/* Pack PION */}
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex flex-col hover:scale-105 transition-transform duration-300">
                        <div className="bg-slate-100 p-6 text-center border-b border-slate-200">
                            <h3 className="text-2xl font-black text-slate-700 uppercase tracking-widest">Pion</h3>
                            <div className="mt-4 text-5xl font-extrabold text-slate-800">300€<span className="text-xl font-medium text-slate-500">/an</span></div>
                            <div className="text-sm text-slate-500 mt-2">Coût réel : 102€</div>
                        </div>
                        <div className="p-8 flex-1">
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-slate-600">
                                    <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                    <span>Visibilité sur notre <strong>Site Internet</strong></span>
                                </li>
                                <li className="flex items-start gap-3 text-slate-600">
                                    <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                    <span>Mention sur nos <strong>Réseaux Sociaux</strong></span>
                                </li>
                                <li className="flex items-start gap-3 text-slate-600">
                                    <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                    <span>Logos sur nos <strong>Flyers</strong></span>
                                </li>
                                <li className="flex items-start gap-3 text-slate-600">
                                    <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                    <span>Invitation au Festival</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 bg-slate-50">
                            <Button className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-6 rounded-xl">Choisir le Pion</Button>
                        </div>
                    </div>

                    {/* Pack CAVALIER (Mis en avant) */}
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-orange-500 flex flex-col relative scale-105 transform z-10">
                        <div className="absolute top-0 left-0 w-full bg-orange-500 text-white text-center text-sm font-bold py-1 uppercase tracking-wider">
                            Recommandé
                        </div>
                        <div className="bg-orange-50 p-6 text-center border-b border-orange-100 pt-10">
                            <h3 className="text-2xl font-black text-orange-600 uppercase tracking-widest">Cavalier</h3>
                            <div className="mt-4 text-5xl font-extrabold text-slate-800">1000€<span className="text-xl font-medium text-slate-500">/an</span></div>
                            <div className="text-sm text-slate-500 mt-2">Coût réel : 340€</div>
                        </div>
                        <div className="p-8 flex-1">
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-slate-800 font-medium">
                                    <Check className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                                    <span>Tout le pack Pion +</span>
                                </li>
                                <li className="flex items-start gap-3 text-slate-600">
                                    <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                    <span>Logo sur <strong>T-shirts et Pendules</strong> (Quotidien des clubs)</span>
                                </li>
                                <li className="flex items-start gap-3 text-slate-600">
                                    <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                    <span><strong>Oriflammes / Kakemono</strong> sur toutes nos manifestations</span>
                                </li>
                                <li className="flex items-start gap-3 text-slate-600">
                                    <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                    <span><strong>1 Initiation Échecs</strong> pour vos salariés</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 bg-orange-50">
                            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-6 rounded-xl shadow-lg shadow-orange-200">Devenir Cavalier</Button>
                        </div>
                    </div>

                    {/* Pack ROI */}
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex flex-col hover:scale-105 transition-transform duration-300">
                        <div className="bg-purple-50 p-6 text-center border-b border-purple-100">
                            <h3 className="text-2xl font-black text-purple-600 uppercase tracking-widest">Roi</h3>
                            <div className="mt-4 text-5xl font-extrabold text-slate-800">3000€<span className="text-xl font-medium text-slate-500">/an</span></div>
                            <div className="text-sm text-slate-500 mt-2">Coût réel : 1020€</div>
                        </div>
                        <div className="p-8 flex-1">
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 text-slate-800 font-medium">
                                    <Check className="w-5 h-5 text-purple-500 shrink-0 mt-0.5" />
                                    <span>Présence <strong>Exclusive</strong> et Forte</span>
                                </li>
                                <li className="flex items-start gap-3 text-slate-600">
                                    <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                    <span>Logo sur <strong>TOUS les supports</strong> (Affiches, Site, Textiles...)</span>
                                </li>
                                <li className="flex items-start gap-3 text-slate-600">
                                    <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                    <span><strong>Stand dédié</strong> au Festival International</span>
                                </li>
                                <li className="flex items-start gap-3 text-slate-600">
                                    <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                    <span>Événement d'entreprise avec <strong>Échiquier Géant</strong></span>
                                </li>
                                <li className="flex items-start gap-3 text-slate-600">
                                    <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                    <span>Conférence "Préparation Mentale"</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-6 bg-purple-50">
                            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-6 rounded-xl">Devenir Roi</Button>
                        </div>
                    </div>

                </div>

                {/* Partenariat Spécifique - Van */}
                <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden max-w-5xl mx-auto shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-20"></div>
                    <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                        <div>
                            <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                                <div className="bg-blue-600 p-2 rounded-lg"><TrendingUp className="w-6 h-6 text-white" /></div>
                                Partenariat Mobilité
                            </h3>
                            <p className="text-slate-300 mb-6 text-lg">
                                Nous recherchons un partenaire pour financer (ou prêter) un <strong>Van 9 places</strong>, indispensable pour nos déplacements en compétitions nationales.
                            </p>
                            <ul className="space-y-2 mb-8 text-slate-400">
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-400" /> Votre Logo en grand sur le véhicule (covering)</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-400" /> Photos de l'équipe avec le van à chaque déplacement</li>
                                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-blue-400" /> Avantages du Pack Cavalier inclus</li>
                            </ul>
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-bold rounded-xl shadow-lg shadow-blue-900/50">
                                Contactez-nous pour ce projet
                            </Button>
                        </div>
                        <div className="bg-slate-800 rounded-2xl h-64 flex items-center justify-center border border-slate-700">
                            {/* Placeholder pour photo van ou illustration */}
                            <div className="text-center">
                                <Building className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                                <span className="text-slate-500 font-medium">Emplacement visuel Van</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
