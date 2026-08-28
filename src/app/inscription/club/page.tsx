import { Navbar } from "@/components/layout/Navbar";

export default function InscriptionClubPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />

      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Inscription au club</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-medium">
            Saison 2026-2027
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14 max-w-5xl">
        <div 
          className="w-full overflow-hidden rounded-xl bg-white shadow-sm"
          dangerouslySetInnerHTML={{
            __html: `<iframe id="haWidget" allowtransparency="true" scrolling="auto" src="https://www.helloasso.com/associations/echecs-cassis/adhesions/cotisations-et-adhesion-club-d-echecs-2026-2027/widget" style="width: 100%; height: 750px; border: none;" onload="window.addEventListener('message', function(e) { const dataHeight = e.data.height; const haWidgetElement = document.getElementById('haWidget'); if (dataHeight > parseFloat(haWidgetElement.height || 0)) { haWidgetElement.height = dataHeight + 'px';}})"></iframe>`
          }}
        />
      </section>
    </div>
  );
}
