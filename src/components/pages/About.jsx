function FAQ({ questions }) {
  const [openIndex, setOpenIndex] = React.useState(null);

  return (
    <div>
      <h2>FAQs</h2>

      {questions.map((q, index) => (
        <div key={index}>
          <h3 onClick={() => setOpenIndex(openIndex === index ? null : index)} style={{ cursor: 'pointer' }}>

              