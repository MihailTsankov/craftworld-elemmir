import { Navigate } from "react-router-dom";
import soulstone from "../assets/symbol-elemmir-sci-fi-book.jfif";
import { ScenePage, SceneFrame } from "../components/ScenePage";
import DecodingText from "../components/DecodingText";
import { assembleProphecy } from "../puzzle/fragments";
import { usePuzzle } from "../puzzle/puzzleContext";
import "./ProphecyPage.css";

/**
 * The hidden seventh location, reachable only once all six rune fragments have
 * been collected. Guessing the URL early sends the visitor back to the void.
 */
export default function ProphecyPage() {
  const { isComplete } = usePuzzle();

  if (!isComplete) return <Navigate to="/" replace />;

  return (
    <ScenePage>
      <SceneFrame src={soulstone} alt="The Chamber of Ulthanash">
        <div className="prophecy">
          <h1 className="prophecy__title">The Chamber of Ulthanash</h1>
          <DecodingText text={assembleProphecy()} delay={600} speed={20} />
        </div>
      </SceneFrame>
    </ScenePage>
  );
}
