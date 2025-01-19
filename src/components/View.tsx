import React, { useState } from "react";
import "./View.css";

const categories = ["Starters & Sharers", "Prime Burgers", "Signature Salads", "Something on the Side"];
const initialProducts = [
  {
    id: 1,
    name: "SPICED CAULIFLOWER",
    description: "Asian-style, crispy fried, spiced cauliflower...",
    calories: "266 kcal",
    price: "8.50",
    category: "Starters & Sharers",
  },
  {
    id: 2,
    name: "THE PLANT-BASED BURGER",
    description: "Vegan burger patty, smashed avocado...",
    calories: "691 kcal",
    price: "17.75",
    category: "Prime Burgers",
  },
];

const FoodOrderPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("Starters & Sharers");
  const [products] = useState(initialProducts);
  const [pickupTime, setPickupTime] = useState("12:30");
  const [basket, setBasket] = useState<string[]>([]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleAddToBasket = (productName: string) => {
    setBasket([...basket, productName]);
  };

  const handlePickupTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPickupTime(e.target.value);
  };

  return (
    <div className="food-order-page">
      {/* Header */}
      <header className="header">
        <p>Register for a Miller & Carter account. <a href="#">Sign-up</a> to get exclusive offers and rewards.</p>
      </header>

      {/* Main Content */}
      <div className="main-content">
        {/* Product Section */}
        <section className="product-section">
          {/* Filters */}
          <div className="filters">
            <span>Filters:</span>
            <button className="filter-button active">Vegetarian</button>
            <button className="filter-button">Vegan</button>
          </div>

          {/* Categories */}
          <div className="categories">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-button ${selectedCategory === category ? "active" : ""}`}
                onClick={() => handleCategoryChange(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Product List */}
         {/* Product List */}
<div className="product-list">
  {products
    .filter((product) => product.category === selectedCategory)
    .map((product) => (
      <div key={product.id} className="product-item">
        <img src="https://via.placeholder.com/100" alt={product.name} />
        <div className="product-info">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>{product.calories}</p>
          <p>£{product.price}</p>
          <button onClick={() => handleAddToBasket(product.name)}>Add to Basket</button>
        </div>
      </div>
    ))}
</div>
        </section>

        {/* Order Summary */}
        <aside className="order-summary">
          <h3>Order Information</h3>
          {basket.length === 0 ? (
            <p>Your basket is empty</p>
          ) : (
            <ul>
              {basket.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
          <div className="additional-info">
            <p><strong>Additional Information</strong></p>
            <p>📍 Miller & Carter Harrow <a href="#">View</a></p>
            <p>⏰ Pick up time: {pickupTime} <a href="#">Change</a></p>
          </div>
          <button className="checkout-button" disabled={basket.length === 0}>
            Checkout
          </button>
        </aside>
      </div>
    </div>
  );
};

export default FoodOrderPage;