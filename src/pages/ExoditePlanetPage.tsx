import exoditePlanetImage from "../assets/exodite-world.png";
import exoditeTemplePreview from "../assets/exodite-temple.png";
import exoditeDinoAreaPreview from "../assets/exodite-dino-area.png";
import exoditeRidersPreview from "../assets/exodite-veloci-riders.png";
import exoditeHatcheryPreview from "../assets/exodite-veloci-hatchery.png";
import exoditeCommunalPreview from "../assets/exodite-communal-area.jfif";
import { ScenePage, SceneFrame } from "../components/ScenePage";
import HoverHotspot from "../components/HoverHotspot";

const hotspots = [
  {
    label: "Exodite Temple",
    left: "60%", top: "55%", width: "25%", height: "28%",
    color: "#9aad53",
    previewSrc: exoditeTemplePreview, previewSide: "left" as const,
    fragmentId: "exodite-temple",
  },
  {
    label: "Exodite Settlement",
    left: "20%", top: "60%", width: "23%", height: "20%",
    color: "#837245",
    previewSrc: exoditeDinoAreaPreview, previewSide: "right" as const,
    text: "Nestled beneath the sprawling, ancient roots of a colossal forest giant, this secluded settlement seamlessly weaves our graceful wraithbone spires into the living, breathing heart of the Maiden World. Among these quiet, moss-draped homes, our kindred share their daily existence with magnificent plated saurian beasts, standing as a tranquil testament to a life lived in perfect harmony with untamed nature.",
  },
  {
    label: "Exodite Riders",
    left: "43%", top: "30%", width: "10%", height: "12%",
    color: "#bd6e5e",
    previewSrc: exoditeRidersPreview, previewSide: "right" as const,
    text: "I watched my rustic Exodite kin patrol the untamed paths of a Maiden World astride their swift saurian beasts. They rode with vigilant grace beneath ancient, rune-carved wraithbone arches and towering psychocrystals, their bright armor a bold testament to our enduring legacy among the stars.",
  },
  {
    label: "Velociraptor Hatchery",
    left: "10%", top: "20%", width: "15%", height: "13%",
    color: "#fffeef",
    previewSrc: exoditeHatcheryPreview, previewSide: "left" as const,
    text: "Deep within the emerald embrace of the jungle, I chanced upon a secluded wraithbone sanctuary where our kin gently tend to the next generation of saurian mounts. Here among the ancient, moss-draped arches, these fierce beasts are nurtured from speckled eggs to fearsome predators, bound to our people by the harmonious song of the Maiden World.",
  },
  {
    label: "Communal Area",
    left: "74%", top: "24%", width: "12%", height: "10%",
    color: "#D5CBB4FF",
    previewSrc: exoditeCommunalPreview, previewSide: "left" as const,
    text: "Commit this verdant sanctuary to the memory of our seers, kin, for it is the sacred forum where our Exodite cousins have long converged to harmonize with the Maiden Worlds. Here, bathed in the world-song, scattered kindreds gather to weave the threads of ancestral lore, exchange the vital wisdom of the soil, and forge the communal bonds that ensure our enduring survival against the dying of the stars.",
  },
];

export default function ExoditePlanetPage() {
  return (
    <ScenePage>
      <SceneFrame src={exoditePlanetImage} alt="Exodite Planet">
        {hotspots.map((h) => (
          <HoverHotspot key={h.label} {...h} />
        ))}
      </SceneFrame>
    </ScenePage>
  );
}
