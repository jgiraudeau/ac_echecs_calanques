"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

type LocationType = "ecole" | "club";

interface LocationEntry {
  name: string;
  lat: number;
  lng: number;
  type: LocationType;
  city: string;
}

const SCHOOLS: LocationEntry[] = [
  { name: "École Sainte Trinité", lat: 43.268, lng: 5.398, type: "ecole", city: "Marseille" },
  { name: "École Sainte Claire", lat: 43.28, lng: 5.38, type: "ecole", city: "Marseille" },
  { name: "École Saint Augustin", lat: 43.256, lng: 5.564, type: "ecole", city: "Carnoux" },
  { name: "École Zebra", lat: 43.187, lng: 5.617, type: "ecole", city: "La Ciotat" },
];

const CLUBS: LocationEntry[] = [
  { name: "Centre Culturel", lat: 43.214, lng: 5.539, type: "club", city: "Cassis" },
  { name: "Le Coq", lat: 43.256, lng: 5.564, type: "club", city: "Carnoux" },
  { name: "Sainte-Trinité (Club)", lat: 43.268, lng: 5.398, type: "club", city: "Marseille" },
  { name: "CIQ Saint-Jean", lat: 43.187, lng: 5.617, type: "club", city: "La Ciotat" },
  { name: "Salle Polyvalente", lat: 43.208, lng: 5.63, type: "club", city: "Ceyreste" },
  { name: "Salle de la Culture", lat: 43.21, lng: 5.632, type: "club", city: "Ceyreste" },
];

const ALL_LOCATIONS = [...SCHOOLS, ...CLUBS];

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false },
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false },
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false },
);
const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false },
);

export default function LocationsMap() {
  const [leafletLib, setLeafletLib] = useState<typeof import("leaflet") | null>(null);

  useEffect(() => {
    let mounted = true;
    void (async () => {
      const leaflet = await import("leaflet");
      if (!mounted) return;
      setLeafletLib(leaflet);

      const iconDefaultPrototype = leaflet.Icon.Default.prototype as unknown as {
        _getIconUrl?: unknown;
      };
      delete iconDefaultPrototype._getIconUrl;
      leaflet.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
        iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
        shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
      });
    })();

    return () => {
      mounted = false;
    };
  }, []);

  if (!leafletLib) {
    return (
      <div className="h-[500px] w-full bg-slate-100 animate-pulse flex items-center justify-center text-slate-400">
        Chargement de la carte...
      </div>
    );
  }

  return (
    <MapContainer
      center={[43.23, 5.55]}
      zoom={11}
      style={{ height: "500px", width: "100%", borderRadius: "1rem", zIndex: 0 }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {ALL_LOCATIONS.map((loc) => (
        <Marker key={`${loc.type}-${loc.name}`} position={[loc.lat, loc.lng]}>
          <Popup>
            <div className="text-center">
              <div className="font-bold text-slate-800">{loc.name}</div>
              <div className="text-xs text-slate-500 uppercase">
                {loc.type === "ecole" ? "🏫 École" : "♟️ Club"} • {loc.city}
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
