import React, { useState } from "react";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error', or null

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreedToTerms) {
      alert("You must agree to the terms and conditions.");
      return;
    }

    // Simulate API call
    console.log("Submitting email:", email);
    setSubmissionStatus("success");

    setTimeout(() => {
      setEmail("");
      setAgreedToTerms(false);
      setSubmissionStatus(null);
    }, 3000);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">
        Stay up-to-date with our AI insights.
      </h3>
      <p className="text-gray-600 mb-6">
        Join our newsletter to receive the latest news and updates directly to
        your inbox.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email-input" className="sr-only">
            Email address
          </label>
          <input
            id="email-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email address"
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div className="flex items-center">
          <input
            id="terms-checkbox"
            type="checkbox"
            checked={agreedToTerms}
            onChange={(e) => setAgreedToTerms(e.target.checked)}
            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label
            htmlFor="terms-checkbox"
            className="ml-2 block text-sm text-gray-900"
          >
            I agree to the{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Terms & Conditions
            </a>
            .
          </label>
        </div>
        <button
          type="submit"
          disabled={!agreedToTerms || !email}
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md disabled:opacity-50 transition duration-300"
        >
          Subscribe
        </button>
      </form>
      {submissionStatus === "success" && (
        <div className="mt-4 p-3 text-sm text-green-700 bg-green-100 rounded-md">
          🎉 Thanks for subscribing! Check your inbox.
        </div>
      )}
    </div>
  );
};

export default NewsletterForm;
