function MultiStepForm() {
  const [step, setStep] = React.useState(1);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const next = () => setStep(step + 1);
  const back = () => setStep(step - 1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      {step === 1 && (
        <>
          <h3>Step 1: Personal Info</h3>
          <input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <br />
          <button onClick={next}>Next</button>
        </>
      )}
      {step === 2 && (
        <>
          <h3>Step 2: Contact</h3>
          <input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <br />
          <button onClick={back}>Back</button>
          <button onClick={next}>Next</button>
        </>
      )}
      {step === 3 && (
        <>
          <h3>Step 3: Security</h3>
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <br />
          <button onClick={back}>Back</button>
          <button onClick={() => alert(JSON.stringify(formData, null, 2))}>
            Submit
          </button>
        </>
      )}
    </div>
  );
}
