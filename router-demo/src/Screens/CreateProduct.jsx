import { useNavigate } from "react-router-dom";
export default function CreateProduct() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Create new product</h2>
      <form action="">
        <div>
          <label htmlFor="">Name: </label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Description: </label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Price: </label>
          <input type="text" />
        </div>
        <button type="submit">Create this product</button>
      </form>
      <button onClick={() => navigate("/products")}>Back to products</button>
    </div>
  );
}
