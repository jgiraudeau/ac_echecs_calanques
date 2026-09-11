export type Match = {
    date: string;
    time: string;
    white: string;
    black: string;
    location: string;
};

export type TeamCalendar = {
    teamName: string;
    division: string;
    matches: Match[];
};

export const INTERCLUBS_ADULTES: TeamCalendar[] = [
    {
        teamName: "AE des Calanques 1",
        division: "Nationale 3",
        matches: [
            { white: "C.E.M.C. Monaco", black: "Cassis", date: "2026-10-11", time: "14:15", location: "Cassis" },
            { white: "Cassis", black: "Martigues", date: "2026-11-07", time: "14:15", location: "Martigues" },
            { white: "Cassis", black: "Frejus Saint Raphael", date: "2026-11-08", time: "14:15", location: "Cassis" },
            { white: "Antibes", black: "Cassis", date: "2026-11-29", time: "14:15", location: "Cassis" },
            { white: "Cassis", black: "Nice Riviera Chess Club", date: "2026-12-13", time: "14:15", location: "Nice" },
            { white: "Brignoles", black: "Cassis", date: "2027-01-17", time: "14:15", location: "Brignoles" },
            { white: "Cassis", black: "Gap", date: "2027-01-31", time: "14:15", location: "Gap" },
            { white: "Cassis", black: "La Crau", date: "2027-03-13", time: "14:15", location: "La Crau" },
            { white: "Allauch Hay Chess 2", black: "Cassis", date: "2027-03-14", time: "14:15", location: "Plan de Cuques" }
        ]
    },
    {
        teamName: "AE des Calanques 2",
        division: "Nationale 5",
        matches: [
            { white: "La Garde 1", black: "Cassis 2", date: "2026-10-11", time: "14:15", location: "La Garde" },
            { white: "Hyeres 4", black: "Cassis 2", date: "2026-11-08", time: "14:15", location: "Hyères" },
            { white: "Cassis 2", black: "Toulon 2", date: "2026-11-29", time: "14:15", location: "Cassis" },
            { white: "Cassis 2", black: "La Crau 2", date: "2026-12-13", time: "14:15", location: "Cassis" },
            { white: "Cassis 2", black: "Marseille 7", date: "2027-01-17", time: "14:15", location: "Cassis" },
            { white: "Allauch 4", black: "Cassis 2", date: "2027-01-31", time: "14:15", location: "Cassis" },
            { white: "Aix 6", black: "Cassis 2", date: "2027-03-14", time: "14:15", location: "Aix" }
        ]
    },
    {
        teamName: "AE des Calanques 3",
        division: "Nationale 5",
        matches: [
            { white: "Ae des Calanques 3", black: "Sanary Echecs 3", date: "2026-10-11", time: "14:15", location: "Cassis" },
            { white: "Gemenos Echecs 1", black: "Ae des Calanques 3", date: "2026-11-08", time: "14:15", location: "Gémenos" },
            { white: "Ae des Calanques 3", black: "Les Trois Tours Martigues 2", date: "2026-11-29", time: "14:15", location: "Martigues" },
            { white: "Aix en Provence 4", black: "Ae des Calanques 3", date: "2026-12-13", time: "14:15", location: "Aix en Provence" },
            { white: "Ae des Calanques 3", black: "Marseille Echecs 8", date: "2027-01-17", time: "14:15", location: "Cassis" },
            { white: "Ae des Calanques 3", black: "Marseille Echecs 9", date: "2027-01-31", time: "14:15", location: "Cassis" },
            { white: "La Ciotat Echecs 1", black: "Ae des Calanques 3", date: "2027-03-14", time: "14:15", location: "La Ciotat" }
        ]
    }
];

export function generateICS(team: TeamCalendar): string {
    const lines = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        `PRODID:-//AE des Calanques//${team.teamName}//FR`,
        "CALSCALE:GREGORIAN"
    ];

    team.matches.forEach(match => {
        // format date like 20261011T141500
        const dateStr = match.date.replace(/-/g, "");
        const timeStr = match.time.replace(":", "") + "00";
        // Calculate end time (+4 hours)
        const [hours, minutes] = match.time.split(":");
        const endHours = String((parseInt(hours) + 4) % 24).padStart(2, '0');
        const endTimeStr = endHours + minutes + "00";

        lines.push(
            "BEGIN:VEVENT",
            `DTSTART;TZID=Europe/Paris:${dateStr}T${timeStr}`,
            `DTEND;TZID=Europe/Paris:${dateStr}T${endTimeStr}`,
            `SUMMARY:Interclubs ${team.division} - ${match.white} vs ${match.black}`,
            `LOCATION:${match.location}`,
            `DESCRIPTION:Rencontre Interclubs ${team.division} pour l'équipe ${team.teamName}.\\nBlancs : ${match.white}\\nNoirs : ${match.black}`,
            "END:VEVENT"
        );
    });

    lines.push("END:VCALENDAR");
    return lines.join("\\r\\n");
}
