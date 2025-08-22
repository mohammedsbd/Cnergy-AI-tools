function ShoppingCart({ initialCart }) {
  const [cart, setCart] = React.useState(initialCart);

  const updateQuantity = (id, delta) => {
    const updated = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(1, item.quantity + delta) };
      }
      return item;
    });
    setCart(updated);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ maxWidth: "500px", margin: "auto" }}>
      <h2>Shopping Cart</h2>
      {cart.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "1rem",
          }}
        >
          <span>{item.name}</span>
          <div>
            <button onClick={() => updateQuantity(item.id, -1)}>-</button>
            <span style={{ margin: "0 1rem" }}>{item.quantity}</span>
            <button onClick={() => updateQuantity(item.id, 1)}>+</button>
          </div>
          <span>${item.price * item.quantity}</span>
        </div>
      ))}
      <h3>Total: ${total}</h3>
    </div>
  );
}
