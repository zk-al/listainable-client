import "./HomePage.scss";
import "../../styles/partials/_global.scss";
import plusIcon from "../../assets/icons/plus-large-svgrepo-com.svg";
import axios from "axios";
import { useEffect, useState } from "react";
import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/navigation";

const PORT = process.env.REACT_APP_API_PORT || 8080;
const baseUrl = `http://localhost:${PORT}`;

register();

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

  const handleAdd = async (productId) => {
    // This will change to dynamically work depending on the user that is logged in
    const listId = 1;
    console.log(productId);
    try {
      // First, check if the product already exists in the list
      const response = await axios.get(`${baseUrl}/list/${listId}`);
      const productList = response.data; // Assuming the response is an array of products in the list

      const existingProduct = productList.find(
        (product) => product.product_id === productId
      );

      if (!existingProduct) {
        await axios.post(`${baseUrl}/list/${listId}`, {
          productId,
          quantity: 1,
        });
      }
    } catch (error) {
      console.error("Error adding quantity: ", error);
    }
  };

  return (
    <>
      <section className="slider-section">
        <h2>Plant-Based Foods</h2>
        <swiper-container
          slides-per-view="1"
          navigation="true"
          loop="true"
          breakpoints='{
            "320": {
              "slidesPerView": 1,
              "spaceBetween": 20
            },
            "600": {
              "slidesPerView": 2,
              "spaceBetween": 30
            },
            "1024": {
              "slidesPerView": 3,
              "spaceBetween": 40
            }
          }'
        >
          {products
            .filter((product) =>
              product.categories.includes("Plant-based Foods")
            )
            .map((product) => (
              <swiper-slide key={product.id}>
                <div className="card">
                  <div
                    className="card__add"
                    onClick={() => handleAdd(product.id)}
                  >
                    <img
                      className="card__add-icon"
                      src={plusIcon}
                      alt="Plus Icon"
                    />
                  </div>

                  <img
                    className="card__image"
                    src={`${baseUrl}/${product.product_image}`}
                    alt={product.product_name}
                  />
                  <div className="card__text">
                    <h3 className="card__name">{product.product_name}</h3>
                    <h4 className="eco-score">
                      Eco Score: {product.eco_score}
                    </h4>
                    <h4 className="nutri-score">
                      Nutri Score: {product.nutri_score}
                    </h4>
                  </div>
                </div>
              </swiper-slide>
            ))}
        </swiper-container>
      </section>
      <section className="slider-section">
        <h2>Frozen Foods</h2>
        <swiper-container
          slides-per-view="1"
          navigation="true"
          loop="true"
          breakpoints='{
            "320": {
              "slidesPerView": 1,
              "spaceBetween": 20
            },
            "600": {
              "slidesPerView": 2,
              "spaceBetween": 30
            },
            "1024": {
              "slidesPerView": 3,
              "spaceBetween": 40
            }
          }'
        >
          {products
            .filter((product) => product.categories.includes("Frozen Foods"))
            .map((product) => (
              <swiper-slide key={product.id}>
                <div className="card">
                  <div className="card__add">
                    <img
                      className="card__add-icon"
                      src={plusIcon}
                      alt="Plus Icon"
                    />
                  </div>
                  <img
                    className="card__image"
                    src={`${baseUrl}/${product.product_image}`}
                    alt={product.product_name}
                  />
                  <div className="card__text">
                    <h3 className="card__name">{product.product_name}</h3>
                    <h4 className="eco-score">
                      Eco Score: {product.eco_score}
                    </h4>
                    <h4 className="nutri-score">
                      Nutri Score: {product.nutri_score}
                    </h4>
                  </div>
                </div>
              </swiper-slide>
            ))}
        </swiper-container>
      </section>
      <section className="slider-section">
        <h2>Snacks</h2>
        <swiper-container
          slides-per-view="1"
          navigation="true"
          loop="true"
          breakpoints='{
            "320": {
              "slidesPerView": 1,
              "spaceBetween": 20
            },
            "600": {
              "slidesPerView": 2,
              "spaceBetween": 30
            },
            "1024": {
              "slidesPerView": 3,
              "spaceBetween": 40
            }
          }'
        >
          {products
            .filter((product) => product.categories.includes("Snacks"))
            .map((product) => (
              <swiper-slide key={product.id}>
                <div className="card">
                  <div className="card__add">
                    <img
                      className="card__add-icon"
                      src={plusIcon}
                      alt="Plus Icon"
                    />
                  </div>
                  <img
                    className="card__image"
                    src={`${baseUrl}/${product.product_image}`}
                    alt={product.product_name}
                  />
                  <div className="card__text">
                    <h3 className="card__name">{product.product_name}</h3>
                    <h4 className="eco-score">
                      Eco Score: {product.eco_score}
                    </h4>
                    <h4 className="nutri-score">
                      Nutri Score: {product.nutri_score}
                    </h4>
                  </div>
                </div>
              </swiper-slide>
            ))}
        </swiper-container>
      </section>
    </>
  );
}

export default HomePage;
