"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  UserRound,
  Facebook,
  Instagram,
  Send,
  Clock3,
  MapPin,
  MessageSquareText,
} from "lucide-react";

type ContactFormState = {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const INITIAL_FORM_STATE: ContactFormState = {
  fullName: "",
  email: "",
  phone: "",
  subject: "Demande d'information",
  message: "",
};

function buildMailtoLink(form: ContactFormState): string {
  const subjectLine = `[Contact Site] ${form.subject.trim()}`;
  const body = [
    "Bonjour,",
    "",
    `Nom: ${form.fullName.trim()}`,
    `Email: ${form.email.trim()}`,
    `Téléphone: ${form.phone.trim() || "Non renseigné"}`,
    "",
    "Message:",
    form.message.trim(),
  ].join("\n");

  return `mailto:cassisechecs@hotmail.fr?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(body)}`;
}

export default function ContactPage() {
  const [form, setForm] = useState<ContactFormState>(INITIAL_FORM_STATE);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.fullName.trim() || !form.email.trim() || !form.subject.trim() || !form.message.trim()) {
      setFeedback({
        type: "error",
        message: "Merci de compléter les champs obligatoires avant l'envoi.",
      });
      return;
    }

    const emailLooksValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
    if (!emailLooksValid) {
      setFeedback({
        type: "error",
        message: "Merci de renseigner une adresse email valide.",
      });
      return;
    }

    window.location.href = buildMailtoLink(form);
    setFeedback({
      type: "success",
      message: "Votre messagerie va s'ouvrir avec le message pré-rempli.",
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />

      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Contact</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto font-medium">
            Une question, une inscription, un partenariat ? Nous vous répondons rapidement.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14">
        <div className="grid lg:grid-cols-12 gap-8">
          <aside className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-lg overflow-hidden">
              <div className="p-6 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
                <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center mb-4">
                  <UserRound className="w-7 h-7" />
                </div>
                <p className="text-xs uppercase tracking-wider text-slate-300 font-semibold mb-1">Contact principal</p>
                <h2 className="text-2xl font-extrabold">Quentin Massardo</h2>
                <p className="text-orange-300 font-semibold mt-1">Président du club</p>
              </div>

              <div className="p-6 space-y-4">
                <a
                  href="mailto:cassisechecs@hotmail.fr"
                  className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 hover:border-primary/40 hover:bg-blue-50 transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Email</p>
                    <p className="text-slate-800 font-medium">cassisechecs@hotmail.fr</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 rounded-xl border border-dashed border-slate-300 px-4 py-3 bg-slate-50">
                  <Phone className="w-5 h-5 text-slate-500" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Téléphone</p>
                    <p className="text-slate-700 font-medium">À définir</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <Clock3 className="w-4 h-4 text-slate-500" />
                  <span>Réponse en général sous 24 à 48h.</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 shadow-lg p-6">
              <h3 className="text-xl font-extrabold text-slate-800 mb-4">Réseaux sociaux</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <a
                  href="https://www.facebook.com/Cassisechecs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 flex items-center gap-2 font-semibold text-blue-800 hover:bg-blue-100 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/cassisechecs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-pink-200 bg-pink-50 px-4 py-3 flex items-center gap-2 font-semibold text-pink-800 hover:bg-pink-100 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  Instagram
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-100 shadow-lg p-6">
              <h3 className="text-xl font-extrabold text-slate-800 mb-4">Adresse club</h3>
              <div className="flex items-start gap-3 text-slate-700">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <p>
                  Maison des Associations
                  <br />
                  13260 Cassis
                </p>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-lg p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-accent flex items-center justify-center">
                  <MessageSquareText className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold text-slate-800">Formulaire de contact</h2>
                  <p className="text-sm text-slate-500">
                    Le formulaire prépare votre message et ouvre votre messagerie.
                  </p>
                </div>
              </div>

              <form className="space-y-5 mt-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-slate-700" htmlFor="fullName">
                      Nom et prénom *
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={form.fullName}
                      onChange={(event) => setForm((prev) => ({ ...prev, fullName: event.target.value }))}
                      className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-slate-700" htmlFor="email">
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                      className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="vous@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-slate-700" htmlFor="phone">
                      Téléphone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
                      className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="À renseigner si besoin"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-slate-700" htmlFor="subject">
                      Sujet *
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={form.subject}
                      onChange={(event) => setForm((prev) => ({ ...prev, subject: event.target.value }))}
                      className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="Sujet de votre demande"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-700" htmlFor="message">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    value={form.message}
                    onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
                    rows={8}
                    className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 resize-y min-h-[180px]"
                    placeholder="Décrivez votre demande..."
                  />
                </div>

                {feedback ? (
                  <p
                    className={`rounded-xl px-4 py-3 text-sm font-medium ${
                      feedback.type === "success"
                        ? "bg-green-50 border border-green-200 text-green-800"
                        : "bg-amber-50 border border-amber-200 text-amber-800"
                    }`}
                  >
                    {feedback.message}
                  </p>
                ) : null}

                <Button type="submit" className="w-full md:w-auto bg-accent hover:bg-accent/90 text-white font-bold">
                  Envoyer ma demande
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
