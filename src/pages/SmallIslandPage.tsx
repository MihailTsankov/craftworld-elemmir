import { useState } from "react";
import smallIslandDome from "../assets/small-island-dome.png";
import swoopingHawksPreview from "../assets/swooping-hawks-alternative.png";
import BackToStarshipIcon from "../components/BackToStarshipIcon";

export default function SmallIslandPage() {
  const [swoopingHawksHovered, setSwoopingHawksHovered] = useState(false);

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
          src={smallIslandDome}
          alt="Small Island"
          style={{
            display: "block",
            maxWidth: "100%",
            maxHeight: "100vh",
            maskImage: "radial-gradient(ellipse at center, black 50%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 50%, transparent 75%)",
          }}
        />

        {/* Hotspot for Swooping Hawks */}
        <div
          role="button"
          tabIndex={0}
          aria-label="Swooping Hawks hunting"
          onMouseEnter={() => setSwoopingHawksHovered(true)}
          onMouseLeave={() => setSwoopingHawksHovered(false)}
          onFocus={() => setSwoopingHawksHovered(true)}
          onBlur={() => setSwoopingHawksHovered(false)}
          style={{
            position: "absolute",
            left: "30%",
            top: "45%",
            width: "12%",
            height: "20%",
            cursor: "pointer",
            borderRadius: "50%",
            boxShadow: swoopingHawksHovered ? "0 0 30px 15px rgba(255, 165, 0, 0.6)" : "none",
            background: swoopingHawksHovered ? "rgba(255, 165, 0, 0.08)" : "transparent",
          }}
        />
      </div>

      {swoopingHawksHovered && (
        <img
          src={swoopingHawksPreview}
          alt="Swooping Hawks hunting"
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            width: "560px",
            maxWidth: "calc(100vw - 48px)",
            border: "2px solid orange",
            borderRadius: "12px",
            pointerEvents: "none",
          }}
        />
      )}
    </div>
  );
}
