import exoditePlanetImage from "../assets/small-island-dome.png";
import BackToStarshipIcon from "../components/BackToStarshipIcon";

export default function ExoditePlanetPage() {
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
      </div>
    </div>
  );
}

