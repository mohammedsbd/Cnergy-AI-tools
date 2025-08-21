import React, { useState } from "react";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h3 className="text-xl font-bold mb-4">Step 1: Your Information</h3>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-2 border rounded"
            />
          </div>
        );
      case 2:
        return (
          <div>
            <h3 className="text-xl font-bold mb-4">Step 2: AI Preferences</h3>
            <textarea
              placeholder="Tell us about your AI needs..."
              rows="4"
              className="w-full p-2 border rounded"
            ></textarea>
          </div>
        );
      case 3:
        return (
          <div>
            <h3 className="text-xl font-bold mb-4">Step 3: Confirmation</h3>
            <p>Review your details and submit.</p>
          </div>
        );
      default:
        return null;
    }
  };

  const progressPercentage = (step / totalSteps) * 100;

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl mx-auto">
      <div className="mb-6">
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-in-out"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <div className="text-right text-sm text-gray-500 mt-2">
          Step {step} of {totalSteps}
        </div>
      </div>
      {renderStepContent()}
      <div className="flex justify-between mt-6">
        <button
          onClick={handleBack}
          disabled={step === 1}
          className="px-4 py-2 border rounded-md text-gray-700 disabled:opacity-50"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          {step === totalSteps ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default MultiStepForm;
