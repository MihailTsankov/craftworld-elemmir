import smallIslandDome from "../assets/small-island-dome.png";
import swoopingHawksPreview from "../assets/small-island-swooping-hawks-alternative.png";
import { ScenePage, SceneFrame } from "../components/ScenePage";
import HoverHotspot from "../components/HoverHotspot";

export default function SmallIslandPage() {
  return (
    <ScenePage>
      <SceneFrame src={smallIslandDome} alt="Small Island">
        <HoverHotspot
          label="Swooping Hawks hunting"
          left="30%" top="45%" width="12%" height="20%"
          glowColor="rgba(255, 165, 0, 0.6)"
          hoverBg="rgba(255, 165, 0, 0.08)"
          previewSrc={swoopingHawksPreview}
          previewSide="right"
          previewBorderColor="orange"
        />
      </SceneFrame>
    </ScenePage>
  );
}
