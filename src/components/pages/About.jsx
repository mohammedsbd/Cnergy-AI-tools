function ProductGrid({ products }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
      {products.map((product) => (
        <div
          key={product.id}
          style={{ border: "1px solid #ddd", padding: "1rem", width: "200px" }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "100%" }}
          />
          <h4>{product.name}</h4>
          <p>${product.price}</p>
          <button onClick={() => alert(`${product.name} added to cart!`)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
