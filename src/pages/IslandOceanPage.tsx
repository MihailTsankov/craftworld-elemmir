import islandOceanImage from "../assets/ocean-with-a-mountain-structure.png";
import swoopingHawksPreview from "../assets/swooping-hawks.png";
import lakePreview from "../assets/lake-with-a-mountain-structure.png";
import strikingScorpionsSneakingPreview from "../assets/striking-scorpions-sneaking.png";
import { ScenePage, SceneFrame } from "../components/ScenePage";
import HoverHotspot from "../components/HoverHotspot";

export default function IslandOceanPage() {
  return (
    <ScenePage>
      <SceneFrame src={islandOceanImage} alt="Island Ocean">
        <HoverHotspot
          label="The top of the mountain structure"
          left="53%" top="37%" width="15%" height="15%"
          glowColor="rgba(173, 216, 230, 0.6)"
          hoverBg="rgba(173, 216, 230, 0.08)"
          previewSrc={swoopingHawksPreview}
          previewSide="left"
          previewBorderColor="#ADD8E6"
        />
        <HoverHotspot
          label="Ships"
          left="35%" top="60%" width="12%" height="15%"
          glowColor="rgba(255, 0, 0, 0.6)"
          hoverBg="rgba(255, 0, 0, 0.08)"
          previewSrc={lakePreview}
          previewSide="right"
          previewBorderColor="red"
        />
        <HoverHotspot
          label="Striking Scorpions sneaking"
          left="70%" top="70%" width="12%" height="15%"
          glowColor="rgba(144, 238, 144, 0.6)"
          hoverBg="rgba(144, 238, 144, 0.08)"
          previewSrc={strikingScorpionsSneakingPreview}
          previewSide="left"
          previewBorderColor="green"
        />
      </SceneFrame>
    </ScenePage>
  );
}
