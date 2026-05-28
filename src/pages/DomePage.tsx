import { useState } from "react";
import centralDome from "../assets/central-dome.png";
import crystalDomeMainHall from "../assets/crystal-dome-main-hall.png";

export default function DomePage() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <div style={{ position: "relative", display: "inline-block" }}>
        <img
          src={centralDome}
          alt="Central Dome"
          style={{
            display: "block",
            maxWidth: "100%",
            maxHeight: "100vh",
            maskImage: "radial-gradient(ellipse at center, black 50%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 50%, transparent 75%)",
          }}
        />
        {/* Hotspot over the main building — adjust left/top/width/height to fit */}
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            position: "absolute",
            left: "48%",
            top: "0%",
            width: "24%",
            height: "40%",
            cursor: "pointer",
            borderRadius: "50%",
            boxShadow: hovered ? "0 0 30px 15px rgba(100, 180, 255, 0.6)" : "none",
            background: hovered ? "rgba(100, 180, 255, 0.08)" : "transparent",
          }}
        />
      </div>

      {hovered && (
        <img
          src={crystalDomeMainHall}
          alt="Crystal Dome Main Hall"
          style={{
            position: "fixed",
            bottom: "24px",
            left: "24px",
            width: "560px",
            maxWidth: "calc(100vw - 48px)",
            border: "2px solid #7ecfff",
            borderRadius: "12px",
            pointerEvents: "none",
          }}
        />
      )}
    </div>
  );
}
