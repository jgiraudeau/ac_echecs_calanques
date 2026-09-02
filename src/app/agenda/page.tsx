import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, MapPin, Clock, Trophy, AlertCircle } from "lucide-react";
import { UPCOMING_EVENTS, ClubEvent } from "@/lib/events";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";

export default function AgendaPage() {
    // Obtenir les événements futurs uniquement
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const filteredEvents = UPCOMING_EVENTS.filter(event => {
        const eventDate = new Date(event.date);
        return eventDate >= today;
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 3);

    // Formater la date en français pour l'affichage (ex: "Sam" et "16")
    const getEventDateParts = (dateString: string) => {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) {
            return { dayName: "Évén.", dayNum: "??" };
        }
        // weekday: "short" -> "sam." ou "dim."
        let dayName = date.toLocaleDateString("fr-FR", { weekday: "short" });
        // Enlever le point à la fin si présent
        dayName = dayName.replace(".", "");
        // Capitaliser la première lettre
        dayName = dayName.charAt(0).toUpperCase() + dayName.slice(1);
        
        const dayNum = date.toLocaleDateString("fr-FR", { day: "numeric" });
        return { dayName, dayNum };
    };

    // Obtenir la couleur associée au type d'événement
    const getColorClasses = (color: ClubEvent["color"]) => {
        switch (color) {
            case "orange":
                return {
                    border: "border-orange-500",
                    bgSide: "bg-orange-500",
                    bgBadge: "bg-orange-100 text-orange-700",
                    bgIcon: "bg-orange-50 text-orange-700"
                };
            case "purple":
                return {
                    border: "border-purple-500",
                    bgSide: "bg-purple-500",
                    bgBadge: "bg-purple-100 text-purple-700",
                    bgIcon: "bg-purple-50 text-purple-700"
                };
            case "blue":
                return {
                    border: "border-blue-500",
                    bgSide: "bg-blue-500",
                    bgBadge: "bg-blue-100 text-blue-700",
                    bgIcon: "bg-blue-50 text-blue-700"
                };
            case "green":
                return {
                    border: "border-green-500",
                    bgSide: "bg-green-500",
                    bgBadge: "bg-green-100 text-green-700",
                    bgIcon: "bg-green-50 text-green-700"
                };
            default:
                return {
                    border: "border-slate-500",
                    bgSide: "bg-slate-500",
                    bgBadge: "bg-slate-100 text-slate-700",
                    bgIcon: "bg-slate-50 text-slate-700"
                };
        }
    };

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
                        Retrouvez tous les événements, tournois et cours de l&apos;Académie d&apos;échecs des calanques.
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
                                <CalendarIcon className="w-6 h-6 text-accent" />
                                À la Une
                            </h2>
                        </div>

                        {filteredEvents.map((event) => {
                            const { dayName, dayNum } = getEventDateParts(event.date);
                            const colors = getColorClasses(event.color);
                            return (
                                <div 
                                    key={event.id}
                                    className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 transition-all hover:shadow-md hover:border-blue-200 group cursor-pointer relative overflow-hidden"
                                >
                                    <div className={`absolute left-0 top-0 bottom-0 w-1 ${colors.bgSide} rounded-l-xl`} />
                                    <div className="flex gap-4 items-start">
                                        <div className={`flex flex-col items-center ${colors.bgIcon} rounded-xl p-3 min-w-[70px]`}>
                                            <span className="text-xs font-bold uppercase tracking-wide">{dayName}</span>
                                            <span className="text-3xl font-extrabold leading-none">{dayNum}</span>
                                        </div>
                                        <div className="w-full">
                                            <div className="flex gap-2 mb-2">
                                                <span className={`px-2 py-0.5 rounded-full ${colors.bgBadge} text-[10px] font-bold uppercase tracking-wider`}>
                                                    {event.type}
                                                </span>
                                            </div>
                                            <h3 className="font-bold text-lg text-slate-800 group-hover:text-primary transition-colors leading-tight">
                                                {event.title}
                                            </h3>
                                            <div className="text-slate-500 text-sm mt-3 space-y-1.5">
                                                <div className="flex items-center gap-2">
                                                    <Clock className="w-4 h-4 text-slate-400" /> 
                                                    {event.time}
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="w-4 h-4 text-slate-400" /> 
                                                    {event.location}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                        {filteredEvents.length === 0 && (
                            <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 text-center text-slate-500">
                                Aucun événement majeur à venir pour le moment.
                            </div>
                        )}
                    </div>

                    {/* Google Calendar Embed */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-1 h-[600px] md:h-full min-h-[600px] relative">
                            <div className="absolute inset-x-0 -top-3 flex justify-center">
                                <span className="bg-white px-4 text-sm font-bold text-slate-400 uppercase tracking-widest border border-slate-100 rounded-full shadow-sm">Calendrier Interactif</span>
                            </div>
                            <iframe
                                src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=Europe%2FParis&src=Y18xMzFhZjAwOTU4MGFhODZkZjEwMDg3NmI2Y2I2MjJhYWE1NGIzYTk1ZGVjYzhkZGRmMTZlZDJhMzQzN2NjYjQ5QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZnIuZnJlbmNoI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=bzRvamkwOHRqbnYxcXN0cDJkaG9ubmRvZjFsOWozYjZAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%237986cb&color=%230b8043&color=%23f09300&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0&showTz=1&bgcolor=%23ffffff"
                                style={{ border: 0 }}
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                scrolling="no"
                                className="rounded-xl w-full h-full"
                                title="Google Calendar Académie d'échecs des calanques"
                            ></iframe>
                        </div>
                    </div>

                </div>
            </section>

            {/* Categories Section */}
            <section className="container mx-auto px-4 py-12 border-t border-slate-200">
                <h2 className="text-3xl font-bold text-slate-800 text-center mb-2">Catégories</h2>
                <p className="text-center text-slate-500 mb-8 font-medium">Cliquez sur une catégorie pour afficher les dates et informations.</p>
                
                <div className="max-w-4xl mx-auto space-y-8">
                    
                    {/* Championnats (Moved to top, separate, not accordions) */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-black text-orange-700 uppercase tracking-wider mb-2 border-b-2 border-orange-100 pb-2">Les Événements Majeurs : Championnats</h3>
                        
                        {/* Highlights (Departemental & Scolaire) */}
                        <div className="grid grid-cols-1 gap-6">
                            <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-1 rounded-2xl shadow-lg transform transition-transform hover:scale-[1.01]">
                                <div className="bg-white p-6 md:p-8 rounded-xl h-full flex flex-col md:flex-row items-start gap-6">
                                    <div className="bg-orange-100 p-4 rounded-full text-orange-600 shrink-0">
                                        <Trophy className="w-10 h-10" />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-slate-800 text-2xl mb-2">Championnat Départemental Jeunes</h4>
                                        <p className="text-orange-600 font-bold mb-4 text-lg">Le tournoi le plus important pour les jeunes de l'académie. On vous y attend nombreux !</p>
                                        <div className="flex flex-col sm:flex-row gap-4 text-slate-700 font-medium">
                                            <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-lg border border-slate-100 shadow-sm">
                                                <CalendarIcon className="w-5 h-5 text-orange-500" />
                                                Du 28 au 31 Octobre
                                            </div>
                                            <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-lg border border-slate-100 shadow-sm">
                                                <MapPin className="w-5 h-5 text-orange-500" />
                                                Berre
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-1 rounded-2xl shadow-lg transform transition-transform hover:scale-[1.01]">
                                <div className="bg-white p-6 md:p-8 rounded-xl h-full flex flex-col md:flex-row items-start gap-6">
                                    <div className="bg-blue-100 p-4 rounded-full text-blue-600 shrink-0">
                                        <Trophy className="w-10 h-10" />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-slate-800 text-2xl mb-2">Championnat Bouches-du-Rhône Scolaire</h4>
                                        <p className="text-blue-600 font-bold mb-4 text-lg">Phase départementale incontournable pour les établissements.</p>
                                        <div className="flex flex-col sm:flex-row gap-4 text-slate-700 font-medium">
                                            <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-lg border border-slate-100 shadow-sm">
                                                <CalendarIcon className="w-5 h-5 text-blue-500" />
                                                13 Jan (Écoles) / 20 Jan (Collèges)
                                            </div>
                                            <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-lg border border-slate-100 shadow-sm">
                                                <MapPin className="w-5 h-5 text-blue-500" />
                                                Aubagne
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Secondary (PACA & France) */}
                        <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden hover:border-slate-300 transition-colors">
                                <div className="absolute top-0 right-0 bg-slate-200 text-slate-600 text-[10px] font-bold px-2 py-1 rounded-bl-lg uppercase tracking-widest flex items-center gap-1">
                                    <AlertCircle className="w-3 h-3" /> Qualification requise
                                </div>
                                <h4 className="font-bold text-slate-700 text-lg mb-3">Championnat PACA</h4>
                                <div className="text-slate-600 text-sm space-y-2 font-medium">
                                    <p className="flex items-center gap-2"><CalendarIcon className="w-4 h-4 text-slate-400"/> Du 2 au 5 Mars</p>
                                    <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-slate-400"/> Lieu inconnu</p>
                                </div>
                            </div>
                            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden hover:border-slate-300 transition-colors">
                                <div className="absolute top-0 right-0 bg-slate-200 text-slate-600 text-[10px] font-bold px-2 py-1 rounded-bl-lg uppercase tracking-widest flex items-center gap-1">
                                    <AlertCircle className="w-3 h-3" /> Qualification requise
                                </div>
                                <h4 className="font-bold text-slate-700 text-lg mb-3">Championnat de France Jeunes</h4>
                                <div className="text-slate-600 text-sm space-y-2 font-medium">
                                    <p className="flex items-center gap-2"><CalendarIcon className="w-4 h-4 text-slate-400"/> Du 18 au 25 Avril</p>
                                    <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-slate-400"/> Vichy</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Accordion for other categories (Interclubs, Region) */}
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        
                        <AccordionItem value="interclub-adultes" className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden px-6">
                            <AccordionTrigger className="text-xl font-bold text-slate-800 hover:no-underline hover:text-blue-600 py-6">
                                Interclubs Adultes
                            </AccordionTrigger>
                            <AccordionContent className="pt-2 pb-6">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                                        <h5 className="font-bold text-slate-800">Cassis 1 N3</h5>
                                        <p className="text-slate-600 text-sm mt-1">Dates à venir...</p>
                                    </div>
                                    <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                                        <h5 className="font-bold text-slate-800">Cassis 2 N5</h5>
                                        <p className="text-slate-600 text-sm mt-1">Dates à venir...</p>
                                    </div>
                                    <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                                        <h5 className="font-bold text-slate-800">Cassis 3 N5</h5>
                                        <p className="text-slate-600 text-sm mt-1">Dates à venir...</p>
                                    </div>
                                    <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                                        <h5 className="font-bold text-slate-800">Cassis 4 N6</h5>
                                        <p className="text-slate-600 text-sm mt-1">Dates à venir...</p>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="interclub-jeunes" className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden px-6">
                            <AccordionTrigger className="text-xl font-bold text-slate-800 hover:no-underline hover:text-blue-600 py-6">
                                Interclubs Jeunes
                            </AccordionTrigger>
                            <AccordionContent className="pt-2 pb-6">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                                        <h5 className="font-bold text-slate-800">Cassis 1 N2</h5>
                                        <p className="text-slate-600 text-sm mt-1">Dates à venir...</p>
                                    </div>
                                    <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                                        <h5 className="font-bold text-slate-800">Cassis 2 N3</h5>
                                        <p className="text-slate-600 text-sm mt-1">Dates à venir...</p>
                                    </div>
                                    <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                                        <h5 className="font-bold text-slate-800">Cassis 3 N3</h5>
                                        <p className="text-slate-600 text-sm mt-1">Dates à venir...</p>
                                    </div>
                                    <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                                        <h5 className="font-bold text-slate-800">Cassis 4 N4</h5>
                                        <p className="text-slate-600 text-sm mt-1">Dates à venir...</p>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="rapide-region" className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden px-6">
                            <AccordionTrigger className="text-xl font-bold text-slate-800 hover:no-underline hover:text-blue-600 py-6">
                                Rapide de la région
                            </AccordionTrigger>
                            <AccordionContent className="pt-2 pb-6">
                                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                                    <p className="text-slate-600">Dates à venir...</p>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="open-region" className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden px-6">
                            <AccordionTrigger className="text-xl font-bold text-slate-800 hover:no-underline hover:text-blue-600 py-6">
                                Open lent de la région
                            </AccordionTrigger>
                            <AccordionContent className="pt-2 pb-6">
                                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                                    <p className="text-slate-600">Dates à venir...</p>
                                </div>
                            </AccordionContent>
                        </AccordionItem>

                    </Accordion>

                    {/* Quick Links / Big Buttons */}
                    <div className="grid sm:grid-cols-2 gap-4 pt-4">
                        <Link href="/blitz-rapide" className="block">
                            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-8 text-xl rounded-xl shadow-sm h-auto">
                                Rapide Cassis Chess Day
                            </Button>
                        </Link>
                        <Link href="/blitz-rapide" className="block">
                            <Button variant="outline" className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-8 text-xl rounded-xl shadow-sm h-auto">
                                Circuit des calanques blitz
                            </Button>
                        </Link>
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
