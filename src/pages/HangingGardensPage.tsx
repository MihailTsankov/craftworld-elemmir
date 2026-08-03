import { useState } from "react";
import hangingGardensImage from "../assets/hanging-gardens.png";
import fireDragonsPreview from "../assets/hanging-gardens-fire-dragons.jpeg";
import fireDragonsFinalBattlePreview from "../assets/hanging-gardens-fire-dragons-fighting.png";
import rangersTemplePreview from "../assets/hanging-gardens-a-temple-rangers.png";
import bathingFallsPreview from "../assets/hanging-gardens-bathing-in-the-pools.png";
import BackToStarshipIcon from "../components/BackToStarshipIcon";

export default function HangingGardensPage() {
  const [fireDragonsHovered, setFireDragonsHovered] = useState(false);
  const [fireDragonsFinalBattleHovered, setFireDragonsFinalBattleHovered] = useState(false);
  const [rangersTempleHovered, setRangersTempleHovered] = useState(false);
  const [bathingFallsHovered, setBathingFallsHovered] = useState(false);
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
          src={hangingGardensImage}
          alt="Hanging Gardens"
          style={{
            display: "block",
            maxWidth: "100%",
            maxHeight: "100vh",
            maskImage: "radial-gradient(ellipse at center, black 50%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 50%, transparent 75%)",
          }}
        />

        {/* Hotspot for Fire Dragons Entering */}
        <div
          role="button"
          tabIndex={0}
          aria-label="Fire Dragons Entering"
          onMouseEnter={() => setFireDragonsHovered(true)}
          onMouseLeave={() => setFireDragonsHovered(false)}
          onFocus={() => setFireDragonsHovered(true)}
          onBlur={() => setFireDragonsHovered(false)}
          style={{
            position: "absolute",
            left: "47%",
            top: "37%",
            width: "15%",
            height: "25%",
            cursor: "pointer",
            borderRadius: "50%",
            boxShadow: fireDragonsHovered
              ? "0 0 30px 15px rgba(145, 217, 236, 0.6)"
              : "none",
            background: fireDragonsHovered ? "rgba(145, 217, 236, 0.08)" : "transparent",
          }}
        />

        {/* Hotspot for Fire Dragons Final Battle */}
        <div
          role="button"
          tabIndex={0}
          aria-label="Fire Dragons Final Battle"
          onMouseEnter={() => setFireDragonsFinalBattleHovered(true)}
          onMouseLeave={() => setFireDragonsFinalBattleHovered(false)}
          onFocus={() => setFireDragonsFinalBattleHovered(true)}
          onBlur={() => setFireDragonsFinalBattleHovered(false)}
          style={{
            position: "absolute",
            left: "39%",
            top: "4%",
            width: "9%",
            height: "12%",
            cursor: "pointer",
            borderRadius: "50%",
            boxShadow: fireDragonsFinalBattleHovered
              ? "0 0 30px 15px rgba(161, 71, 18, 0.6)"
              : "none",
            background: fireDragonsFinalBattleHovered ? "rgba(161, 71, 18, 0.08)" : "transparent",
          }}
        />

        {/* Hotspot for Rangers Temple */}
        <div
          role="button"
          tabIndex={0}
          aria-label="Rangers Temple"
          onMouseEnter={() => setRangersTempleHovered(true)}
          onMouseLeave={() => setRangersTempleHovered(false)}
          onFocus={() => setRangersTempleHovered(true)}
          onBlur={() => setRangersTempleHovered(false)}
          style={{
            position: "absolute",
            left: "75%",
            top: "37%",
            width: "12%",
            height: "20%",
            cursor: "pointer",
            borderRadius: "50%",
            boxShadow: rangersTempleHovered
              ? "0 0 30px 15px rgba(37, 66, 104, 0.6)"
              : "none",
            background: rangersTempleHovered ? "rgba(37, 66, 104, 0.08)" : "transparent",
          }}
        />

        {/* Hotspot for Bathing Falls */}
        <div
          role="button"
          tabIndex={0}
          aria-label="Bathing Falls"
          onMouseEnter={() => setBathingFallsHovered(true)}
          onMouseLeave={() => setBathingFallsHovered(false)}
          onFocus={() => setBathingFallsHovered(true)}
          onBlur={() => setBathingFallsHovered(false)}
          style={{
            position: "absolute",
            left: "8%",
            top: "57%",
            width: "15%",
            height: "25%",
            cursor: "pointer",
            borderRadius: "50%",
            boxShadow: bathingFallsHovered
              ? "0 0 30px 15px rgba(253, 112, 197, 0.6)"
              : "none",
            background: bathingFallsHovered ? "rgba(253, 112, 197, 0.08)" : "transparent",
          }}
        />
      </div>

      {fireDragonsHovered && (
        <img
          src={fireDragonsPreview}
          alt="Fire Dragons Entering"
          style={{
            position: "fixed",
            bottom: "24px",
            left: "24px",
            width: "560px",
            maxWidth: "calc(100vw - 48px)",
            border: "2px solid #91D9EC",
            borderRadius: "12px",
            pointerEvents: "none",
          }}
        />
      )}

      {fireDragonsFinalBattleHovered && (
        <img
          src={fireDragonsFinalBattlePreview}
          alt="Fire Dragons Final Battle"
          style={{
            position: "fixed",
            bottom: "24px",
            right: "24px",
            width: "560px",
            maxWidth: "calc(100vw - 48px)",
            border: "2px solid #A14712",
            borderRadius: "12px",
            pointerEvents: "none",
          }}
        />
      )}

      {rangersTempleHovered && (
        <img
          src={rangersTemplePreview}
          alt="Rangers Temple"
          style={{
            position: "fixed",
            bottom: "24px",
            left: "24px",
            width: "560px",
            maxWidth: "calc(100vw - 48px)",
            border: "2px solid #254268",
            borderRadius: "12px",
            pointerEvents: "none",
          }}
        />
      )}

      {bathingFallsHovered && (
        <img
          src={bathingFallsPreview}
          alt="Bathing Falls"
          style={{
            position: "fixed",
            top: "24px",
            left: "24px",
            width: "560px",
            maxWidth: "calc(100vw - 48px)",
            border: "2px solid #FD70C5",
            borderRadius: "12px",
            pointerEvents: "none",
          }}
        />
      )}
    </div>
  );
}
