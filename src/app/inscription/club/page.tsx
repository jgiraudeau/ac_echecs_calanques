import { Navbar } from "@/components/layout/Navbar";
import { HelloAssoWidget } from "@/components/HelloAssoWidget";
import { AlertCircle } from "lucide-react";

export default function InscriptionClubPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white py-24 lg:py-32">
        {/* Ambient glow effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-700/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 shadow-sm backdrop-blur-md text-sm font-medium text-blue-200 mb-8 transition-all hover:bg-white/10 cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Saison 2026-2027
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 drop-shadow-sm">
            Inscriptions au club
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-200/80 max-w-2xl mx-auto font-light leading-relaxed">
            Rejoignez le club pour cette nouvelle saison. Développez votre jeu, participez aux tournois et partagez notre passion des échecs.
          </p>
        </div>
        
        {/* Decorative blur orbs */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
      </section>

      <section className="container mx-auto px-4 py-14 max-w-5xl space-y-12">
        <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col sm:flex-row items-start gap-4">
          <div className="bg-amber-100 text-amber-700 p-3 rounded-xl shrink-0">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div className="space-y-2 text-slate-800">
            <h2 className="text-lg md:text-xl font-extrabold text-amber-950">
              Information importante : carte d&apos;adhésion obligatoire selon le lieu de pratique
            </h2>
            <p className="text-sm md:text-base text-slate-700 leading-relaxed">
              En complément de votre inscription au club :
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm md:text-base text-slate-700">
              <li>
                Les personnes se rendant au club de <strong>Cassis</strong> doivent <strong>impérativement prendre la carte du Centre Culturel</strong>.
              </li>
              <li>
                Les personnes se rendant au club de <strong>Carnoux</strong> doivent <strong>impérativement prendre la carte du COC</strong>.
              </li>
            </ul>
          </div>
        </div>

        <HelloAssoWidget url="https://www.helloasso.com/associations/echecs-cassis/adhesions/cotisations-et-adhesion-club-d-echecs-2026-2027/widget" />
      </section>
    </div>
  );
}
