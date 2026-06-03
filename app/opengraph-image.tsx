import { readFileSync } from "fs";
import { join } from "path";
import { ImageResponse } from "next/og";
import { site } from "./lib/site";

// Dynamic social-share card (LinkedIn, X, Slack, Google).
export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Embed the real eye-mark (transparent white) as a data URI so satori can render it.
const markSrc = `data:image/png;base64,${readFileSync(
  join(process.cwd(), "public", "logo-mark.png")
).toString("base64")}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(1100px 500px at 78% 12%, #2a1606 0%, #060608 55%)",
          color: "#f5f5f4",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "22px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={markSrc} alt="" width={112} height={72} />
          <div style={{ fontSize: "34px", fontWeight: 600, letterSpacing: "-0.5px" }}>
            {site.name}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "64px",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-1.5px",
            maxWidth: "900px",
          }}
        >
          {site.tagline}
        </div>

        <div style={{ display: "flex", fontSize: "28px", color: "#9a9aa6" }}>
          optivise.vip
        </div>
      </div>
    ),
    { ...size }
  );
}
