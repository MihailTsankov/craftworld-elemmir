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

      {/* Crimson Hunter circles the craftworld, scaling up on the right to fake depth */}
      <Spaceship radius="31vw" tilt={0.22} duration={24} startAngle={8} size={180} minScale={0.1} maxScale={1.18} />

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
