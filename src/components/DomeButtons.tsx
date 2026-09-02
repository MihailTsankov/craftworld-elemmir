import { useNavigate } from "react-router-dom";

export default function DomeButtons() {
  const navigate = useNavigate();

  return (
    /* Dome button container — same aspect ratio as the image so % positions are image-relative */
    <div className="dome-container">
      <button
        type="button"
        className="dome-hover dome-button-central"
        aria-label="Enter the dome"
        onClick={() => navigate("/dome")}
      />
      <button
        type="button"
        className="dome-hover dome-button-back-side"
        aria-label="Back Side"
        onClick={() => navigate("/back-side")}
      />
      <button
        type="button"
        className="dome-hover dome-button-island-ocean"
        aria-label="Island Ocean"
        onClick={() => navigate("/island-ocean")}
      />
      <button
        type="button"
        className="dome-hover dome-button-small-island"
        aria-label="Small Island"
        onClick={() => navigate("/small-island")}
      />
      <button
        type="button"
        className="dome-hover dome-button-exodite-planet"
        aria-label="Exodite Planet"
        onClick={() => navigate("/exodite-planet")}
      />
      <button
        type="button"
        className="dome-hover dome-button-hanging-gardens"
        aria-label="Hanging Gardens"
        onClick={() => navigate("/hanging-gardens")}
      />
      <button
        type="button"
        className="dome-hover dome-button-aeldari-library"
        aria-label="Aeldari Library"
        onClick={() => navigate("/aeldari-library")}
      />
    </div>
  );
}

