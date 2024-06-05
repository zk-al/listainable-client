import "./ProductPage.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const PORT = process.env.PORT || 8080;
const baseUrl = `http://localhost:${PORT}`;

function ProductPage() {
  const params = useParams();
  const selectedProduct = params.id;

  const [product, setProduct] = useState("");
  console.log(product);

  useEffect(() => {
    const getProduct = async (id) => {
      try {
        const response = await axios.get(`${baseUrl}/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product data: ", error);
      }
    };
    getProduct(selectedProduct);
  }, []);

  return (
    <section>
      <h1>Product Name</h1>
      <img src="#" alt="Product Iamge" />
      <div>
        <h2>Description</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div>
        <h2>Certifications and Labels</h2>
        <ul>
          <li>Cert 1</li>
        </ul>
      </div>
      <div>
        <h2>Ingredients</h2>
        <ul>
          <li>Ingrent</li>
        </ul>
      </div>
      <div>
        <p>Eco-Score Rating</p>
        <p>Nutri Score Rating</p>
      </div>
    </section>
  );
}

export default ProductPage;
