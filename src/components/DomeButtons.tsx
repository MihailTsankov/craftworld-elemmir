import { useNavigate } from "react-router-dom";

export default function DomeButtons() {
  const navigate = useNavigate();

  return (
    /* Dome button container — same aspect ratio as the image so % positions are image-relative */
    <div className="dome-container">
      <button
        className="dome-hover dome-button-central"
        aria-label="Enter the dome"
        onClick={() => navigate("/dome")}
      />
      <button
        className="dome-hover dome-button-back-side"
        aria-label="Back Side"
        onClick={() => navigate("/back-side")}
      />
      <button
        className="dome-hover dome-button-island-ocean"
        aria-label="Island Ocean"
        onClick={() => navigate("/island-ocean")}
      />
      <button
        className="dome-hover dome-button-small-island"
        aria-label="Small Island"
        onClick={() => navigate("/small-island")}
      />
    </div>
  );
}

