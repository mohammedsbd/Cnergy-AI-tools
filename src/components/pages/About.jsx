function ImageCarousel({ images }) {
  const [index, setIndex] = React.useState(0);

  const nextImage = () => setIndex((index + 1) % images.length);
  const prevImage = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div style={{ width: "300px", margin: "auto", textAlign: "center" }}>
      <img
        src={images[index]}
        alt="carousel"
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />
      <div style={{ marginTop: "1rem" }}>
        <button onClick={prevImage}>Previous</button>
        <span style={{ margin: "0 1rem" }}>
          {index + 1} / {images.length}
        </span>
        <button onClick={nextImage}>Next</button>
      </div>
    </div>
  );
}
