import libraryImage from "../assets/library.png";
import librarySymbolBook from "../assets/library-symbol-elemmir-sci-fi-book.jfif";
import { ScenePage, SceneFrame } from "../components/ScenePage";
import HoverHotspot from "../components/HoverHotspot";

export default function AeldariLibraryPage() {
  return (
    <ScenePage>
      <SceneFrame src={libraryImage} alt="Aeldari Library">
        <HoverHotspot
          label="Elemmir Star Jewel Codex"
          left="55%"
          top="69%"
          width="12%"
          height="12%"
          color="#6DCFEAB3"
          previewSrc={librarySymbolBook}
          previewAlt="Elemmir sci-fi book sigil"
          previewSide="left"
          text="Within the glowing datascrolls of an intricate sigil of our kin is projected, its elegant framework cradling a deep sapphire spirit stone that mirrors the cosmos. Surrounded by the flowing geometry of our ancient script and a schematic of a sealed portal, this tome preserves the sacred wisdom of the Elemmir (Star Jewel) for generations yet to awaken."
        />
      </SceneFrame>
    </ScenePage>
  );
}
