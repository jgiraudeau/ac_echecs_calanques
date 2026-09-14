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
    title: "Rapide de Hyères",
    type: "Tournoi",
    date: "2026-09-20",
    time: "Toute la journée",
    location: "Hyères",
    color: "orange"
  },
  {
    id: "2",
    title: "1er Cassis Chess Day",
    type: "Tournoi",
    date: "2026-09-26",
    time: "Toute la journée",
    location: "À définir",
    color: "purple"
  },
  {
    id: "3",
    title: "Rapide de Martigues",
    type: "Tournoi",
    date: "2026-10-04",
    time: "Toute la journée",
    location: "Martigues",
    color: "blue"
  }
];
