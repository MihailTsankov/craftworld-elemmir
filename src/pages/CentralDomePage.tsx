import centralDome from "../assets/central-dome.png";
import crystalDomeMainHall from "../assets/central-dome-main-hall.png";
import bansheeTemple from "../assets/central-dome-banshees_temple.png";
import autarchChamber from "../assets/central-dome-autarch-chamber.png";
import boneSingers from "../assets/central-dome-bonesingers.png";
import aeldariStatuePreview from "../assets/central-dome-bonesingers-terrace.png";
import mainHallEntrancePreview from "../assets/central-dome-main-structure.png";
import { ScenePage, SceneFrame } from "../components/ScenePage";
import HoverHotspot from "../components/HoverHotspot";

const hotspots = [
  {
    label: "Banshee's Temple",
    left: "14%", top: "35%", width: "12%", height: "20%",
    color: "#b464ff",
    previewSrc: bansheeTemple, previewSide: "right" as const,
    text: "Behold this Aspect Shrine, kin, for it is upon these runic stones—beneath the twilight arches of Elemmir's great domes—that generations of our sisters have honed their sorrow into the deadly arts of Khaine. Let the memory of their ringing blades and the glowing resonance of these psychic crystals be sung into the infinity circuit, ensuring the martial perfection forged in this sacred circle is never lost to the dying of the stars.",
  },
  {
    label: "Crystal Dome Main Hall",
    left: "48%", top: "0%", width: "24%", height: "40%",
    color: "#64b4ff",
    previewSrc: crystalDomeMainHall, previewSide: "left" as const,
    text: "Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula quis at magna.",
  },
  {
    label: "Autarch Chamber",
    left: "74%", top: "40%", width: "8%", height: "14%",
    color: "#8b0000",
    previewSrc: autarchChamber, previewSide: "left" as const,
    fragmentId: "autarch-chamber",
  },
  {
    label: "Bone Singers Terrace",
    left: "60%", top: "80%", width: "12%", height: "20%",
    color: "#ff00ff",
    previewSrc: boneSingers, previewSide: "left" as const,
    text: "Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
  },
  {
    label: "Aeldari Statue",
    left: "6%", top: "57%", width: "12%", height: "20%",
    color: "#ea6b26",
    previewSrc: aeldariStatuePreview, previewSide: "right" as const,
    text: "Maecenas faucibus mollis interdum. Nullam quis risus eget urna mollis ornare vel eu leo.",
  },
  {
    label: "Main Hall Entrance",
    left: "52%", top: "50%", width: "12%", height: "20%",
    color: "#8de7f3",
    previewSrc: mainHallEntrancePreview, previewSide: "left" as const,
    text: "Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod.",
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
