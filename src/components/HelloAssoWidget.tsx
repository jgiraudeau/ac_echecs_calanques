"use client";

import React, { useEffect, useRef } from "react";

interface HelloAssoWidgetProps {
  url: string;
}

export function HelloAssoWidget({ url }: HelloAssoWidgetProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      let data = event.data;
      if (typeof data === "string") {
        try {
          data = JSON.parse(data);
        } catch (e) {
          // not valid json
        }
      }

      if (typeof data === "object" && data !== null && "height" in data) {
        const dataHeight = parseInt(String(data.height), 10);
        if (!isNaN(dataHeight) && iframeRef.current) {
          iframeRef.current.style.height = dataHeight + "px";
        }
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div className="w-full overflow-hidden rounded-xl bg-white shadow-sm">
      <iframe
        ref={iframeRef}
        allowTransparency={true}
        scrolling="auto"
        src={url}
        style={{ width: "100%", height: "750px", border: "none" }}
      />
    </div>
  );
}
