"use client";

import React, { useEffect, useRef } from "react";

export function HelloAssoWidget() {
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
        src="https://www.helloasso.com/associations/echecs-cassis/evenements/stage-d-echecs-pour-enfant-hivers-2027/widget"
        style={{ width: "100%", height: "750px", border: "none" }}
      />
    </div>
  );
}
