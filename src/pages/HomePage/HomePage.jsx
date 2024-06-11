import "./HomePage.scss";
import "../../styles/partials/_global.scss";
import plusIcon from "../../assets/icons/plus-large-svgrepo-com.svg";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { register } from "swiper/element/bundle";
import { Link } from "react-router-dom";

const PORT = process.env.REACT_APP_API_PORT || 8080;
const baseUrl = `http://localhost:${PORT}`;

register();

function HomePage() {
  const plantBasedSwiperRef = useRef(null);
  const frozenFoodsSwiperRef = useRef(null);
  const snacksSwiperRef = useRef(null);

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

  const initSwiper = (swiperRef) => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: true,
      loop: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        550: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        810: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
      injectStyles: [
        `.swiper-button-next, 
          .swiper-button-prev {
              color: #195321;
              transition: 0.25s;
          }
          .swiper-button-next:hover, 
          .swiper-button-prev:hover {
              color: #69995d;
          }
        `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  };

  useEffect(() => {
    initSwiper(plantBasedSwiperRef);
    initSwiper(frozenFoodsSwiperRef);
    initSwiper(snacksSwiperRef);
  }, [products]);

  const handleAdd = async (productId) => {
    // This will change to dynamically work depending on the user that is logged in
    const listId = 1;
    try {
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
      alert("Item added! Check your list to update the quantity.");
    } catch (error) {
      console.error("Error adding quantity: ", error);
    }
  };

  return (
    <>
      <section className="slider-section">
        <h2 className="slider-section__header">Plant-Based Foods</h2>
        <swiper-container ref={plantBasedSwiperRef} init="false">
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
                  <Link to={`/product/${product.id}`}>
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
                  </Link>
                </div>
              </swiper-slide>
            ))}
        </swiper-container>
      </section>
      <section className="slider-section">
        <h2 className="slider-section__header">Frozen Foods</h2>
        <swiper-container ref={frozenFoodsSwiperRef} init="false">
          {products
            .filter((product) => product.categories.includes("Frozen Foods"))
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
                  <Link to={`/product/${product.id}`}>
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
                  </Link>
                </div>
              </swiper-slide>
            ))}
        </swiper-container>
      </section>
      <section className="slider-section">
        <h2 className="slider-section__header">Snacks</h2>
        <swiper-container ref={snacksSwiperRef} init="false">
          {products
            .filter((product) => product.categories.includes("Snacks"))
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
                  <Link to={`/product/${product.id}`}>
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
                  </Link>
                </div>
              </swiper-slide>
            ))}
        </swiper-container>
      </section>
    </>
  );
}

export default HomePage;
