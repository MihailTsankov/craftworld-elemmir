import { useState } from "react";
import centralDome from "../assets/central-dome.png";
import crystalDomeMainHall from "../assets/crystal-dome-main-hall.png";
import bansheeTemple from "../assets/banshees_temple_blue_hair_kneel_dome_better_runes.png";
import BackToStarshipIcon from "../components/BackToStarshipIcon";

export default function DomePage() {
  const [hovered, setHovered] = useState(false);
  const [bansheeHovered, setBansheeHovered] = useState(false);

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
        {/* Hotspot over the left-edge building */}
        <div
          role="button"
          tabIndex={0}
          aria-label="Banshee's Temple"
          onMouseEnter={() => setBansheeHovered(true)}
          onMouseLeave={() => setBansheeHovered(false)}
          onFocus={() => setBansheeHovered(true)}
          onBlur={() => setBansheeHovered(false)}
          style={{
            position: "absolute",
            left: "14%",
            top: "35%",
            width: "12%",
            height: "20%",
            cursor: "pointer",
            borderRadius: "50%",
            boxShadow: bansheeHovered ? "0 0 30px 15px rgba(180, 100, 255, 0.6)" : "none",
            background: bansheeHovered ? "rgba(180, 100, 255, 0.08)" : "transparent",
          }}
        />
        {/* Hotspot over the main building */}
        <div
          role="button"
          tabIndex={0}
          aria-label="Crystal Dome Main Hall"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocus={() => setHovered(true)}
          onBlur={() => setHovered(false)}
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

      {bansheeHovered && (
        <img
          src={bansheeTemple}
          alt="Banshee's Temple"
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            width: "560px",
            maxWidth: "calc(100vw - 48px)",
            border: "2px solid #b47eff",
            borderRadius: "12px",
            pointerEvents: "none",
          }}
        />
      )}
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
