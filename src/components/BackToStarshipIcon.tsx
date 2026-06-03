import { useNavigate } from "react-router-dom";
import elemmirSymbol from "../assets/elemmir-the-star-jewel-symbol.svg";
import "./BackToStarshipIcon.css";

export default function BackToStarshipIcon() {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className="back-to-starship-icon"
      aria-label="Return to starship"
      onClick={() => navigate("/")}
    >
      <img src={elemmirSymbol} alt="" aria-hidden={true} draggable={false} />
    </button>
  );
}

