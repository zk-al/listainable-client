import "./ProductPage.scss";
import "../../styles/partials/_global.scss";

import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const PORT = process.env.REACT_APP_API_PORT || 8080;
const baseUrl = `http://localhost:${PORT}`;

function ProductPage() {
  const params = useParams();
  const selectedProduct = params.id;

  const [product, setProduct] = useState([]);

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
    console.log(product);
  }, []);

  return (
    <section>
      <h1>{product.product_name}</h1>
      <img
        src={`${baseUrl}/${product.product_image}`}
        alt={product.product_name}
      />
      <div>
        <h2>Certifications and Labels</h2>
        <ul>
          {product.certifications?.map((cert) => (
            <li>{cert}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Ingredients</h2>
        <ul>
          {product.ingredients?.map((ingredient) => (
            <li>{ingredient}</li>
          ))}
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
