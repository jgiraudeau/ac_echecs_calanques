import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, MapPin, Clock } from "lucide-react";
import { UPCOMING_EVENTS, ClubEvent } from "@/lib/events";

export default function AgendaPage() {
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
                                <CalendarIcon className="w-6 h-6 text-accent" />
                                À la Une
                            </h2>
                        </div>

                        {UPCOMING_EVENTS.map((event) => {
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

                        {UPCOMING_EVENTS.length === 0 && (
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
                                src="https://calendar.google.com/calendar/embed?src=c_131af009580aa86df100876b6cb622aaa54b3a95decc8dddf16ed2a3437ccb49%40group.calendar.google.com&src=fr.french%23holiday%40group.v.calendar.google.com&ctz=Europe%2FParis&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0&showTz=1&wkst=2&bgcolor=%23ffffff"
                                style={{ border: 0 }}
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                scrolling="no"
                                className="rounded-xl w-full h-full"
                                title="Google Calendar Académie Echecs Calanques"
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
