import Link from "next/link";
import { Castle, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="bg-primary/10 p-2 rounded-lg text-primary">
                        <Castle className="h-6 w-6" />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-primary">
                        AC Echecs Calanques
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6">
                    <Link href="/club" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
                        Le Club
                    </Link>
                    <Link href="/activites" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
                        Activités
                    </Link>
                    <Link href="/agenda" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
                        Agenda
                    </Link>
                    <Link href="/contact" className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
                        Contact
                    </Link>
                    <Button className="bg-accent hover:bg-accent/90 text-white font-semibold shadow-lg shadow-accent/20">
                        S'inscrire
                    </Button>
                </div>

                {/* Mobile Menu Button (Placeholder) */}
                <button className="md:hidden p-2 text-slate-600">
                    <Menu className="h-6 w-6" />
                </button>
            </div>
        </nav>
    );
}
