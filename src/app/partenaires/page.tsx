import { Navbar } from "@/components/layout/Navbar";
import { Check, Star, Heart, Users, Globe, ArrowUpRight, Sparkles, Mail, Phone, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { institutionalSponsors, privateSponsors, sponsorCategoryLabel } from "@/lib/sponsors";
import { cn } from "@/lib/utils";

const partnershipOffers = [
  {
    title: "Partenaire T-shirt",
    budget: "3000€ avant déduction",
    realCost: "1020€ de coût réel",
    badge: "300+ t-shirts distribués/an",
    description:
      "Présence continue sur nos équipes Jeunes et Adultes, en compétition comme dans les écoles de notre territoire.",
    highlights: [
      "Visibilité hebdomadaire sur les compétitions",
      "Présence dans les écoles de Cassis, La Ciotat, Ceyreste, Carnoux et Marseille",
      "Logo intégré à un support porté toute l'année",
    ],
    cardClassName: "border-blue-200",
    headerClassName: "bg-gradient-to-r from-blue-700 to-cyan-600",
  },
  {
    title: "Partenaire Veste / Sweat",
    budget: "3000€ avant déduction",
    realCost: "1020€ de coût réel",
    badge: "Exclusivité",
    description:
      "Équipement officiel porté sur presque tous les week-ends de compétition, par les joueurs et les animateurs.",
    highlights: [
      "Sponsor exclusif sur la veste officielle",
      "Visibilité en tournois et en animation scolaire",
      "Mise en avant sur le site et les réseaux du club",
    ],
    cardClassName: "border-violet-200",
    headerClassName: "bg-gradient-to-r from-violet-700 to-fuchsia-600",
  },
  {
    title: "Partenaire Accessoire",
    budget: "3000€ avant déduction",
    realCost: "1020€ de coût réel",
    badge: "Exclusivité",
    description:
      "Gourdes, sacs, casquettes, stylos ou pochettes: votre marque accompagne le quotidien de nos licenciés.",
    highlights: [
      "Présence locale visible dans les écoles et clubs",
      "Supports utiles tout au long de la saison",
      "Image de proximité auprès des familles",
    ],
    cardClassName: "border-emerald-200",
    headerClassName: "bg-gradient-to-r from-emerald-700 to-teal-600",
  },
  {
    title: "Partenariat Événementiel",
    budget: "À définir selon options",
    realCost: "Configuration sur mesure",
    badge: "Festival & tournois",
    description:
      "Composez votre présence: supports officiels, cérémonie, remise de prix, prise de parole et espace d'exposition.",
    highlights: [
      "Logo sur affiches, programmes et communications",
      "Présence visible pendant l'ouverture et la clôture",
      "Activation terrain avec espace dédié",
    ],
    cardClassName: "border-amber-200",
    headerClassName: "bg-gradient-to-r from-amber-600 to-orange-500",
  },
  {
    title: "Partenariat Mobilité",
    budget: "Don en nature",
    realCost: "66% déductible de la valeur locative",
    badge: "Déplacements nationaux",
    description:
      "Votre marque accompagne nos équipes partout en France avec une visibilité forte sur nos trajets interclubs et championnats.",
    highlights: [
      "Mentions et publications dédiées sur les déplacements",
      "Photos d'équipes avec le minibus et résultats sportifs",
      "Présence sur site, stories et contenus coulisses",
    ],
    cardClassName: "border-slate-300",
    headerClassName: "bg-gradient-to-r from-slate-900 to-slate-700",
  },
] as const;

export default function PartenairesPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />

      <div className="bg-gradient-to-r from-slate-900 to-slate-800 pt-20 pb-24 text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">Devenez Partenaire</h1>
        <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Associez votre image à un projet éducatif et sportif en pleine croissance sur le territoire des Calanques.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/20 text-orange-300 border border-orange-400/60 font-bold text-sm">
            <Star className="w-4 h-4 mr-2" /> 66% déductible d&apos;impôts
          </span>
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-slate-100 border border-white/20 font-semibold text-sm">
            200+ licenciés
          </span>
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-slate-100 border border-white/20 font-semibold text-sm">
            5000 visiteurs/an
          </span>
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-slate-100 border border-white/20 font-semibold text-sm">
            1500+ abonnés réseaux sociaux
          </span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 -mt-10 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-20 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Image RSE forte</h3>
            <p className="text-slate-600">
              Associez votre marque à un club reconnu d&apos;utilité publique pour son impact éducatif, social et sportif.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-600">
              <Globe className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Rayonnement régional et international</h3>
            <p className="text-slate-600">
              Festival international, compétitions nationales, écoles et vie locale: votre visibilité est multi-canal.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Avantage fiscal</h3>
            <p className="text-slate-600">
              <strong>66% de votre don</strong> est déductible. Un budget de 3000€ représente un coût réel d&apos;environ 1020€.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <div className="rounded-3xl border border-emerald-200 bg-gradient-to-r from-emerald-50 to-cyan-50 p-6 md:p-8 mb-8">
            <p className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-700 border border-emerald-200">
              <Sparkles className="w-4 h-4 mr-2" />
              Sponsors officiels
            </p>
            <h2 className="mt-4 text-2xl md:text-3xl font-extrabold text-slate-800">
              Merci à nos partenaires institutionnels et privés
            </h2>
            <p className="mt-2 text-slate-600 max-w-3xl">
              Leur soutien nous permet d&apos;accélérer le développement sportif, éducatif et territorial de l&apos;Académie.
            </p>
          </div>

          <div className="grid xl:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-800 mb-1">Partenaires institutionnels</h3>
              <p className="text-sm text-slate-500 mb-5">Collectivités et institutions qui soutiennent le projet club.</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {institutionalSponsors.map((sponsor) => (
                  <Link
                    key={sponsor.id}
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "group rounded-2xl border border-slate-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-md",
                      sponsor.cardClassName
                    )}
                  >
                    <span className="inline-flex rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-slate-600">
                      {sponsorCategoryLabel[sponsor.category]}
                    </span>
                    <div className="mt-3 h-16 flex items-center justify-center">
                      <Image
                        src={sponsor.logoSrc}
                        alt={`Logo ${sponsor.name}`}
                        width={180}
                        height={80}
                        className={cn("h-auto max-h-[58px] w-auto object-contain", sponsor.logoClassName)}
                      />
                    </div>
                    <div className="mt-3 flex items-start justify-between gap-2">
                      <div>
                        <p className={cn("font-bold text-slate-800 text-sm", sponsor.textClassName)}>{sponsor.name}</p>
                        <p className={cn("text-xs text-slate-500", sponsor.textClassName ? "text-slate-300" : "")}>
                          {sponsor.tagline}
                        </p>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-700 shrink-0 mt-0.5" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-800 mb-1">Sponsors privés</h3>
              <p className="text-sm text-slate-500 mb-5">Entreprises engagées auprès de nos actions et événements.</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {privateSponsors.map((sponsor) => (
                  <Link
                    key={sponsor.id}
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "group relative rounded-2xl border border-slate-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-md",
                      sponsor.cardClassName
                    )}
                  >
                    {sponsor.isNew ? (
                      <span className="absolute -top-2 right-3 rounded-full bg-[#00338d] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                        Nouveau
                      </span>
                    ) : null}

                    <span className="inline-flex rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-slate-600">
                      {sponsorCategoryLabel[sponsor.category]}
                    </span>
                    <div className="mt-3 h-16 flex items-center justify-center">
                      <Image
                        src={sponsor.logoSrc}
                        alt={`Logo ${sponsor.name}`}
                        width={180}
                        height={80}
                        className={cn("h-auto max-h-[58px] w-auto object-contain", sponsor.logoClassName)}
                      />
                    </div>
                    <div className="mt-3 flex items-start justify-between gap-2">
                      <div>
                        <p className={cn("font-bold text-slate-800 text-sm", sponsor.textClassName)}>{sponsor.name}</p>
                        <p className={cn("text-xs text-slate-500", sponsor.textClassName ? "text-slate-300" : "")}>
                          {sponsor.tagline}
                        </p>
                      </div>
                      <ArrowUpRight
                        className={cn(
                          "w-4 h-4 text-slate-400 shrink-0 mt-0.5",
                          sponsor.textClassName ? "text-slate-200" : "group-hover:text-slate-700"
                        )}
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-5">
          <div>
            <h2 className="text-3xl font-bold text-slate-800">Nos offres de partenariat 2026</h2>
            <p className="text-slate-600 mt-2 max-w-3xl">
              Offre textile, accessoires, événementiel et mobilité: choisissez le support le plus adapté à votre objectif.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="outline" className="border-slate-300">
              <Link href="/produits-derives">Voir la page Produits dérivés</Link>
            </Button>
            <Button asChild variant="outline" className="border-slate-300">
              <a href="/documents/proposition-sponsoring-academie-calanques.pdf" download>
                Télécharger le dossier PDF
                <Download className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {partnershipOffers.map((offer) => (
            <article
              key={offer.title}
              className={cn("bg-white rounded-3xl shadow-lg overflow-hidden border flex flex-col", offer.cardClassName)}
            >
              <div className={cn("p-6 text-white", offer.headerClassName)}>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/85">{offer.badge}</p>
                <h3 className="mt-2 text-2xl font-black">{offer.title}</h3>
                <div className="mt-5 rounded-xl bg-white/15 backdrop-blur px-4 py-3">
                  <p className="text-xs uppercase tracking-wide text-white/80">Budget</p>
                  <p className="text-lg font-extrabold">{offer.budget}</p>
                  <p className="text-sm text-white/90 mt-1">{offer.realCost}</p>
                </div>
              </div>

              <div className="p-6 flex-1">
                <p className="text-slate-600">{offer.description}</p>
                <ul className="space-y-3 mt-5">
                  {offer.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-700">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-slate-50 border-t border-slate-100">
                <Button asChild className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold">
                  <Link href="/contact">Demander ce partenariat</Link>
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 bg-slate-900 rounded-3xl p-8 md:p-10 text-white">
          <h3 className="text-2xl md:text-3xl font-extrabold">Contacts partenariat</h3>
          <p className="text-slate-300 mt-2 max-w-3xl">
            Nous pouvons adapter chaque formule en fonction de votre entreprise, de votre budget et de vos objectifs de visibilité.
          </p>
          <div className="grid md:grid-cols-2 gap-5 mt-8">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-wider text-slate-300">Directeur</p>
              <p className="text-xl font-bold mt-1">Quentin Massardo</p>
              <a href="tel:+33637602253" className="mt-3 inline-flex items-center gap-2 text-slate-100 hover:text-white">
                <Phone className="w-4 h-4" />
                06 37 60 22 53
              </a>
              <a
                href="mailto:communication@cassisechecs.fr"
                className="mt-2 inline-flex items-center gap-2 text-slate-100 hover:text-white"
              >
                <Mail className="w-4 h-4" />
                communication@cassisechecs.fr
              </a>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-wider text-slate-300">Responsable partenariat</p>
              <p className="text-xl font-bold mt-1">Julie Ollier</p>
              <a href="tel:+33777317874" className="mt-3 inline-flex items-center gap-2 text-slate-100 hover:text-white">
                <Phone className="w-4 h-4" />
                07 77 31 78 74
              </a>
              <a href="/contact" className="mt-2 inline-flex items-center gap-2 text-orange-300 hover:text-orange-200 font-semibold">
                <Mail className="w-4 h-4" />
                Passer par le formulaire de contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
