import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="metronome">
          <div className="bpm-display">
            <span className="tempo">140</span>
            <span className="bpm">BPM</span>
          </div>
          <div className="tempo-text">Super Fast</div>
          <div className="tempo-settings">
            <div className="adjust-tempo decrease-tempo">-</div>
            <input type="range" min="20" max="280" step="1" className="slider"></input>
            <div className="adjust-tempo increase-tempo">+</div>
          </div>

        </div>
      </div>
    </>

  );
}
