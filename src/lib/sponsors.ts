export type SponsorCategory = "institutionnel" | "partenaire_prive";

export type Sponsor = {
  id: string;
  name: string;
  tagline: string;
  website: string;
  logoSrc: string;
  category: SponsorCategory;
  isNew?: boolean;
  logoClassName?: string;
  cardClassName?: string;
  textClassName?: string;
};

export const sponsorCategoryLabel: Record<SponsorCategory, string> = {
  institutionnel: "Institutionnel",
  partenaire_prive: "Partenaire privé",
};

export const clubSponsors: Sponsor[] = [
  {
    id: "ville-de-cassis",
    name: "Ville de Cassis",
    tagline: "Collectivité territoriale",
    website: "https://www.cassis.fr",
    logoSrc: "/sponsors/ville-de-cassis.svg",
    category: "institutionnel",
    logoClassName: "max-h-[72px]",
  },
  {
    id: "departement13",
    name: "Département 13",
    tagline: "Partenaire institutionnel",
    website: "https://www.departement13.fr",
    logoSrc: "/sponsors/departement13.png",
    category: "institutionnel",
    logoClassName: "max-h-[48px]",
  },
  {
    id: "region-sud",
    name: "Région Sud",
    tagline: "Partenaire institutionnel",
    website: "https://www.maregionsud.fr",
    logoSrc: "/sponsors/region-sud.svg",
    category: "institutionnel",
    logoClassName: "max-h-[54px]",
  },
  {
    id: "ffe",
    name: "Fédération Française des Échecs",
    tagline: "Fédération sportive",
    website: "https://www.echecs.asso.fr",
    logoSrc: "/sponsors/ffe.png",
    category: "institutionnel",
    logoClassName: "max-h-[54px]",
  },
  {
    id: "ans",
    name: "Agence nationale du Sport",
    tagline: "Soutien de l'État",
    website: "https://www.agencedusport.fr",
    logoSrc: "/sponsors/agence-nationale-du-sport.svg",
    category: "institutionnel",
    logoClassName: "max-h-[56px]",
  },
  {
    id: "roches-blanches",
    name: "Les Roches Blanches",
    tagline: "Partenaire hôtelier à Cassis",
    website: "https://www.roches-blanches-cassis.com",
    logoSrc: "/sponsors/roches-blanches.svg",
    category: "partenaire_prive",
    cardClassName: "bg-slate-900 border-slate-700",
    textClassName: "text-slate-100",
    logoClassName: "max-h-[46px]",
  },
  {
    id: "intermarche",
    name: "Intermarché",
    tagline: "Partenaire commerce local",
    website: "https://www.intermarche.com",
    logoSrc: "/sponsors/intermarche.svg",
    category: "partenaire_prive",
    logoClassName: "max-h-[46px]",
  },
  {
    id: "cultura-aubagne",
    name: "Cultura Aubagne",
    tagline: "Nouveau sponsor culturel",
    website: "https://www.cultura.com",
    logoSrc: "/sponsors/cultura-aubagne.png",
    category: "partenaire_prive",
    isNew: true,
    cardClassName: "border-[#00338d]/35 bg-[#00338d]/5",
    logoClassName: "max-h-[50px]",
  },
  {
    id: "ville-de-carnoux",
    name: "Ville de Carnoux-en-Provence",
    tagline: "Collectivité territoriale",
    website: "https://www.carnoux-en-provence.com/",
    logoSrc: "/sponsors/ville-de-carnoux.svg",
    category: "institutionnel",
    logoClassName: "max-h-[64px]",
  },
  {
    id: "ville-de-la-ciotat",
    name: "Ville de La Ciotat",
    tagline: "Collectivité territoriale",
    website: "https://www.laciotat.com/",
    logoSrc: "/sponsors/ville-de-la-ciotat.svg",
    category: "institutionnel",
    logoClassName: "max-h-[64px]",
  },
  {
    id: "ville-de-ceyreste",
    name: "Ville de Ceyreste",
    tagline: "Collectivité territoriale",
    website: "https://www.ceyreste.fr/",
    logoSrc: "/sponsors/ville-de-ceyreste.svg",
    category: "institutionnel",
    logoClassName: "max-h-[64px]",
  },
  {
    id: "appart-hotel-saint-esteve",
    name: "Appart Hôtel Saint Estève",
    tagline: "Partenaire hôtelier à La Ciotat",
    website: "https://www.apparthotel-laciotat.com/fr",
    logoSrc: "/sponsors/appart-hotel-saint-esteve.png",
    category: "partenaire_prive",
    cardClassName: "bg-slate-50 border-slate-200",
    logoClassName: "max-h-[50px]",
  },
];

export const institutionalSponsors = clubSponsors.filter(
  (sponsor) => sponsor.category === "institutionnel"
);

export const privateSponsors = clubSponsors.filter(
  (sponsor) => sponsor.category === "partenaire_prive"
);
