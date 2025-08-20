import React, { useState } from "react";

function SurveyBuilder() {
  const [questions, setQuestions] = useState([]);
  const [qText, setQText] = useState("");

  const addQuestion = () => {
    if (!qText.trim()) return;
    setQuestions((q) => [...q, { text: qText.trim(), id: Date.now() }]);
    setQText("");
  };

  return (
    <div>
      <h2>Survey Builder</h2>
      <input
        value={qText}
        onChange={(e) => setQText(e.target.value)}
        placeholder="New question"
      />
      <button onClick={addQuestion}>Add</button>
      <ol>
        {questions.map((q) => (
          <li key={q.id}>{q.text}</li>
        ))}
      </ol>
    </div>
  );
}

export default SurveyBuilder;
