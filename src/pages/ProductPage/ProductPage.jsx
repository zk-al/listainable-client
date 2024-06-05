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
    <>
      <h1>TEST</h1>
    </>
  );
}

export default ProductPage;
