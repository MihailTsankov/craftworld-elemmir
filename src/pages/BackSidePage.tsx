import backSideImage from "../assets/guardian-host-going-to-war.png";
import { ScenePage, SceneFrame } from "../components/ScenePage";
import HoverHotspot from "../components/HoverHotspot";

export default function BackSidePage() {
  return (
    <ScenePage>
      <SceneFrame src={backSideImage} alt="Back Side">
        <HoverHotspot
          label="Guardian Host"
          left="44%" top="55%" width="12%" height="20%"
          color="#f0d68a"
          previewSide="right"
          fragmentId="guardian-host"
        />
      </SceneFrame>
    </ScenePage>
  );
}
