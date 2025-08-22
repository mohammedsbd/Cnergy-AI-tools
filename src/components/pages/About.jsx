import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ProductCard.css";

const ProductCard = ({ product, onAddToCart }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleAddToCartClick = () => {
    onAddToCart(product.id);
  };

  const renderProductBadges = () => {
    if (!product.badges || product.badges.length === 0) {
      return null;
    }

    return (
      <div className="product-badges">
        {product.badges.map((badge, index) => (
          <span
            key={index}
            className={`product-badge product-badge--${badge.toLowerCase()}`}
          >
            {badge}
          </span>
        ))}
      </div>
    );
  };

  const renderProductRating = () => {
    if (typeof product.rating !== "number") {
      return null;
    }

    const stars = [];
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <i key={`star-${i}`} className="fas fa-star product-rating__star"></i>
      );
    }
    if (hasHalfStar) {
      stars.push(
        <i
          key="star-half"
          className="fas fa-star-half-alt product-rating__star"
        ></i>
      );
    }
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <i
          key={`empty-star-${i}`}
          className="far fa-star product-rating__star"
        ></i>
      );
    }

    return (
      <div className="product-rating">
        {stars}
        <span className="product-rating__value">
          ({product.reviews} reviews)
        </span>
      </div>
    );
  };

  const renderPrice = () => {
    if (product.salePrice) {
      return (
        <div className="product-prices">
          <span className="product-price product-price--sale">
            ${product.salePrice.toFixed(2)}
          </span>
          <span className="product-price product-price--original">
            ${product.originalPrice.toFixed(2)}
          </span>
        </div>
      );
    }
    return (
      <div className="product-prices">
        <span className="product-price">
          ${product.originalPrice.toFixed(2)}
        </span>
      </div>
    );
  };

  return (
    <div
      className={`product-card ${isHovered ? "product-card--hovered" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="product-image-container">
        <img
          src={product.imageURL}
          alt={product.name}
          className="product-image"
        />
        {renderProductBadges()}
      </div>

      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        {renderProductRating()}
        <p className="product-description">{product.description}</p>
        {renderPrice()}
      </div>

      <div className="product-actions">
        <button
          className="add-to-cart-button"
          onClick={handleAddToCartClick}
          disabled={!product.inStock}
        >
          {product.inStock ? "Add to Cart" : "Out of Stock"}
        </button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    originalPrice: PropTypes.number.isRequired,
    salePrice: PropTypes.number,
    inStock: PropTypes.bool.isRequired,
    rating: PropTypes.number,
    reviews: PropTypes.number,
    badges: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductCard;
