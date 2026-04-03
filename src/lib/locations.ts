export type LocationType = "ecole" | "club";
export type LocationVerification = "verified" | "to_confirm";

export interface LocationEntry {
  id: string;
  name: string;
  type: LocationType;
  city: string;
  address: string;
  verification: LocationVerification;
  source: string;
}

export const LOCATION_ENTRIES: LocationEntry[] = [
  {
    id: "centre-culturel-cassis",
    name: "Centre Culturel",
    type: "club",
    city: "Cassis",
    address: "20 avenue du Dr Emmanuel Agostini, 13260 Cassis",
    verification: "verified",
    source: "Centre Culturel Cassis",
  },
  {
    id: "ecole-sainte-claire-cassis",
    name: "École Sainte Claire",
    type: "ecole",
    city: "Cassis",
    address: "41 rue Victor Hugo, 13260 Cassis",
    verification: "verified",
    source: "Ministère de l'Éducation nationale",
  },
  {
    id: "ecole-saint-augustin-carnoux",
    name: "École Saint Augustin",
    type: "ecole",
    city: "Carnoux-en-Provence",
    address: "Avenue Jean Bart Prolongée, 13470 Carnoux-en-Provence",
    verification: "verified",
    source: "Ministère de l'Éducation nationale",
  },
  {
    id: "institution-sainte-trinite-marseille",
    name: "Institution Sainte Trinité",
    type: "ecole",
    city: "Marseille",
    address: "55 avenue de Lattre de Tassigny, 13009 Marseille",
    verification: "verified",
    source: "Ministère de l'Éducation nationale",
  },
  {
    id: "ceyreste-echecs-siege",
    name: "Ceyreste Échecs (siège)",
    type: "club",
    city: "La Ciotat",
    address: "318 chemin de Roumagoua, 13600 La Ciotat",
    verification: "verified",
    source: "Fédération Française des Échecs",
  },
  {
    id: "salle-culture-ceyreste",
    name: "Salle de la Culture",
    type: "club",
    city: "Ceyreste",
    address: "Place Albert Blanc, 13600 Ceyreste",
    verification: "verified",
    source: "Fédération Française des Échecs",
  },
  {
    id: "salle-polyvalente-ceyreste",
    name: "Salle Polyvalente",
    type: "club",
    city: "Ceyreste",
    address: "Chemin des Peupliers, 13600 Ceyreste",
    verification: "to_confirm",
    source: "Référentiels locaux (à confirmer)",
  },
];
