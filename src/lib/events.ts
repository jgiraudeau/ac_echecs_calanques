export interface ClubEvent {
  id: string;
  title: string;
  type: "Tournoi" | "Stage" | "Vie du Club" | "Match" | "Autre";
  date: string; // Date au format YYYY-MM-DD
  time: string; // ex: "14:00 - 18:00"
  location: string;
  color: "orange" | "purple" | "blue" | "green";
  note?: string;
}

// Liste des événements à la une pour la promotion
export const UPCOMING_EVENTS: ClubEvent[] = [
  {
    id: "1",
    title: "Tournoi Scolaire Zonal (Canton de La Ciotat)",
    type: "Tournoi",
    date: "2026-12-05",
    time: "09:30 - 12:00",
    location: "Centre Culturel, Cassis",
    color: "orange",
    note: "Réservé aux écoles",
  },
  {
    id: "2",
    title: "Rapide des Calanques",
    type: "Tournoi",
    date: "2026-12-19",
    time: "09:30 - 15:30",
    location: "Centre Culturel, Cassis",
    color: "blue",
  },
  {
    id: "3",
    title: "Circuit Blitz des Calanques",
    type: "Tournoi",
    date: "2027-02-13",
    time: "09:30 - 11:45",
    location: "Salle Polyvalente, Ceyreste",
    color: "orange",
  },
  {
    id: "4",
    title: "Rapide des Calanques",
    type: "Tournoi",
    date: "2027-03-27",
    time: "09:30 - 15:30",
    location: "Centre Culturel, Cassis",
    color: "blue",
  },
  {
    id: "5",
    title: "Rapide des Calanques",
    type: "Tournoi",
    date: "2027-04-10",
    time: "09:30 - 15:30",
    location: "Centre Culturel, Cassis",
    color: "blue",
  },
  {
    id: "6",
    title: "Circuit Blitz des Calanques",
    type: "Tournoi",
    date: "2027-05-29",
    time: "09:30 - 11:45",
    location: "Centre Culturel, Cassis",
    color: "orange",
  },
];
