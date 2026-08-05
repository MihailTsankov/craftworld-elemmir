import exoditePlanetImage from "../assets/exodite-world.png";
import exoditeTemplePreview from "../assets/exodite-temple.png";
import exoditeDinoAreaPreview from "../assets/exodite-dino-area.png";
import exoditeRidersPreview from "../assets/exodite-veloci-riders.png";
import exoditeHatcheryPreview from "../assets/exodite-veloci-hatchery.png";
import { ScenePage, SceneFrame } from "../components/ScenePage";
import HoverHotspot from "../components/HoverHotspot";

const hotspots = [
  {
    label: "Exodite Temple",
    left: "60%", top: "55%", width: "25%", height: "28%",
    color: "#9aad53",
    previewSrc: exoditeTemplePreview, previewSide: "left" as const,
  },
  {
    label: "Exodite Settlement",
    left: "20%", top: "60%", width: "23%", height: "20%",
    color: "#837245",
    previewSrc: exoditeDinoAreaPreview, previewSide: "right" as const,
  },
  {
    label: "Exodite Riders",
    left: "43%", top: "30%", width: "10%", height: "12%",
    color: "#bd6e5e",
    previewSrc: exoditeRidersPreview, previewSide: "right" as const,
  },
  {
    label: "Velociraptor Hatchery",
    left: "10%", top: "20%", width: "15%", height: "13%",
    color: "#fffeef",
    previewSrc: exoditeHatcheryPreview, previewSide: "left" as const,
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
