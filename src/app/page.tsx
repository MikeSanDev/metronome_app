"use client";
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
            <div className="adjust-tempo-btn decrease-tempo">-</div>
            <input type="range" min="20" max="280" step="1" className="slider"></input>
            <div className="adjust-tempo-btn increase-tempo">+</div>
          </div>
          <div className="start-stop">START</div>
          <div className="measures">
            <div className="subtract-beats stepper">-</div>
            <div className="measure-count"> 4 </div>
            <div className="add-beats stepper">+</div>
          </div>
          <span className="beats-per-measure-text">Beats per measure</span>
        </div>
      </div>
    </>

  );
}



// React method 
// "use client";
// import React, { useState } from "react";

// export default function Home() {
//   const [bpm, setBpm] = useState<number>(140); // Tempo in BPM
//   const [beatsPerMeasure, setBeatsPerMeasure] = useState<number>(4); // Beats per measure
//   const [isPlaying, setIsPlaying] = useState<boolean>(false); // Play/Stop toggle

//   const handleIncreaseTempo = () => {
//     if (bpm < 280) setBpm((prev) => prev + 1);
//   };

//   const handleDecreaseTempo = () => {
//     if (bpm > 20) setBpm((prev) => prev - 1);
//   };

//   const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setBpm(Number(e.target.value));
//   };

//   const handleStartStop = () => {
//     setIsPlaying((prev) => !prev);
//     console.log(isPlaying ? "Stopped" : `Playing at ${bpm} BPM`);
//   };

//   const handleAddBeats = () => {
//     if (beatsPerMeasure < 16) setBeatsPerMeasure((prev) => prev + 1);
//   };

//   const handleSubtractBeats = () => {
//     if (beatsPerMeasure > 1) setBeatsPerMeasure((prev) => prev - 1);
//   };

//   return (
//     <div className="container">
//       <div className="metronome">
//         <div className="bpm-display">
//           <span className="tempo">{bpm}</span>
//           <span className="bpm">BPM</span>
//         </div>
//         <div className="tempo-text">
//           {bpm < 60
//             ? "Slow"
//             : bpm < 120
//             ? "Moderate"
//             : bpm < 180
//             ? "Fast"
//             : "Super Fast"}
//         </div>
//         <div className="tempo-settings">
//           <button
//             className="adjust-tempo-btn decrease-tempo"
//             onClick={handleDecreaseTempo}
//           >
//             -
//           </button>
//           <input
//             type="range"
//             min="20"
//             max="280"
//             step="1"
//             className="slider"
//             value={bpm}
//             onChange={handleSliderChange}
//           />
//           <button
//             className="adjust-tempo-btn increase-tempo"
//             onClick={handleIncreaseTempo}
//           >
//             +
//           </button>
//         </div>
//         <button className="start-stop" onClick={handleStartStop}>
//           {isPlaying ? "STOP" : "START"}
//         </button>
//         <div className="measures">
//           <button className="subtract-beats stepper" onClick={handleSubtractBeats}>
//             -
//           </button>
//           <div className="measure-count">{beatsPerMeasure}</div>
//           <button className="add-beats stepper" onClick={handleAddBeats}>
//             +
//           </button>
//         </div>
//         <span className="beats-per-measure-text">Beats per measure</span>
//       </div>
//     </div>
//   );
// }