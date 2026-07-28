import { useState } from "react";
import exoditePlanetImage from "../assets/exodite-world.png";
import exoditeTemplePreview from "../assets/exodite-temple.png";
import BackToStarshipIcon from "../components/BackToStarshipIcon";

export default function ExoditePlanetPage() {
  const [exoditeTempleHovered, setExoditeTempleHovered] = useState(false);
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
      <BackToStarshipIcon />
      <div style={{ position: "relative", display: "inline-block" }}>
        <img
          src={exoditePlanetImage}
          alt="Exodite Planet"
          style={{
            display: "block",
            maxWidth: "100%",
            maxHeight: "100vh",
            maskImage: "radial-gradient(ellipse at center, black 50%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 50%, transparent 75%)",
          }}
        />

        {/* Hotspot for Exodite Temple */}
        <div
          role="button"
          tabIndex={0}
          aria-label="Exodite Temple"
          onMouseEnter={() => setExoditeTempleHovered(true)}
          onMouseLeave={() => setExoditeTempleHovered(false)}
          onFocus={() => setExoditeTempleHovered(true)}
          onBlur={() => setExoditeTempleHovered(false)}
          style={{
            position: "absolute",
            left: "70%",
            top: "55%",
            width: "12%",
            height: "20%",
            cursor: "pointer",
            borderRadius: "50%",
            boxShadow: exoditeTempleHovered ? "0 0 30px 15px rgba(154, 173, 83, 0.6)" : "none",
            background: exoditeTempleHovered ? "rgba(154, 173, 83, 0.08)" : "transparent",
          }}
        />
      </div>

      {exoditeTempleHovered && (
        <img
          src={exoditeTemplePreview}
          alt="Exodite Temple"
          style={{
            position: "fixed",
            bottom: "24px",
            left: "24px",
            width: "560px",
            maxWidth: "calc(100vw - 48px)",
            border: "2px solid #9AAD53",
            borderRadius: "12px",
            pointerEvents: "none",
          }}
        />
      )}
    </div>
  );
}

