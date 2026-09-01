import "./App.css";
import Stars from "./components/Stars";
import Spaceship from "./components/Spaceship";
import DomeButtons from "./components/DomeButtons";
import FarseerCodex from "./components/FarseerCodex";
import craftworldImg from "./assets/craftworld-elemmir-background.png";

export default function App() {
  return (
    <div className="scene">
      {/* Background — full screen craftworld */}
      <img className="craftworld" src={craftworldImg} alt="Craftworld Elemmir" draggable={false} />

      {/* Crimson Hunter circles the craftworld, scaling up on the right to fake depth */}
      <Spaceship radius="31vw" tilt={0.22} duration={24} startAngle={8} size={180} minScale={0.1} maxScale={1.18} />

      {/* Dome buttons */}
      <DomeButtons />

      {/* Puzzle progress, available from the very first screen */}
      <FarseerCodex />

      {/* Stars always on top */}
      <Stars />
    </div>
  );
}
