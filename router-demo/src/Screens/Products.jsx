import { Link } from "react-router-dom";
export default function Products() {
  const products = [
    {
      id: 1,
      name: "Wireless Bluetooth Headphones",
      price: 79.99,
      description:
        "Noise-cancelling over-ear headphones with 30-hour battery life.",
    },
    {
      id: 2,
      name: "Mechanical Keyboard",
      price: 119.0,
      description: "RGB backlit mechanical keyboard with tactile switches.",
    },
    {
      id: 3,
      name: "4K IPS Monitor",
      price: 329.99,
      description: "27-inch UHD monitor with vibrant color accuracy.",
    },
    {
      id: 4,
      name: "USB-C Hub",
      price: 39.95,
      description: "7-in-1 hub with HDMI, USB 3.0, SD card, and PD charging.",
    },
    {
      id: 5,
      name: "Smart LED Light Bulb",
      price: 14.99,
      description: "Wi-Fi enabled bulb with adjustable brightness and color.",
    },
  ];

  return (
    <div>
      <h2>Products Page</h2>
      <Link to="/createproduct">Create new product</Link>
      <div>
        {/* link to the details page and pass the id */}
        {products.map((product) => (
          <Link key={product.id} to={`/products/${product.id}`}>
            <div>
              <h3>{product.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
