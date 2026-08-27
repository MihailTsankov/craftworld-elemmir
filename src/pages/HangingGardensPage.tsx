import hangingGardensImage from "../assets/hanging-gardens.png";
import fireDragonsPreview from "../assets/hanging-gardens-fire-dragons.jpeg";
import fireDragonsFinalBattlePreview from "../assets/hanging-gardens-fire-dragons-fighting.png";
import rangersTemplePreview from "../assets/hanging-gardens-a-temple-rangers.png";
import bathingFallsPreview from "../assets/hanging-gardens-bathing-in-the-pools.png";
import lowerBridgePreview from "../assets/hanging-gardens-the-lower-area.png";
import { ScenePage, SceneFrame } from "../components/ScenePage";
import HoverHotspot from "../components/HoverHotspot";

const hotspots = [
  {
    label: "Fire Dragons Entering",
    left: "47%", top: "37%", width: "15%", height: "25%",
    color: "#91d9ec",
    previewSrc: fireDragonsPreview, previewSide: "left" as const,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula.",
  },
  {
    label: "Fire Dragons Final Battle",
    left: "39%", top: "4%", width: "9%", height: "12%",
    color: "#a14712",
    previewSrc: fireDragonsFinalBattlePreview, previewSide: "right" as const,
    text: "Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui, sit amet risus dapibus.",
  },
  {
    label: "Rangers Temple",
    left: "75%", top: "37%", width: "12%", height: "20%",
    color: "#254268",
    previewSrc: rangersTemplePreview, previewSide: "left" as const,
    text: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },
  {
    label: "Bathing Falls",
    left: "8%", top: "57%", width: "15%", height: "25%",
    color: "#fd70c5",
    previewSrc: bathingFallsPreview, previewSide: "right" as const,
    text: "Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas sed diam eget risus varius blandit.",
  },
  {
    label: "Lower Bridge",
    left: "30%", top: "80%", width: "12%", height: "18%",
    color: "#c572a0",
    previewSrc: lowerBridgePreview, previewSide: "left" as const,
    text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Integer posuere erat a ante.",
  },
];

export default function HangingGardensPage() {
  return (
    <ScenePage>
      <SceneFrame src={hangingGardensImage} alt="Hanging Gardens">
        {hotspots.map((h) => (
          <HoverHotspot key={h.label} {...h} />
        ))}
      </SceneFrame>
    </ScenePage>
  );
}
