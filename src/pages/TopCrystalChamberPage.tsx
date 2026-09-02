import topCrystalImage from "../assets/top-crystal-chamber.jfif";
import topCrystalChamberCloser from "../assets/top-crystal-chamber-closer.jfif";
import topCrystalChamberCrystal from "../assets/top-crystal-chamber-crystal.jfif";
import HoverHotspot from "../components/HoverHotspot";
import { ScenePage, SceneFrame } from "../components/ScenePage";

const hotspots = [
  {
    label: "Crystal Chamber Closeup",
    left: "46%",
    top: "55%",
    width: "30%",
    height: "25%",
    color: "#64b4ff",
    previewSrc: topCrystalChamberCloser,
    previewSide: "left" as const,
    text: "Look well, cousins, upon this focusing matrix of the Infinity Circuit; here, the souls of our ancestor-dancers, the very best of us, are preserved in exquisite grace, their forms integrated into the living data-strata of the Wraithbone’s core.",
  },
  {
    label: "Crystal Chamber - The Crystal",
    left: "62.5%",
    top: "39.5%",
    width: "4%",
    height: "12%",
    color: "#0A54F8B3",
    previewSrc: topCrystalChamberCrystal,
    previewSide: "left" as const,
    text: "My kin, look upon this masterwork of soul-craft. Deep within the heart-marrow of Craftworld Elemmir, the bone-white spires of wraithbone form a sacred reliquary. Here, cradled like a singular sapphire jewel within a complex, spiraling cage of psych-receptive bone, is a focusing matrix of the Infinity Circuit itself. Peer beyond the external clusters of glowing psychic crystals and deep into the azure depths. See them? Two of our departed, preserved in an endless, intricate communion. Their faces, elegant and serene, are not merely depicted; they are composed from the swirling, deepest blue cosmic energy that powers our great ship. Take moment, and feel the silent echo of their ancient, beautiful melodies. Every memory and whisper they ever possessed now feeds the grand tapestry of our future. We tread on the souls of our past to build a path for our tomorrow.",
  },
];

export default function TopCrystalChamberPage() {
  return (
    <ScenePage>
      <SceneFrame src={topCrystalImage} alt="Top Crystal Chamber">
        {hotspots.map((h) => (
          <HoverHotspot key={h.label} {...h} />
        ))}
      </SceneFrame>
    </ScenePage>
  );
}
