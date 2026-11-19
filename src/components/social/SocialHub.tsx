"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { Facebook, Instagram, ExternalLink } from "lucide-react";

interface CuratorFeedConfig {
  id: string;
  title: string;
  headerClassName: string;
  icon: ReactNode;
  linkHref: string;
  linkLabel: string;
  containerId: string;
  scriptSrc: string;
}

const SOCIAL_FEEDS: readonly CuratorFeedConfig[] = [
  {
    id: "facebook",
    title: "Actualités du Club",
    headerClassName: "bg-[#1877F2]",
    icon: <Facebook className="w-6 h-6" />,
    linkHref: "https://www.facebook.com/echecscalanques/",
    linkLabel: "Voir sur Facebook",
    containerId: "curator-feed-default-feed-layout",
    scriptSrc:
      "https://cdn.curator.io/published/ea2b98b5-dc7d-4a42-95ca-c508c662485b.js",
  },
  {
    id: "instagram",
    title: "Instagram du Club",
    headerClassName: "bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af]",
    icon: <Instagram className="w-6 h-6" />,
    linkHref: "https://www.instagram.com/echecscalanques/",
    linkLabel: "Voir sur Instagram",
    containerId: "curator-feed-insta-layout",
    scriptSrc:
      "https://cdn.curator.io/published/e40a8fa0-1547-4f3c-a6ff-790f925f3c53.js",
  },
];

/**
 * Renders a social feed card powered by a Curator.io embed script.
 */
function CuratorFeedCard({ feed }: { feed: CuratorFeedConfig }) {
  const curatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scriptId = `curator-feed-script-${feed.id}`;
    const timer = window.setTimeout(() => {
      const container = curatorRef.current;
      if (!container || container.querySelector(".crt-feed")) return;

      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }

      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "text/javascript";
      script.charset = "UTF-8";
      script.async = true;
      script.src = feed.scriptSrc;
      document.body.appendChild(script);
    }, 0);

    return () => {
      window.clearTimeout(timer);
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [feed.id, feed.scriptSrc]);

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden flex flex-col">
      <div className={`${feed.headerClassName} p-4 flex items-center justify-between text-white`}>
        <div className="flex items-center gap-2">
          {feed.icon}
          <h3 className="font-bold">{feed.title}</h3>
        </div>
        <a
          href={feed.linkHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/85 hover:text-white text-sm flex items-center gap-1"
        >
          {feed.linkLabel} <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      <div className="p-4 bg-white">
        <div id={feed.containerId} ref={curatorRef}>
          <a
            href="https://curator.io"
            target="_blank"
            rel="noopener noreferrer"
            className="crt-logo crt-tag text-xs text-slate-400"
          >
            Powered by Curator.io
          </a>
        </div>
      </div>
    </div>
  );
}

/**
 * Displays the club's Facebook and Instagram Curator.io widgets.
 */
export function SocialHub() {
  return (
    <div className="space-y-8">
      {SOCIAL_FEEDS.map((feed) => (
        <CuratorFeedCard key={feed.id} feed={feed} />
      ))}
    </div>
  );
}
