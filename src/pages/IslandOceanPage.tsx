import islandOceanImage from "../assets/ocean-with-mountain.png";
import swoopingHawksPreview from "../assets/ocean-with-mountain-swooping-hawks.png";
import lakePreview from "../assets/ocean-with-mountain-lake-closer-look.png";
import strikingScorpionsSneakingPreview from "../assets/small-island-striking-scorpions-sneaking.png";
import { ScenePage, SceneFrame } from "../components/ScenePage";
import HoverHotspot from "../components/HoverHotspot";

export default function IslandOceanPage() {
  return (
    <ScenePage>
      <SceneFrame src={islandOceanImage} alt="Island Ocean">
        <HoverHotspot
          label="The top of the mountain structure"
          left="53%" top="37%" width="15%" height="15%"
          color="#ADD8E6"
          previewSrc={swoopingHawksPreview}
          previewSide="left"
        />
        <HoverHotspot
          label="Ships"
          left="35%" top="60%" width="12%" height="15%"
          color="red"
          previewSrc={lakePreview}
          previewSide="right"
        />
        <HoverHotspot
          label="Striking Scorpions sneaking"
          left="70%" top="70%" width="12%" height="15%"
          color="green"
          previewSrc={strikingScorpionsSneakingPreview}
          previewSide="left"
        />
      </SceneFrame>
    </ScenePage>
  );
}
