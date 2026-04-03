import { Facebook, Instagram, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

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

            {/* Instagram Promo */}
            <div className="flex flex-col gap-4 h-[500px]">
                <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 rounded-2xl shadow-lg p-1 flex-1">
                    <div className="bg-white rounded-xl p-6 h-full flex flex-col items-center justify-center text-center">
                        <div className="w-16 h-16 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 rounded-2xl p-1 mb-4 shadow-lg rotate-3 hover:rotate-6 transition-transform">
                            <div className="bg-white w-full h-full rounded-xl flex items-center justify-center">
                                <Instagram className="w-8 h-8 text-pink-600" />
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-slate-800 mb-2">@cassisechecs</h3>
                        <p className="text-slate-500 mb-6 text-sm">
                            Rejoignez notre communauté sur Instagram. Photos, résultats et coulisses du club !
                        </p>

                        <Button
                            asChild
                            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold px-8 py-3 rounded-xl shadow-lg shadow-pink-200 transition-all hover:scale-105"
                        >
                            <a href="https://www.instagram.com/cassisechecs/" target="_blank" rel="noopener noreferrer">
                                S'abonner
                            </a>
                        </Button>
                    </div>
                </div>

                {/* Mini Grid Simulation (Static for now, links to IG) */}
                <div className="grid grid-cols-3 gap-2 h-1/3">
                    {[1, 2, 3].map((i) => (
                        <a
                            key={i}
                            href="https://www.instagram.com/cassisechecs/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-full bg-slate-100 rounded-lg overflow-hidden relative group"
                        >
                            <div className={`w-full h-full bg-slate-200 group-hover:opacity-80 transition-opacity ${i === 1 ? 'bg-blue-100' : i === 2 ? 'bg-orange-100' : 'bg-green-100'} bg-cover bg-center`}
                                style={{ backgroundImage: `url('https://images.unsplash.com/photo-${i === 1 ? '1529699213344-8a8820621094' : i === 2 ? '1586165368502-1bad197a6461' : '1523875194681-bedd468c58bf'}?w=300&h=300&fit=crop')` }}
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                                <Instagram className="w-6 h-6 text-white drop-shadow-md" />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
