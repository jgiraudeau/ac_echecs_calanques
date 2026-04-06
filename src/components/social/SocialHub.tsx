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
                        href="https://www.facebook.com/Cassisechecs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-white text-sm flex items-center gap-1"
                    >
                        Voir sur Facebook <ExternalLink className="w-3 h-3" />
                    </a>
                </div>

                <div className="flex-1 bg-slate-50 relative">
                    <iframe
                        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCassisechecs&tabs=timeline&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
                        width="100%"
                        height="100%"
                        style={{ border: 'none', overflow: 'hidden' }}
                        scrolling="no"
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
                        href="https://www.instagram.com/cassisechecs/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-white text-sm flex items-center gap-1"
                    >
                        Voir sur Instagram <ExternalLink className="w-3 h-3" />
                    </a>
                </div>

                <div className="flex-1 bg-slate-50 relative">
                    <iframe
                        src="https://www.instagram.com/p/DRhQ349Dvp3/embed"
                        title="Publication Instagram @cassisechecs"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        scrolling="yes"
                        className="absolute inset-0 w-full h-full"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}
