import "./HomePage.scss";
import "../../styles/partials/_global.scss";
import axios from "axios";
import { useRef, useEffect, useState } from "react";
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

  const swiperElRef = useRef(null);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener("swiperprogress", (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener("swiperslidechange", (e) => {
      console.log("slide changed");
    });
  }, []);

  return (
    <>
      <section className="slider-section">
        <h2>Plant-Based Foods</h2>
        <swiper-container
          ref={swiperElRef}
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
                <div class="card">
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
          ref={swiperElRef}
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
                <div class="card">
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
          ref={swiperElRef}
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
                <div class="card">
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
        <h2>Vegetables</h2>
        <swiper-container
          ref={swiperElRef}
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
            .filter((product) => product.categories.includes("Vegetables"))
            .map((product) => (
              <swpier-slide key={product.id}>
                <div class="card">
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
              </swpier-slide>
            ))}
        </swiper-container>
      </section>
    </>
  );
}

export default HomePage;
