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
          fragmentId="mountain-crown"
        />
        <HoverHotspot
          label="Ships"
          left="35%" top="60%" width="12%" height="15%"
          color="red"
          previewSrc={lakePreview}
          previewSide="right"
          text="Gliding across the tranquil, contained seas of the great biosphere dome aboard a crimson skiff, I marveled at the vastness of the void stretching just beyond the protective wraithbone archways. Before me rose a lush, crystal-studded island crowned by an elegant wraithbone sanctuary, a breathtaking harmony of untamed nature and our ancient architecture preserved amidst the stars."
        />
        <HoverHotspot
          label="Striking Scorpions sneaking"
          left="70%" top="70%" width="12%" height="15%"
          color="green"
          previewSrc={strikingScorpionsSneakingPreview}
          previewSide="left"
          text="Stepping into the shadowy recesses of the island's hidden groves, I observed a pack of Striking Scorpions moving with silent precision through the dense undergrowth. Their razor-sharp claws gleamed in the filtered sunlight, and their venomous stingers dripped with deadly intent, making them formidable adversaries in the wilds of our Craftworld."
        />
      </SceneFrame>
    </ScenePage>
  );
}
