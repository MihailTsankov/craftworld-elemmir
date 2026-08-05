import centralDome from "../assets/central-dome.png";
import crystalDomeMainHall from "../assets/central-dome-crystal-dome-main-hall.png";
import bansheeTemple from "../assets/central-dome-banshees_temple.png";
import autarchChamber from "../assets/central-dome-autarch-chamber.png";
import boneSingers from "../assets/central-dome-bonesingers.png";
import aeldariStatuePreview from "../assets/central-dome-bonesingers-terrace.png";
import mainHallEntrancePreview from "../assets/central-dome-main-hall.png";
import { ScenePage, SceneFrame } from "../components/ScenePage";
import HoverHotspot from "../components/HoverHotspot";

const hotspots = [
  {
    label: "Banshee's Temple",
    left: "14%", top: "35%", width: "12%", height: "20%",
    color: "#b464ff",
    previewSrc: bansheeTemple, previewSide: "right" as const,
  },
  {
    label: "Crystal Dome Main Hall",
    left: "48%", top: "0%", width: "24%", height: "40%",
    color: "#64b4ff",
    previewSrc: crystalDomeMainHall, previewSide: "left" as const,
  },
  {
    label: "Autarch Chamber",
    left: "74%", top: "40%", width: "8%", height: "14%",
    color: "#8b0000",
    previewSrc: autarchChamber, previewSide: "left" as const,
  },
  {
    label: "Bone Singers Terrace",
    left: "60%", top: "80%", width: "12%", height: "20%",
    color: "#ff00ff",
    previewSrc: boneSingers, previewSide: "left" as const,
  },
  {
    label: "Aeldari Statue",
    left: "6%", top: "57%", width: "12%", height: "20%",
    color: "#ea6b26",
    previewSrc: aeldariStatuePreview, previewSide: "right" as const,
  },
  {
    label: "Main Hall Entrance",
    left: "52%", top: "50%", width: "12%", height: "20%",
    color: "#8de7f3",
    previewSrc: mainHallEntrancePreview, previewSide: "left" as const,
  },
];

export default function CentralDomePage() {
  return (
    <ScenePage>
      <SceneFrame src={centralDome} alt="Central Dome">
        {hotspots.map((h) => (
          <HoverHotspot key={h.label} {...h} />
        ))}
      </SceneFrame>
    </ScenePage>
  );
}
