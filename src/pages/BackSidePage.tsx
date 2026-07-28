import backSideImage from "../assets/guardian-host-going-to-war.png";
import { ScenePage, SceneFrame } from "../components/ScenePage";

export default function BackSidePage() {
  return (
    <ScenePage>
      <SceneFrame src={backSideImage} alt="Back Side" />
    </ScenePage>
  );
}
