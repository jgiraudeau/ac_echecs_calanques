import { Navbar } from "@/components/layout/Navbar";
import { Award, Users, MapPin, TrendingUp, Target, School } from "lucide-react";

export default function ClubPage() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <Navbar />

            {/* Hero Header */}
            <div className="bg-primary pt-20 pb-24 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/pattern-chess.png')] opacity-5"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
                        L'Excellence au cœur des Calanques
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                        Rejoignez la grande famille des échecs. <br />
                        Plus de 200 licenciés, du débutant au Grand Maître, unis par la passion du jeu.
                    </p>
                </div>
                {/* Wave separator */}
                <div className="absolute -bottom-1 left-0 w-full overflow-hidden leading-[0] z-10">
                    <svg className="relative block w-[calc(100%+1.3px)] h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-slate-50"></path>
                    </svg>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 -mt-20 relative z-20">
                {/* Key Stats Grid */}
                <div className="grid md:grid-cols-4 gap-6 mb-20">
                    <div className="bg-white p-6 rounded-2xl shadow-lg text-center transform hover:-translate-y-1 transition-transform border-b-4 border-orange-500">
                        <Users className="w-10 h-10 text-orange-500 mx-auto mb-4" />
                        <div className="text-4xl font-bold text-slate-800 mb-1">200+</div>
                        <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Licenciés</div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-lg text-center transform hover:-translate-y-1 transition-transform border-b-4 border-blue-500">
                        <MapPin className="w-10 h-10 text-blue-500 mx-auto mb-4" />
                        <div className="text-4xl font-bold text-slate-800 mb-1">15</div>
                        <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Communes</div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-lg text-center transform hover:-translate-y-1 transition-transform border-b-4 border-purple-500">
                        <Award className="w-10 h-10 text-purple-500 mx-auto mb-4" />
                        <div className="text-3xl font-bold text-slate-800 mb-1 leading-tight py-1">Club Formateur</div>
                        <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Label FFE</div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-lg text-center transform hover:-translate-y-1 transition-transform border-b-4 border-green-500">
                        <TrendingUp className="w-10 h-10 text-green-500 mx-auto mb-4" />
                        <div className="text-4xl font-bold text-slate-800 mb-1">Top 110</div>
                        <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">Mondial (Jeunes)</div>
                    </div>
                </div>

                {/* Content Sections */}
                <div className="grid lg:grid-cols-12 gap-12">

                    {/* Main Content (Left) */}
                    <div className="lg:col-span-8 space-y-12">

                        {/* Section Introduction */}
                        <section>
                            <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                                <span className="bg-accent w-2 h-8 rounded-full"></span>
                                Qui sommes-nous ?
                            </h2>
                            <div className="prose prose-lg text-slate-600">
                                <p>
                                    L’académie d’échecs des Calanques est solidement implantée sur notre territoire.
                                    Nous sommes ouverts tous les jours de la semaine, avec des activités réparties dans plusieurs communes afin de toucher un public large et diversifié.
                                </p>
                                <p>
                                    <strong>Des licenciés de tout âge !</strong> Nous accueillons des joueurs âgés de 5 à 70 ans : des enfants qui découvrent le jeu pour la première fois jusqu’aux adultes confirmés qui souhaitent progresser ou simplement partager leur passion.
                                </p>
                            </div>
                        </section>

                        {/* Section Formation */}
                        <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                                <School className="w-6 h-6" />
                                Un Pôle de Formation d'Excellence
                            </h3>
                            <p className="text-slate-600 mb-6">
                                L’Académie s’impose aujourd’hui comme l’un des pôles de formation les plus dynamiques de la région.
                                Chaque année, nous formons plus de <strong>150 enfants</strong> dans 3 établissements scolaires privés différents.
                            </p>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start gap-3">
                                    <Award className="w-5 h-5 text-yellow-500 shrink-0 mt-1" />
                                    <span><strong>Résultats scolaires :</strong> Champions départementaux, académiques et Vice-champions de France en 2023 et 2024.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <TrendingUp className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                                    <span><strong>Haut Niveau :</strong> Plus de 10 joueurs qualifiés chaque année au championnat de France.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Users className="w-5 h-5 text-purple-500 shrink-0 mt-1" />
                                    <span><strong>Compétition par équipe :</strong> Équipes fanions en Nationale 2 Jeunes et Nationale 4 Adultes.</span>
                                </li>
                            </ul>
                            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-blue-800 text-sm">
                                🌟 <strong>Talent 2025 :</strong> L'un de nos jeunes (11 ans, 1996 Elo) s'est hissé dans le <strong>Top 110 mondial</strong> de sa catégorie.
                            </div>
                        </section>

                        {/* Ambitions 2026 */}
                        <section>
                            <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                                <span className="bg-purple-500 w-2 h-8 rounded-full"></span>
                                Ambitions 2026
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                                    <Target className="w-8 h-8 text-purple-600 mb-3" />
                                    <h4 className="font-bold text-lg mb-2">Fusion & Croissance</h4>
                                    <p className="text-slate-600 text-sm">
                                        Fusion avec des clubs partenaires pour passer la barre des <strong>300 licenciés</strong> et renforcer notre rayonnement.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                                    <Award className="w-8 h-8 text-orange-500 mb-3" />
                                    <h4 className="font-bold text-lg mb-2">Elite Jeunes</h4>
                                    <p className="text-slate-600 text-sm">
                                        Objectif : Remporter la <strong>Nationale 2 Jeunes</strong> et atteindre le Top 16 Jeunes (élite française) d'ici 2030.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                                    <School className="w-8 h-8 text-blue-500 mb-3" />
                                    <h4 className="font-bold text-lg mb-2">Dispositif Class'Échecs</h4>
                                    <p className="text-slate-600 text-sm">
                                        Déploiement de classes d'échecs dans plusieurs collèges pour toucher des centaines d'élèves.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                                    <Users className="w-8 h-8 text-green-500 mb-3" />
                                    <h4 className="font-bold text-lg mb-2">Professionnalisation</h4>
                                    <p className="text-slate-600 text-sm">
                                        Création de postes (coordinateur pédagogique) pour un encadrement toujours plus qualitatif.
                                    </p>
                                </div>
                            </div>
                        </section>

                    </div>

                    {/* Sidebar Content (Right) */}
                    <div className="lg:col-span-4 space-y-8">

                        {/* Équipe pédagogique */}
                        <div className="space-y-6">
                            <h3 className="text-lg font-extrabold text-slate-800 uppercase tracking-wider">Équipe pédagogique</h3>

                            {/* Quentin Massardo */}
                            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
                                <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-6 text-white text-center">
                                    <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 backdrop-blur flex items-center justify-center text-4xl">
                                        👨‍🏫
                                    </div>
                                    <h4 className="text-xl font-bold">Quentin Massardo</h4>
                                    <div className="text-orange-400 font-bold text-sm uppercase tracking-wider mb-2">Président & Référent Club</div>
                                    <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs">Arbitre & Formateur National</div>
                                </div>
                                <div className="p-6">
                                    <p className="text-slate-600 text-sm mb-4">
                                        Pilier du club, il dirige l&apos;équipe pédagogique et anime la vie sportive. Expert en formation (débutant à perfectionnement) et organisateur des événements majeurs.
                                    </p>
                                    <div className="space-y-3 text-sm text-slate-500">
                                        <div className="flex justify-between border-b border-slate-100 pb-2">
                                            <span>Rôle</span>
                                            <span className="font-bold text-slate-800">Direction & Animation</span>
                                        </div>
                                        <div className="flex justify-between border-b border-slate-100 pb-2">
                                            <span>Qualif.</span>
                                            <span className="font-bold text-slate-800">Arbitre National Fédéral</span>
                                        </div>
                                        <div className="flex justify-between border-b border-slate-100 pb-2">
                                            <span>Spécialité</span>
                                            <span className="font-bold text-slate-800">Scolaires & Compétition</span>
                                        </div>
                                        <div className="pt-2">
                                            <span className="block text-xs uppercase font-bold text-slate-400 mb-1">Services Proposés</span>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded font-medium">Cours Particuliers</span>
                                                <span className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded font-medium">Stages</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Alexandre Merrenciano */}
                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100">
                                <div className="bg-gradient-to-r from-blue-800 to-blue-700 p-5 text-white text-center">
                                    <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-3 backdrop-blur flex items-center justify-center text-3xl">
                                        ♟️
                                    </div>
                                    <h4 className="text-lg font-bold">Alexandre Merrenciano</h4>
                                    <div className="text-blue-100 font-bold text-sm uppercase tracking-wider mb-2">Animateur • 2250 Elo</div>
                                    <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs">AFC • Arbitre de Club</div>
                                </div>
                                <div className="p-5">
                                    <p className="text-slate-600 text-sm mb-4">
                                        Encadrant expérimenté pour les cours club et le perfectionnement. Il propose également des cours particuliers.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded font-medium">Cours Club</span>
                                        <span className="bg-indigo-50 text-indigo-700 text-xs px-2 py-1 rounded font-medium">Cours Particuliers</span>
                                        <span className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded font-medium">Arbitrage AFC</span>
                                    </div>
                                </div>
                            </div>

                            {/* Bilel Belahcen */}
                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100">
                                <div className="bg-gradient-to-r from-purple-800 to-fuchsia-700 p-5 text-white text-center">
                                    <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-3 backdrop-blur flex items-center justify-center text-3xl">
                                        👑
                                    </div>
                                    <h4 className="text-lg font-bold">Bilel Belahcen</h4>
                                    <div className="text-purple-100 font-bold text-sm uppercase tracking-wider mb-2">Grand Maître International • +2500 Elo</div>
                                    <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs">Champion d&apos;Afrique 2025</div>
                                </div>
                                <div className="p-5">
                                    <p className="text-slate-600 text-sm mb-4">
                                        Intervenant haut niveau pour les cours élite, préparation à la compétition et accompagnement des joueurs performants.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="bg-purple-50 text-purple-700 text-xs px-2 py-1 rounded font-medium">Cours Élite</span>
                                        <span className="bg-fuchsia-50 text-fuchsia-700 text-xs px-2 py-1 rounded font-medium">Prépa Tournois</span>
                                    </div>
                                </div>
                            </div>

                            {/* Verlingue Brewen */}
                            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100">
                                <div className="bg-gradient-to-r from-emerald-700 to-teal-700 p-5 text-white text-center">
                                    <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-3 backdrop-blur flex items-center justify-center text-3xl">
                                        🎯
                                    </div>
                                    <h4 className="text-lg font-bold">Verlingue Brewen</h4>
                                    <div className="text-emerald-100 font-bold text-sm uppercase tracking-wider mb-2">Animateur</div>
                                    <div className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs">AFC</div>
                                </div>
                                <div className="p-5">
                                    <p className="text-slate-600 text-sm mb-4">
                                        Animateur pédagogique du club, il accompagne les joueurs débutants et intermédiaires dans leur progression.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="bg-emerald-50 text-emerald-700 text-xs px-2 py-1 rounded font-medium">Initiation</span>
                                        <span className="bg-teal-50 text-teal-700 text-xs px-2 py-1 rounded font-medium">Perfectionnement</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Call to Action Partenaires */}
                        <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl p-6 border border-orange-200">
                            <h3 className="font-bold text-orange-800 text-lg mb-2">Devenez Partenaire</h3>
                            <p className="text-slate-700 text-sm mb-4">
                                Associez l'image de votre entreprise à l'excellence et bénéficiez de 66% de déduction fiscale.
                            </p>
                            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition-colors shadow-lg shadow-orange-200">
                                Découvrir les offres
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
