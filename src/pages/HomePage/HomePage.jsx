import "./HomePage.scss";
import axios from "axios";
import { useEffect, useState } from "react";

const PORT = process.env.PORT || 8080;
const baseUrl = `http://localhost:${PORT}`;

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(`${baseUrl}/products`);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };
    getProducts();
  }, []);

  return (
    <>
      <h2>Plant-Based Foods</h2>
      {products
        .filter((product) => product.categories.includes("Plant-Based Foods"))
        .map((product) => (
          <section key={product.id}>
            <div>
              <p>Image: {product.product_image}</p>
              <h3>{product.product_name}</h3>
            </div>
          </section>
        ))}
      <h2>Frozen Foods</h2>
      {products
        .filter((product) => product.categories.includes("Frozen Foods"))
        .map((product) => (
          <section key={product.id}>
            <div>
              <p>Image: {product.product_image}</p>
              <h3>{product.product_name}</h3>
            </div>
          </section>
        ))}
      <h2>Snacks</h2>
      {products
        .filter((product) => product.categories.includes("Snacks"))
        .map((product) => (
          <section key={product.id}>
            <div>
              <p>Image: {product.product_image}</p>
              <h3>{product.product_name}</h3>
            </div>
          </section>
        ))}
      <h2>Vegetables</h2>
      {products
        .filter((product) => product.categories.includes("Vegetables"))
        .map((product) => (
          <section key={product.id}>
            <div>
              <p>Image: {product.product_image}</p>
              <h3>{product.product_name}</h3>
            </div>
          </section>
        ))}
    </>
  );
}

export default HomePage;
