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
      <h1>{product.product_name}</h1>
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
        {/* TODO:
            1. Turn certifications into array of strings
            2. .map through data to populate list 
        */}
        <ul>
          <li>{product.certifications}</li>
        </ul>
      </div>
      <div>
        <h2>Ingredients</h2>
        {/* TODO:
            1. Turn ingredients into array of strings
            2. .map through data to populate list 
        */}
        <ul>
          <li>{product.ingredients}</li>
        </ul>
      </div>
      <div>
        <p>Eco-Score Rating {product.eco_score}</p>
        <p>Nutri Score Rating {product.nutri_score}</p>
      </div>
    </section>
  );
}

export default ProductPage;
