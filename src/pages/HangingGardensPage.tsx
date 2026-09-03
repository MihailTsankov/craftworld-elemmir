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
    text: "Stepping into the luminous training hall, I observed a disciplined squad of Fire Dragon Aspect Warriors honing their deadly craft upon the intricately rune-carved wraithbone floor. Surrounded by radiant psychocrystals and the breathtaking expanse of a cosmic nebula beyond the grand archways, their fluid, lethal strikes against a vanquished adversary served as a stark reminder of the eternal vigilance required to protect our Craftworld.",
  },
  {
    label: "Fire Dragons Final Battle",
    left: "39%", top: "4%", width: "9%", height: "12%",
    color: "#a14712",
    previewSrc: fireDragonsFinalBattlePreview, previewSide: "right" as const,
    text: "Stepping into the grand amphitheater of the final trial, I watched our resolute Fire Dragons stand back-to-back upon the rune-etched floor, their weapons readied against a terrifying tide of chitinous Tyranid horrors. Framed by the sweeping beauty of a vibrant nebula beyond the open wraithbone arches, this harrowing crucible demands absolute perfection, ensuring our kin are forged into living weapons capable of surviving the galaxy's darkest threats.",
  },
  {
    label: "Rangers Temple",
    left: "75%", top: "37%", width: "12%", height: "20%",
    color: "#254268",
    previewSrc: rangersTemplePreview, previewSide: "left" as const,
    fragmentId: "rangers-temple",
  },
  {
    label: "Bathing Falls",
    left: "8%", top: "57%", width: "15%", height: "25%",
    color: "#fd70c5",
    previewSrc: bathingFallsPreview, previewSide: "right" as const,
    text: "Seeking a moment of respite from the winding paths of the stars, I found solace within these tranquil, cascading garden pools, where the gentle rush of water harmonizes with the quiet hum of glowing psychocrystals. High upon a graceful wraithbone span, a solitary Wraithguard standed as an eternal, silent sentinel, ensuring our kin may rest beneath the breathtaking cosmic tapestry in absolute peace.",
  },
  {
    label: "Lower Bridge",
    left: "30%", top: "80%", width: "12%", height: "18%",
    color: "#c572a0",
    previewSrc: lowerBridgePreview, previewSide: "left" as const,
    text: "Wandering along the rune-etched curves of a secluded wraithbone walkway, I marveled at how seamlessly the vibrant alien flora intertwines with the cool, cascading waters of the terraced garden pools. At the heart of this serene arboretum, a magnificent, glowing blue psychocrystal pulses with the quiet life-song of our Craftworld, offering a sanctuary for profound meditation beneath the silent, starlit expanse of the void.",
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
