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
    text: "Entering the sweeping wraithbone observatory, I humbled myself before the shimmering dais where High Farseer Elendal Altansar, Autarch Dannaniel Calaelen, and Farseer Inwe Calaelen held court against the vast, starlit canvas of the cosmos. Bathed in the cold light of psychocrystals and the glow of a verdant world below, their unified wisdom anchored the grand chamber as our gathered kin awaited the next turning of the skeins of fate.",
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
    text: "Standing within the verdant sanctuary of the great biodome, I listened in reverent awe as three master Bonesingers played their psycho-sonic instruments, their harmonious melodies coaxing raw warp energy into tangible physical form. Before my very eyes, a magnificent new wraithbone spire elegantly grew from the living earth, its flawless, crystalline architecture adding yet another masterpiece of structural design to the vibrant canvas of our domain.",
  },
  {
    label: "Aeldari Statue",
    left: "6%", top: "57%", width: "12%", height: "20%",
    color: "#ea6b26",
    previewSrc: aeldariStatuePreview, previewSide: "right" as const,
    text: "High upon a crystalline terrace overlooking the great hall, I watched in reverent silence as our gifted Bonesingers wove a sorrowful psychic symphony to coax raw wraithbone into form. Through their harmonious mourning, the majestic visage of a fallen hero slowly materialized from the shimmering ether, immortalizing their battlefield sacrifice in an eternal monument for our Craftworld to honor.",
  },
  {
    label: "Main Hall Entrance",
    left: "52%", top: "50%", width: "12%", height: "20%",
    color: "#8de7f3",
    previewSrc: mainHallEntrancePreview, previewSide: "left" as const,
    text: "Approaching the grand nexus of our Craftworld, I was dwarfed by the breathtaking scale of the main hall, where sweeping, organic curves of pristine wraithbone cradle colossal, glowing psychocrystals that pulse with the vibrant lifeblood of our ancestors. Beneath the protective embrace of the immense starlit dome, this majestic architectural marvel stands as a timeless testament to our enduring elegance, seamlessly merging the tranquility of manicured alien gardens with the vast majesty of the void.",
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
