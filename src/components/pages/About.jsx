import React from "react";

const sessions = [
  { time: "09:00 AM", topic: "Opening Keynote", speaker: "Dr. Smith" },
  { time: "11:00 AM", topic: "AI in Healthcare", speaker: "Prof. Lee" },
  { time: "02:00 PM", topic: "Future of Robotics", speaker: "Dr. Patel" },
];

export default function AIConferenceSchedule() {
  return (
    <section className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">AI Conference Schedule</h1>
      <ul className="space-y-4">
        {sessions.map((s, i) => (
          <li key={i} className="p-4 bg-gray-50 border rounded shadow-sm">
            <h2 className="text-lg font-semibold">{s.topic}</h2>
            <p className="text-sm text-gray-600">
              {s.time} · {s.speaker}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
