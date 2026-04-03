"use client";

import { useMemo, useState } from "react";
import { ExternalLink, Navigation, Route } from "lucide-react";
import { LOCATION_ENTRIES } from "@/lib/locations";

function toGoogleMapsEmbedUrl(address: string): string {
  return `https://www.google.com/maps?output=embed&q=${encodeURIComponent(address)}`;
}

function toGoogleMapsOpenUrl(address: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

function toGoogleMapsDirectionsUrl(destination: string): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;
}

const ORIGIN_ADDRESS = "20 avenue du Dr Emmanuel Agostini, 13260 Cassis";

export default function LocationsMap() {
  const [selectedLocationId, setSelectedLocationId] = useState<string>(
    LOCATION_ENTRIES[0]?.id ?? "",
  );

  const selectedLocation = useMemo(
    () => LOCATION_ENTRIES.find((location) => location.id === selectedLocationId) ?? LOCATION_ENTRIES[0],
    [selectedLocationId],
  );

  if (!selectedLocation) {
    return null;
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {LOCATION_ENTRIES.map((location) => (
          <button
            key={location.id}
            onClick={() => setSelectedLocationId(location.id)}
            className={`rounded-lg px-3 py-2 text-sm font-bold transition-colors ${selectedLocation.id === location.id
                ? "bg-primary text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
          >
            {location.name}
          </button>
        ))}
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200">
        <iframe
          src={toGoogleMapsEmbedUrl(selectedLocation.address)}
          title={`Carte Google Maps - ${selectedLocation.name}`}
          className="h-[520px] w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="flex flex-wrap gap-3">
        <a
          href={toGoogleMapsDirectionsUrl(selectedLocation.address)}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-bold text-white hover:bg-accent/90"
        >
          <Route className="h-4 w-4" />
          Itinéraire vers ce lieu
        </a>
        <a
          href={toGoogleMapsOpenUrl(selectedLocation.address)}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50"
        >
          <ExternalLink className="h-4 w-4" />
          Ouvrir dans Google Maps
        </a>
        <a
          href={`https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(ORIGIN_ADDRESS)}&destination=${encodeURIComponent(selectedLocation.address)}`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50"
        >
          <Navigation className="h-4 w-4" />
          Depuis le Centre Culturel
        </a>
      </div>
    </div>
  );
}
