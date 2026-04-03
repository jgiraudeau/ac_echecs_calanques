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
        { href: "/lieux", label: "Où jouer ?" },
        { href: "/activites", label: "Cours et Stages" },
        { href: "/ffe", label: "Résultats FFE" },
        { href: "/partenaires", label: "Partenaires" },
        { href: "/agenda", label: "Agenda" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md transition-all duration-300">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <Image
                        src="/logo.png"
                        alt="Logo Académie d'Échecs des Calanques"
                        width={44}
                        height={44}
                        className="object-contain"
                    />
                    <span className="text-xl font-bold tracking-tight text-primary">
                        Académie Echecs Calanques
                    </span>
                </Link>


                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors relative py-1",
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
                    <Button asChild className="bg-accent hover:bg-accent/90 text-white font-semibold shadow-lg shadow-accent/20 hover:scale-105 transition-transform">
                        <Link href="/inscription">S&apos;inscrire</Link>
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden border-t bg-white absolute w-full left-0 shadow-lg animate-in slide-in-from-top-5 duration-200">
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
