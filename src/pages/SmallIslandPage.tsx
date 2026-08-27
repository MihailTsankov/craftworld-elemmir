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
          color="orange"
          previewSrc={swoopingHawksPreview}
          previewSide="right"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh."
        />
      </SceneFrame>
    </ScenePage>
  );
}
