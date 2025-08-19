import React, { useState } from "react";

export default function StepperForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: "", email: "" });

  const next = () => setStep((s) => s + 1);
  const prev = () => setStep((s) => s - 1);

  return (
    <div className="p-4 max-w-sm mx-auto">
      <h1 className="text-xl font-bold mb-3">Stepper Form</h1>
      {step === 1 && (
        <input
          placeholder="Name"
          className="w-full border px-2 py-1 mb-3"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      )}
      {step === 2 && (
        <input
          placeholder="Email"
          className="w-full border px-2 py-1 mb-3"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      )}
      {step === 3 && (
        <p>
          Confirm: {form.name} - {form.email}
        </p>
      )}
      <div className="space-x-2 mt-3">
        {step > 1 && (
          <button onClick={prev} className="px-3 py-1 bg-gray-400 rounded">
            Back
          </button>
        )}
        {step < 3 && (
          <button
            onClick={next}
            className="px-3 py-1 bg-blue-600 text-white rounded"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
