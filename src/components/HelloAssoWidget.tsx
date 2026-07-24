"use client";

import React from "react";

export function HelloAssoWidget() {
  return (
    <div className="w-full overflow-hidden rounded-xl bg-white shadow-sm">
      <iframe
        id="haWidget"
        allowTransparency={true}
        scrolling="auto"
        src="https://www.helloasso.com/associations/echecs-cassis/evenements/stage-d-echecs-pour-enfant-toussaint-2026/widget"
        style={{ width: "100%", height: "750px", border: "none" }}
        onLoad={(e) => {
          const iframe = e.target as HTMLIFrameElement;
          window.addEventListener("message", function (event) {
            const dataHeight = event.data.height;
            if (dataHeight > parseFloat(iframe.style.height || "0")) {
              iframe.style.height = dataHeight + "px";
            }
          });
        }}
      />
    </div>
  );
}
