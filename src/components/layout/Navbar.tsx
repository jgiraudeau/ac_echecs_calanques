"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function Navbar() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const isLinkActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

    const navLinks = [
        { href: "/club", label: "Le Club" },
        { href: "/activites", label: "Cours & Lieux" },
        { href: "/stages", label: "Stages" },
        { href: "/blitz-rapide", label: "Blitz & Rapide" },
        { href: "/ffe", label: "Résultats FFE" },
        { href: "/partenaires", label: "Partenaires" },
        { href: "/produits-derives", label: "Boutique" },
        { href: "/agenda", label: "Agenda" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md transition-all duration-300">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group shrink-0">
                    <Image
                        src="/logo.png"
                        alt="Logo Académie d'échecs des calanques"
                        width={44}
                        height={44}
                        priority
                        unoptimized
                        className="object-contain"
                    />
                    <span className="text-sm sm:text-base lg:text-base xl:text-lg font-bold tracking-tight text-primary whitespace-nowrap">
                        Académie d&apos;échecs des calanques
                    </span>
                </Link>


                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-3 xl:gap-5">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-xs xl:text-sm font-medium transition-colors relative py-1 whitespace-nowrap",
                                isLinkActive(link.href)
                                    ? "text-primary font-bold"
                                    : "text-slate-600 hover:text-primary"
                            )}
                        >
                            {link.label}
                            {isLinkActive(link.href) && (
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent rounded-full animate-in fade-in zoom-in duration-300" />
                            )}
                        </Link>
                    ))}
                    <Button asChild size="sm" className="bg-accent hover:bg-accent/90 text-white font-semibold shadow-lg shadow-accent/20 hover:scale-105 transition-transform text-xs xl:text-sm px-3 py-1.5 h-8">
                        <Link href="/inscription">S&apos;inscrire</Link>
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden border-t bg-white absolute w-full left-0 shadow-lg animate-in slide-in-from-top-5 duration-200">
                    <div className="flex flex-col p-4 gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                    "text-base font-medium px-4 py-2 rounded-md transition-colors",
                                    isLinkActive(link.href)
                                        ? "bg-primary/10 text-primary"
                                        : "text-slate-600 hover:bg-slate-50"
                                )}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Button asChild className="w-full bg-accent hover:bg-accent/90 text-white">
                            <Link href="/inscription" onClick={() => setIsMobileMenuOpen(false)}>
                                S&apos;inscrire
                            </Link>
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
}
