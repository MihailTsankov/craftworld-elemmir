import { useState } from "react";
import islandOceanImage from "../assets/ocean-with-a-mountain-structure.png";
import swoopingHawksPreview from "../assets/swooping-hawks.png";
import lakePreview from "../assets/lake-with-a-mountain-structure.png";
import BackToStarshipIcon from "../components/BackToStarshipIcon";

export default function IslandOceanPage() {
  const [mountainTopHovered, setMountainTopHovered] = useState(false);
  const [shipsHovered, setShipsHovered] = useState(false);

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
          src={islandOceanImage}
          alt="Island Ocean"
          style={{
            display: "block",
            maxWidth: "100%",
            maxHeight: "100vh",
            maskImage: "radial-gradient(ellipse at center, black 50%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 50%, transparent 75%)",
          }}
        />

        {/* Hotspot for Mountain Top */}
        <div
          role="button"
          tabIndex={0}
          aria-label="The top of the mountain structure"
          onMouseEnter={() => setMountainTopHovered(true)}
          onMouseLeave={() => setMountainTopHovered(false)}
          onFocus={() => setMountainTopHovered(true)}
          onBlur={() => setMountainTopHovered(false)}
          style={{
            position: "absolute",
            left: "53%",
            top: "35%",
            width: "15%",
            height: "15%",
            cursor: "pointer",
            borderRadius: "50%",
            boxShadow: mountainTopHovered ? "0 0 30px 15px rgba(173, 216, 230, 0.6)" : "none",
            background: mountainTopHovered ? "rgba(173, 216, 230, 0.08)" : "transparent",
          }}
        />

        {/* Hotspot for Ships */}
        <div
          role="button"
          tabIndex={0}
          aria-label="Ships"
          onMouseEnter={() => setShipsHovered(true)}
          onMouseLeave={() => setShipsHovered(false)}
          onFocus={() => setShipsHovered(true)}
          onBlur={() => setShipsHovered(false)}
          style={{
            position: "absolute",
            left: "35%",
            top: "60%",
            width: "12%",
            height: "15%",
            cursor: "pointer",
            borderRadius: "50%",
            boxShadow: shipsHovered ? "0 0 30px 15px rgba(255, 0, 0, 0.6)" : "none",
            background: shipsHovered ? "rgba(255, 0, 0, 0.08)" : "transparent",
          }}
        />
      </div>

      {mountainTopHovered && (
        <img
          src={swoopingHawksPreview}
          alt="The top of the mountain structure"
          style={{
            position: "fixed",
            bottom: "24px",
            left: "24px",
            width: "560px",
            maxWidth: "calc(100vw - 48px)",
            border: "2px solid #ADD8E6",
            borderRadius: "12px",
            pointerEvents: "none",
          }}
        />
      )}

      {shipsHovered && (
        <img
          src={lakePreview}
          alt="Ships"
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            width: "560px",
            maxWidth: "calc(100vw - 48px)",
            border: "2px solid red",
            borderRadius: "12px",
            pointerEvents: "none",
          }}
        />
      )}
    </div>
  );
}


