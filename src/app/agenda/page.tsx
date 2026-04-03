import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock } from "lucide-react";

export default function AgendaPage() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans">
            <Navbar />

            {/* Header */}
            <section className="bg-primary text-white py-20 relative overflow-hidden">
                {/* Background Pattern - subtle overlay */}
                <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Agenda du Club</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto font-medium">
                        Retrouvez tous les événements, tournois et cours de l'Académie Echecs Calanques.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="container mx-auto px-4 py-12">
                <div className="grid lg:grid-cols-3 gap-8">

                    {/* Calendar List (Upcoming) */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                                <Calendar className="w-6 h-6 text-accent" />
                                À Venir
                            </h2>
                            <Button variant="ghost" size="sm" className="text-primary text-sm font-semibold">Voir tout</Button>
                        </div>

                        {/* Event Item 1 */}
                        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 transition-all hover:shadow-md hover:border-blue-200 group cursor-pointer relative overflow-hidden">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500 rounded-l-xl"></div>
                            <div className="flex gap-4 items-start">
                                <div className="flex flex-col items-center bg-orange-50 text-orange-700 rounded-xl p-3 min-w-[70px]">
                                    <span className="text-xs font-bold uppercase tracking-wide">Mar</span>
                                    <span className="text-3xl font-extrabold leading-none">12</span>
                                </div>
                                <div className="w-full">
                                    <div className="flex gap-2 mb-2">
                                        <span className="px-2 py-0.5 rounded-full bg-orange-100 text-orange-700 text-[10px] font-bold uppercase tracking-wider">Tournoi</span>
                                    </div>
                                    <h3 className="font-bold text-lg text-slate-800 group-hover:text-primary transition-colors leading-tight">Rapide de Cassis</h3>
                                    <div className="text-slate-500 text-sm mt-3 space-y-1.5">
                                        <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-slate-400" /> 14:00 - 18:00</div>
                                        <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-slate-400" /> Centre Culturel</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Event Item 2 */}
                        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 transition-all hover:shadow-md hover:border-blue-200 group cursor-pointer relative overflow-hidden">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500 rounded-l-xl"></div>
                            <div className="flex gap-4 items-start">
                                <div className="flex flex-col items-center bg-purple-50 text-purple-700 rounded-xl p-3 min-w-[70px]">
                                    <span className="text-xs font-bold uppercase tracking-wide">Sam</span>
                                    <span className="text-3xl font-extrabold leading-none">16</span>
                                </div>
                                <div className="w-full">
                                    <div className="flex gap-2 mb-2">
                                        <span className="px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 text-[10px] font-bold uppercase tracking-wider">Stage</span>
                                    </div>
                                    <h3 className="font-bold text-lg text-slate-800 group-hover:text-primary transition-colors leading-tight">Perfectionnement Tactique</h3>
                                    <div className="text-slate-500 text-sm mt-3 space-y-1.5">
                                        <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-slate-400" /> 10:00 - 16:00</div>
                                        <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-slate-400" /> Salle du Club</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Event Item 3 */}
                        <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 transition-all hover:shadow-md hover:border-blue-200 group cursor-pointer relative overflow-hidden">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-l-xl"></div>
                            <div className="flex gap-4 items-start">
                                <div className="flex flex-col items-center bg-blue-50 text-blue-700 rounded-xl p-3 min-w-[70px]">
                                    <span className="text-xs font-bold uppercase tracking-wide">Dim</span>
                                    <span className="text-3xl font-extrabold leading-none">24</span>
                                </div>
                                <div className="w-full">
                                    <div className="flex gap-2 mb-2">
                                        <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-wider">Vie du Club</span>
                                    </div>
                                    <h3 className="font-bold text-lg text-slate-800 group-hover:text-primary transition-colors leading-tight">Assemblée Générale</h3>
                                    <div className="text-slate-500 text-sm mt-3 space-y-1.5">
                                        <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-slate-400" /> 18:00 - 20:00</div>
                                        <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-slate-400" /> Salle Polyvalente</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Google Calendar Embed */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-1 h-[600px] md:h-full min-h-[600px] relative">
                            <div className="absolute inset-x-0 -top-3 flex justify-center">
                                <span className="bg-white px-4 text-sm font-bold text-slate-400 uppercase tracking-widest border border-slate-100 rounded-full shadow-sm">Calendrier Google</span>
                            </div>
                            <iframe
                                src="https://calendar.google.com/calendar/embed?src=fr.french%23holiday%40group.v.calendar.google.com&ctz=Europe%2FParis"
                                style={{ border: 0 }}
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                scrolling="no"
                                className="rounded-xl w-full h-full"
                                title="Google Calendar"
                            ></iframe>
                        </div>
                    </div>

                </div>
            </section>

            {/* Info Banner */}
            <section className="container mx-auto px-4 mb-20">
                <div className="bg-blue-900 rounded-2xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="relative z-10 text-white">
                        <h3 className="text-2xl md:text-3xl font-bold mb-2">Vous souhaitez organiser un événement ?</h3>
                        <p className="text-blue-200">Contactez-nous pour proposer un tournoi ou une activité au sein du club.</p>
                    </div>
                    <div className="relative z-10">
                        <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-bold border-none">
                            Nous Contacter
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
