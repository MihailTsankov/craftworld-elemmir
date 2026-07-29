import { useState } from "react";
import exoditePlanetImage from "../assets/exodite-world.png";
import exoditeTemplePreview from "../assets/exodite-temple.png";
import exoditeDinoAreaPreview from "../assets/exodite-dino-area.png";
import exoditeRidersPreview from "../assets/exodite-veloci-riders.png";
import exoditeHatcheryPreview from "../assets/exodite-veloci-hatchery.png";
import BackToStarshipIcon from "../components/BackToStarshipIcon";

export default function ExoditePlanetPage() {
  const [exoditeTempleHovered, setExoditeTempleHovered] = useState(false);
  const [exoditeSettlementHovered, setExoditeSettlementHovered] = useState(false);
  const [exoditeRidersHovered, setExoditeRidersHovered] = useState(false);
  const [velociraptorHatcheryHovered, setVelociraptorHatcheryHovered] = useState(false);
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
            left: "60%",
            top: "55%",
            width: "25%",
            height: "28%",
            cursor: "pointer",
            borderRadius: "50%",
            boxShadow: exoditeTempleHovered ? "0 0 30px 15px rgba(154, 173, 83, 0.6)" : "none",
            background: exoditeTempleHovered ? "rgba(154, 173, 83, 0.08)" : "transparent",
          }}
        />

        {/* Hotspot for Exodite Settlement */}
        <div
          role="button"
          tabIndex={0}
          aria-label="Exodite Settlement"
          onMouseEnter={() => setExoditeSettlementHovered(true)}
          onMouseLeave={() => setExoditeSettlementHovered(false)}
          onFocus={() => setExoditeSettlementHovered(true)}
          onBlur={() => setExoditeSettlementHovered(false)}
          style={{
            position: "absolute",
            left: "20%",
            top: "60%",
            width: "23%",
            height: "20%",
            cursor: "pointer",
            borderRadius: "50%",
            boxShadow: exoditeSettlementHovered ? "0 0 30px 15px rgba(131, 114, 69, 0.6)" : "none",
            background: exoditeSettlementHovered ? "rgba(131, 114, 69, 0.08)" : "transparent",
          }}
        />

        {/* Hotspot for Exodite Riders */}
        <div
          role="button"
          tabIndex={0}
          aria-label="Exodite Riders"
          onMouseEnter={() => setExoditeRidersHovered(true)}
          onMouseLeave={() => setExoditeRidersHovered(false)}
          onFocus={() => setExoditeRidersHovered(true)}
          onBlur={() => setExoditeRidersHovered(false)}
          style={{
            position: "absolute",
            left: "43%",
            top: "30%",
            width: "10%",
            height: "12%",
            cursor: "pointer",
            borderRadius: "50%",
            boxShadow: exoditeRidersHovered ? "0 0 30px 15px rgba(189, 110, 94, 0.6)" : "none",
            background: exoditeRidersHovered ? "rgba(189, 110, 94, 0.08)" : "transparent",
          }}
        />

        {/* Hotspot for Velociraptor Hatchery */}
        <div
          role="button"
          tabIndex={0}
          aria-label="Velociraptor Hatchery"
          onMouseEnter={() => setVelociraptorHatcheryHovered(true)}
          onMouseLeave={() => setVelociraptorHatcheryHovered(false)}
          onFocus={() => setVelociraptorHatcheryHovered(true)}
          onBlur={() => setVelociraptorHatcheryHovered(false)}
          style={{
            position: "absolute",
            left: "10%",
            top: "20%",
            width: "15%",
            height: "13%",
            cursor: "pointer",
            borderRadius: "50%",
            boxShadow: velociraptorHatcheryHovered ? "0 0 30px 15px rgba(255, 254, 239, 0.6)" : "none",
            background: velociraptorHatcheryHovered ? "rgba(255, 254, 239, 0.08)" : "transparent",
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

      {exoditeSettlementHovered && (
        <img
          src={exoditeDinoAreaPreview}
          alt="Exodite Settlement"
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            width: "560px",
            maxWidth: "calc(100vw - 48px)",
            border: "2px solid #837245",
            borderRadius: "12px",
            pointerEvents: "none",
          }}
        />
      )}

      {exoditeRidersHovered && (
        <img
          src={exoditeRidersPreview}
          alt="Exodite Riders"
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            width: "560px",
            maxWidth: "calc(100vw - 48px)",
            border: "2px solid #BD6E5E",
            borderRadius: "12px",
            pointerEvents: "none",
          }}
        />
      )}

      {velociraptorHatcheryHovered && (
        <img
          src={exoditeHatcheryPreview}
          alt="Velociraptor Hatchery"
          style={{
            position: "fixed",
            bottom: "24px",
            left: "24px",
            width: "560px",
            maxWidth: "calc(100vw - 48px)",
            border: "2px solid #FFFEEF",
            borderRadius: "12px",
            pointerEvents: "none",
          }}
        />
      )}
    </div>
  );
}

