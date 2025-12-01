//Link to product details and pass it an id
//product details will then find the product with the matching id and display it
import { useParams, useNavigate } from "react-router-dom";
export default function ProductDetails() {
  //get the id from params
  const { productId } = useParams();
  //navigate is used to go to pages in the routes using javascript
  const navigate = useNavigate();
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
  //get the product with the matching id
  const product = products.find((p) => p.id == productId);
  return (
    <div>
      <h2>Product Details: {product.name}</h2>
      <p>Description: {product.description}</p>
      <p>Price: {product.price}</p>
      <button onClick={() => navigate("/products")}>Go back to products</button>
    </div>
  );
}
