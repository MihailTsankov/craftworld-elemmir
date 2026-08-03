import { useState } from "react";
import centralDome from "../assets/central-dome.png";
import crystalDomeMainHall from "../assets/central-dome-crystal-dome-main-hall.png";
import bansheeTemple from "../assets/central-dome-banshees_temple.png";
import autarchChamber from "../assets/central-dome-autarch-chamber.png";
import boneSingers from "../assets/central-dome-bonesingers.png";
import BackToStarshipIcon from "../components/BackToStarshipIcon";

export default function CentralDomePage() {
  const [hovered, setHovered] = useState(false);
  const [bansheeHovered, setBansheeHovered] = useState(false);
  const [autarchHovered, setAutarchHovered] = useState(false);
  const [boneSingersHovered, setBoneSingersHovered] = useState(false);

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
        {/* Hotspot over the middle-right area (Autarch Chamber) */}
        <div
          role="button"
          tabIndex={0}
          aria-label="Autarch Chamber"
          onMouseEnter={() => setAutarchHovered(true)}
          onMouseLeave={() => setAutarchHovered(false)}
          onFocus={() => setAutarchHovered(true)}
          onBlur={() => setAutarchHovered(false)}
          style={{
            position: "absolute",
            left: "74%",
            top: "40%",
            width: "12%",
            height: "20%",
            cursor: "pointer",
            borderRadius: "50%",
            boxShadow: autarchHovered ? "0 0 30px 15px rgba(139, 0, 0, 0.6)" : "none",
            background: autarchHovered ? "rgba(139, 0, 0, 0.08)" : "transparent",
          }}
        />
        {/* Hotspot over the lower-left area (Bone Singers Terrace) */}
        <div
          role="button"
          tabIndex={0}
          aria-label="Bone Singers Terrace"
          onMouseEnter={() => setBoneSingersHovered(true)}
          onMouseLeave={() => setBoneSingersHovered(false)}
          onFocus={() => setBoneSingersHovered(true)}
          onBlur={() => setBoneSingersHovered(false)}
          style={{
            position: "absolute",
            left: "60%",
            top: "80%",
            width: "12%",
            height: "20%",
            cursor: "pointer",
            borderRadius: "50%",
            boxShadow: boneSingersHovered ? "0 0 30px 15px rgba(255, 0, 255, 0.6)" : "none",
            background: boneSingersHovered ? "rgba(255, 0, 255, 0.08)" : "transparent",
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
      {autarchHovered && (
        <img
          src={autarchChamber}
          alt="Autarch Chamber"
          style={{
            position: "fixed",
            bottom: "24px",
            left: "24px",
            width: "560px",
            maxWidth: "calc(100vw - 48px)",
            border: "2px solid #8b0000",
            borderRadius: "12px",
            pointerEvents: "none",
          }}
        />
      )}
      {boneSingersHovered && (
        <img
          src={boneSingers}
          alt="Bone Singers Terrace"
          style={{
            position: "fixed",
            bottom: "24px",
            left: "24px",
            width: "560px",
            maxWidth: "calc(100vw - 48px)",
            border: "2px solid #ff00ff",
            borderRadius: "12px",
            pointerEvents: "none",
          }}
        />
      )}
    </div>
  );
}
