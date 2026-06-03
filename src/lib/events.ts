export interface ClubEvent {
  id: string;
  title: string;
  type: "Tournoi" | "Stage" | "Vie du Club" | "Match" | "Autre";
  date: string; // Date au format YYYY-MM-DD
  time: string; // ex: "14:00 - 18:00"
  location: string;
  color: "orange" | "purple" | "blue" | "green";
}

// Liste des événements à la une pour la promotion
export const UPCOMING_EVENTS: ClubEvent[] = [
  {
    id: "1",
    title: "Rapide de Cassis",
    type: "Tournoi",
    date: "2026-06-12",
    time: "14:00 - 18:00",
    location: "Centre Culturel, Cassis",
    color: "orange"
  },
  {
    id: "2",
    title: "Perfectionnement Tactique",
    type: "Stage",
    date: "2026-06-16",
    time: "10:00 - 16:00",
    location: "Salle du Club, La Ciotat",
    color: "purple"
  },
  {
    id: "3",
    title: "Assemblée Générale",
    type: "Vie du Club",
    date: "2026-06-24",
    time: "18:00 - 20:00",
    location: "Salle Polyvalente, Carnoux",
    color: "blue"
  }
];
