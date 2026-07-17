"use client";

import { Navbar } from "@/components/layout/Navbar";
import { ShoppingBag, Heart, ExternalLink } from "lucide-react";

export default function BoutiqueClubPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0F4C81] via-[#1a6bb5] to-[#0a3560] py-20 px-4 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-72 h-72 rounded-full bg-orange-400 blur-3xl" />
          <div className="absolute bottom-0 left-10 w-64 h-64 rounded-full bg-blue-300 blur-3xl" />
        </div>
        <div className="container mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-6">
            <ShoppingBag className="w-4 h-4" />
            Boutique officielle
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-5">
            Boutique du Club
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-blue-100 leading-relaxed">
            Soutenez l&apos;Académie Échecs Calanques en arborant fièrement les couleurs du club.
            Chaque achat contribue directement au développement des activités et à la formation des jeunes joueurs.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/40 text-orange-300 text-sm font-semibold px-4 py-2 rounded-full">
            <Heart className="w-4 h-4 fill-orange-400 text-orange-400" />
            Paiement sécurisé via HelloAsso
          </div>
        </div>
      </section>

      {/* Widget HelloAsso */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#0F4C81] flex items-center justify-center">
                <ShoppingBag className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="font-bold text-slate-800 text-sm">Objets du club</p>
                <p className="text-xs text-slate-500">Académie Échecs Calanques · via HelloAsso</p>
              </div>
            </div>
            <a
              href="https://www.helloasso.com/associations/echecs-cassis/boutiques/objet-club"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F4C81] hover:underline"
            >
              Ouvrir en plein écran
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="p-2">
            <iframe
              id="haWidget"
              allowTransparency={true}
              scrolling="auto"
              src="https://www.helloasso.com/associations/echecs-cassis/boutiques/objet-club/widget"
              style={{ width: "100%", height: "750px", border: "none" }}
              title="Boutique du club — Académie Échecs Calanques"
              onLoad={() => {
                window.addEventListener("message", function (e: MessageEvent) {
                  const dataHeight = (e.data as { height?: number })?.height;
                  const haWidgetElement = document.getElementById("haWidget") as HTMLIFrameElement | null;
                  if (haWidgetElement && dataHeight && dataHeight > parseFloat(haWidgetElement.style.height || "0")) {
                    haWidgetElement.style.height = dataHeight + "px";
                  }
                });
              }}
            />
          </div>
        </div>

        {/* Note bas de page */}
        <p className="text-center text-xs text-slate-400 mt-6">
          Les paiements sont traités de manière sécurisée par{" "}
          <a
            href="https://www.helloasso.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-slate-600"
          >
            HelloAsso
          </a>
          . Pour toute question, contactez-nous à{" "}
          <a href="mailto:communication@echecs-calanques.fr" className="underline hover:text-slate-600">
            communication@echecs-calanques.fr
          </a>
          .
        </p>
      </section>

      <footer className="bg-slate-950 text-slate-400 py-8 text-center text-sm">
        <p>© 2026 Académie Échecs Calanques · <a href="mailto:communication@echecs-calanques.fr" className="hover:text-white transition-colors">communication@echecs-calanques.fr</a></p>
      </footer>
    </div>
  );
}
