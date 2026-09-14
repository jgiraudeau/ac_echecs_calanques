import { Facebook, Instagram, ExternalLink } from "lucide-react";

export function SocialHub() {
    return (
        <div className="grid md:grid-cols-2 gap-8">
            {/* Facebook Feed */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden flex flex-col h-[500px]">
                <div className="bg-[#1877F2] p-4 flex items-center justify-between text-white">
                    <div className="flex items-center gap-2">
                        <Facebook className="w-6 h-6" />
                        <h3 className="font-bold">Actualités du Club</h3>
                    </div>
                    <a
                        href="https://www.facebook.com/echecscalanques/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-white text-sm flex items-center gap-1"
                    >
                        Voir sur Facebook <ExternalLink className="w-3 h-3" />
                    </a>
                </div>

                <div className="flex-1 bg-slate-50 relative">
                    <iframe
                        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fechecscalanques%2F&tabs=timeline&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
                        title="Facebook du Club"
                        width="100%"
                        height="100%"
                        style={{ border: 'none', overflow: 'hidden' }}
                        scrolling="yes"
                        frameBorder="0"
                        allowFullScreen={true}
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        className="absolute inset-0 w-full h-full"
                    ></iframe>
                </div>
            </div>

            {/* Instagram Feed */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden flex flex-col h-[500px]">
                <div className="bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] p-4 flex items-center justify-between text-white">
                    <div className="flex items-center gap-2">
                        <Instagram className="w-6 h-6" />
                        <h3 className="font-bold">Instagram du Club</h3>
                    </div>
                    <a
                        href="https://www.instagram.com/echecscalanques/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-white text-sm flex items-center gap-1"
                    >
                        Voir sur Instagram <ExternalLink className="w-3 h-3" />
                    </a>
                </div>

                <div className="flex-1 bg-slate-50 relative flex items-center justify-center p-6 text-center">
                    <div className="space-y-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] rounded-full flex items-center justify-center mx-auto text-white shadow-lg">
                            <Instagram className="w-8 h-8" />
                        </div>
                        <h4 className="font-bold text-slate-800 text-lg">Rejoignez-nous sur Instagram</h4>
                        <p className="text-slate-500 text-sm max-w-xs mx-auto">
                            Découvrez toutes nos dernières photos, vidéos et stories directement sur notre profil officiel.
                        </p>
                        <a
                            href="https://www.instagram.com/echecscalanques/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#f58529] to-[#dd2a7b] text-white px-6 py-3 rounded-full font-bold hover:shadow-lg transition-all hover:scale-105"
                        >
                            Voir les photos <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
