import type { ReactNode } from "react";
import BackToStarshipIcon from "./BackToStarshipIcon";
import "./ScenePage.css";

/** Shared full-screen page shell: black background + back icon. */
export function ScenePage({ children }: { children: ReactNode }) {
  return (
    <div className="scene-page">
      <BackToStarshipIcon />
      {children}
    </div>
  );
}

interface SceneFrameProps {
  /** Hero image path (import the asset in the consuming page). */
  src: string;
  /** Accessible alt text for the hero image. */
  alt: string;
  /** Optional hotspots / overlays rendered on top of the image. */
  children?: ReactNode;
}

/**
 * Radial-masked image container.  All percentage-positioned children
 * (hotspots) are relative to this element.
 */
export function SceneFrame({ src, alt, children }: SceneFrameProps) {
  return (
    <div className="scene-page__frame">
      <img
        className="scene-page__image"
        src={src}
        alt={alt}
        draggable={false}
      />
      {children}
    </div>
  );
}

