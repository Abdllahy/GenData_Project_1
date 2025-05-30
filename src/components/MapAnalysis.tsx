"use client";

import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

declare global {
  interface Window {
    InfogramEmbeds?: any;
  }
}

export default function MapAnalysis() {
  useEffect(() => {
    const loadInfogramScript = () => {
      if (!document.getElementById("infogram-async")) {
        const script = document.createElement("script");
        script.async = true;
        script.id = "infogram-async";
        script.src = "https://e.infogram.com/js/dist/embed-loader-min.js";
        document.body.appendChild(script);

        script.onload = () => {
          if (window.InfogramEmbeds) {
            window.InfogramEmbeds.process();
          }
        };
      } else if (window.InfogramEmbeds && window.InfogramEmbeds.initialized) {
        window.InfogramEmbeds.process();
      }
    };

    loadInfogramScript();
  }, []);

  return (
    <section id="map-analysis" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
              Global AI Impact Map
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Visualizing the geographic distribution of AI adoption and impact
            across different regions.
          </p>
        </div>

        {/* First Infogram Embed */}
        <Card className="overflow-hidden border-none shadow-md bg-white">
          <CardContent className="p-0">
            <div
              className="infogram-embed"
              data-id="e380604f-355e-49d3-a490-2735643d9779"
              data-type="interactive"
              data-title="AI"
              data-slide="1"
              style={{ width: "100%", height: "700px", border: "none" }}
            ></div>
            <div
              style={{
                padding: "8px 0",
                fontFamily: "Arial",
                fontSize: "13px",
                lineHeight: "15px",
                textAlign: "center",
                borderTop: "1px solid #dadada",
                margin: "0 30px",
              }}
            >
              <a
                href="https://infogram.com/e380604f-355e-49d3-a490-2735643d9779"
                style={{ color: "#989898", textDecoration: "none" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                AI
              </a>
              <br />
              <a
                href="https://infogram.com"
                style={{ color: "#989898", textDecoration: "none" }}
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                Infogram
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Divider */}
        <div className="my-12 border-t border-gray-200 w-full" />

        {/* Second Infogram Embed (Updated + Scrollable) */}
        <Card className="overflow-hidden border-none shadow-md bg-white">
          <CardContent className="p-0">
            <div
              className="infogram-embed"
              data-id="6606d6f2-d4d7-4210-be77-544ed18f7c6d"
              data-type="interactive"
              data-title="future_predictions"
              style={{
                width: "100%",
                minHeight: "950px", // Enough height to show scrollable content
                border: "none",
                overflow: "auto",
              }}
            ></div>
            <div
              style={{
                padding: "8px 0",
                fontFamily: "Arial",
                fontSize: "13px",
                lineHeight: "15px",
                textAlign: "center",
                borderTop: "1px solid #dadada",
                margin: "0 30px",
              }}
            >
              <a
                href="https://infogram.com/6606d6f2-d4d7-4210-be77-544ed18f7c6d"
                style={{ color: "#989898", textDecoration: "none" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                future_predictions
              </a>
              <br />
              <a
                href="https://infogram.com"
                style={{ color: "#989898", textDecoration: "none" }}
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                Infogram
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
