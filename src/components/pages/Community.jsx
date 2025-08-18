import React, { useState, useEffect, useCallback, useRef } from "react";

// --- Utility function to map key codes to notes ---
const keyToNoteMap = {
  a: "C4",
  w: "C#4",
  s: "D4",
  e: "D#4",
  d: "E4",
  f: "F4",
  t: "F#4",
  g: "G4",
  y: "G#4",
  h: "A4",
  u: "A#4",
  j: "B4",
  k: "C5",
  o: "C#5",
  l: "D5",
  p: "D#5",
  ";": "E5",
};

const noteToKeyMap = Object.entries(keyToNoteMap).reduce((acc, [key, note]) => {
  acc[note] = key;
  return acc;
}, {});

// --- Component for a single piano key ---
const PianoKey = React.memo(
  ({ note, isBlack, isActive, onPlayNote, keyboardKey }) => {
    const noteName = note.includes("#")
      ? note.replace("4", "").replace("5", "").replace("#", "") + "#"
      : note.replace("4", "").replace("5", "");
    const keyClass = isBlack ? "black-key" : "white-key";
    const activeClass = isActive ? "active" : "";

    return (
      <div
        className={`piano-key ${keyClass} ${activeClass}`}
        onMouseDown={() => onPlayNote(note)}
      >
        <span className="key-label">{noteName}</span>
        {keyboardKey && <span className="keyboard-label">{keyboardKey}</span>}
      </div>
    );
  }
);

// --- Main Piano component ---
const ReactPiano = () => {
  const [activeKeys, setActiveKeys] = useState(new Set());
  const synthRef = useRef(null);

  // Initialize the sound synthesizer
  useEffect(() => {
    // This uses the Web Audio API to generate a simple sine wave tone.
    // In a real app, you'd use a more robust library like Tone.js or Howler.js.
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (AudioContext) {
      const audioCtx = new AudioContext();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      oscillator.type = "sine";
      oscillator.start();
      gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
      synthRef.current = { audioCtx, oscillator, gainNode };
    }
    return () => {
      if (synthRef.current) {
        synthRef.current.audioCtx.close();
      }
    };
  }, []);

  const playNote = useCallback((note) => {
    if (!synthRef.current) return;
    const { audioCtx, oscillator, gainNode } = synthRef.current;

    // Convert a note name (e.g., 'C4') to its frequency
    const A4 = 440;
    const notes = [
      "C",
      "C#",
      "D",
      "D#",
      "E",
      "F",
      "F#",
      "G",
      "G#",
      "A",
      "A#",
      "B",
    ];
    const octave = parseInt(note.slice(-1));
    const noteIndex = notes.indexOf(note.slice(0, -1));
    const semitonesFromA4 = (octave - 4) * 12 + (noteIndex - 9);
    const frequency = A4 * Math.pow(2, semitonesFromA4 / 12);

    oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);
    gainNode.gain.setValueAtTime(0.5, audioCtx.currentTime);

    setActiveKeys((prev) => new Set(prev).add(note));
    setTimeout(() => {
      gainNode.gain.setValueAtTime(0, audioCtx.currentTime + 0.1);
      setActiveKeys((prev) => {
        const newSet = new Set(prev);
        newSet.delete(note);
        return newSet;
      });
    }, 200);
  }, []);

  // Handle keyboard events for playing notes
  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();
      if (keyToNoteMap[key]) {
        playNote(keyToNoteMap[key]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [playNote]);

  const notes = ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5", "D5", "E5"];
  const blackKeys = ["C#4", "D#4", "F#4", "G#4", "A#4", "C#5", "D#5"];

  return (
    <div className="piano-container">
      <h2>React Interactive Piano</h2>
      <div className="piano-keyboard">
        {notes.map((note) => (
          <PianoKey
            key={note}
            note={note}
            isBlack={false}
            isActive={activeKeys.has(note)}
            onPlayNote={playNote}
            keyboardKey={noteToKeyMap[note]}
          />
        ))}
        {blackKeys.map((note) => (
          <PianoKey
            key={note}
            note={note}
            isBlack={true}
            isActive={activeKeys.has(note)}
            onPlayNote={playNote}
            keyboardKey={noteToKeyMap[note]}
          />
        ))}
      </div>
    </div>
  );
};

export default ReactPiano;
