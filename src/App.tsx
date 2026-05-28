import "./App.css";
import { useNavigate } from "react-router-dom";
import Stars from "./components/Stars";
import Spaceship from "./components/Spaceship";
import craftworldImg from "./assets/craftworld-elemmir-background.png";

export default function App() {
  const navigate = useNavigate();

  return (
    <div className="scene">
      {/* Background — full screen craftworld */}
      <img className="craftworld" src={craftworldImg} alt="Craftworld Elemmir" draggable={false} />

      {/* Ships (z-index 1 when behind, 3 when in front) */}
      <Spaceship radius="35vw" tilt={0.28} duration={28} startAngle={0}   size={52} />
      <Spaceship radius="27vw" tilt={0.23} duration={19} startAngle={185} size={38} />

      {/* Craftworld overlay at z-index 2 — masks just the craftworld body
          so ships disappear behind it in the back half of their orbit */}
      <img className="craftworld-overlay" src={craftworldImg} alt="" draggable={false} aria-hidden={true} />

      {/* Dome button container — same aspect ratio as the image so % positions are image-relative */}
      <div className="dome-container">
        <button
          className="dome-button"
          aria-label="Enter the dome"
          onClick={() => navigate("/dome")}
        />
      </div>

      {/* Stars always on top */}
      <Stars />
    </div>
  );
}
