import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6); 

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log("Error fetching products:", err));
  }, []);

  const handleAddToCart = (product) => {
    console.log("Added to cart:", product);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6); 
  };

  return (
    <section className="products-container">
      <h2 className="products-title">Kids Products</h2>

      <div className="products-grid">
        {products.slice(0, visibleCount).map((product) => (
          <div className="product-card" key={product.id}>
            <img className="product-image" src={product.image} alt={product.name} />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">${product.price}</p>

            <button
              className="add-to-cart-btn"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      
      {visibleCount < products.length && (
        <div className="text-center mt-4">
          <button className="load-more-btn" onClick={handleLoadMore}>
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default Products;


