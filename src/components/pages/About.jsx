function Accordion({ items }) {
  const [openIndex, setOpenIndex] = React.useState(null);

  return (
    <div>
      {items.map((item, i) => (
        <div key={i}>
          <h4
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            style={{ cursor: "pointer" }}
          >
            {item.title}
          </h4>
          {openIndex === i && <p>{item.content}</p>}
        </div>
      ))}
    </div>
  );
}
function About() {

  