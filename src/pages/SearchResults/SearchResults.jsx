import "./SearchResults.scss";

function SearchResults() {
  return (
    <section>
      {/* map through results and populate + add to list icon */}
      <div>
        <p>Image: {product.product_image}</p>
        <h3>{product.product_name}</h3>
      </div>
    </section>
  );
}
