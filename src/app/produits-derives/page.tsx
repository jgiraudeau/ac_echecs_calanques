import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Check, Sparkles, Star, Globe, Users, Download, ExternalLink } from "lucide-react";

const merchandiseLines = [
  {
    title: "Textile officiel du club",
    subtitle: "T-shirt, veste et sweat",
    details:
      "Portés en compétition, à l'entraînement et en animation scolaire. La ligne textile est le support le plus visible de la saison.",
    items: [
      "Présence régulière sur les tournois régionaux et nationaux",
      "Distribution auprès des jeunes des sections scolaires",
      "Support idéal pour valoriser les partenaires officiels",
    ],
    accentClassName: "from-blue-700 to-cyan-600",
  },
  {
    title: "Collection accessoires",
    subtitle: "Gourde, sac, casquette, stylo, pochette",
    details:
      "Des supports utiles au quotidien qui suivent les enfants et les familles à l'école, au club et dans les déplacements.",
    items: [
      "Visibilité de proximité et durable",
      "Présence naturelle dans les usages du quotidien",
      "Déploiement possible sur plusieurs communes",
    ],
    accentClassName: "from-emerald-700 to-teal-600",
  },
  {
    title: "Éditions événementielles",
    subtitle: "Festival et grands tournois",
    details:
      "Des séries dédiées peuvent être produites pour les événements majeurs, avec une mise en avant renforcée des partenaires.",
    items: [
      "Produits dédiés au Festival International",
      "Lots personnalisés pour remises de prix",
      "Activation possible sur stand partenaire",
    ],
    accentClassName: "from-amber-600 to-orange-500",
  },
] as const;

export default function ProduitsDerivesPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />

      <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-20 px-4 text-white">
        <div className="container mx-auto text-center">
          <p className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 mr-2" />
            Produits dérivés
          </p>
          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight">La collection Académie 2026</h1>
          <p className="mt-5 max-w-3xl mx-auto text-lg md:text-xl text-slate-200">
            Les produits dérivés renforcent l&apos;identité du club, soutiennent son développement et offrent des espaces de visibilité
            premium pour nos partenaires.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="inline-flex items-center rounded-full bg-orange-500/20 text-orange-300 border border-orange-400/60 px-4 py-2 text-sm font-semibold">
              <Star className="w-4 h-4 mr-2" />
              66% déductible pour le mécénat
            </span>
            <span className="inline-flex items-center rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm font-semibold">
              <Users className="w-4 h-4 mr-2" />
              200+ licenciés
            </span>
            <span className="inline-flex items-center rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm font-semibold">
              <Globe className="w-4 h-4 mr-2" />
              Présence multi-communes
            </span>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="mb-10">
          <h2 className="text-3xl font-extrabold text-slate-800">Ce que nous pouvons développer</h2>
          <p className="text-slate-600 mt-2 max-w-3xl">
            Cette page peut évoluer avec vos maquettes, les visuels produits et les partenaires associés à chaque support.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {merchandiseLines.map((line) => (
            <article key={line.title} className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
              <div className={`bg-gradient-to-r ${line.accentClassName} px-6 py-5 text-white`}>
                <p className="text-xs uppercase tracking-[0.2em] font-bold text-white/80">{line.subtitle}</p>
                <h3 className="mt-2 text-2xl font-black">{line.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-slate-600">{line.details}</p>
                <ul className="space-y-3 mt-5">
                  {line.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-700">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-slate-800">Prochaine étape recommandée</h3>
          <p className="mt-2 text-slate-600 max-w-3xl">
            Ajouter les mockups réels des produits (t-shirt, veste, accessoires) avec emplacement exact du logo partenaire pour
            faciliter la décision des entreprises.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild variant="outline" className="border-slate-300">
              <a
                href="/documents/proposition-sponsoring-academie-calanques.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ouvrir le dossier PDF
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
            <Button asChild variant="outline" className="border-slate-300">
              <a href="/documents/proposition-sponsoring-academie-calanques.pdf" download>
                Télécharger le PDF
                <Download className="w-4 h-4" />
              </a>
            </Button>
            <Button asChild className="bg-slate-900 hover:bg-slate-800 text-white font-semibold">
              <Link href="/partenaires">Voir les offres partenariat</Link>
            </Button>
            <Button asChild variant="outline" className="border-slate-300">
              <Link href="/contact">Demander une proposition</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
