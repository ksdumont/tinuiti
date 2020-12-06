import React, { useState, useContext, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductContext from '../ProductContext';
import Logo from './Logo';
import Chart from './Chart';
import generateStars from '../helper';

function ProductPage() {
  const [currentProduct, setCurrentProduct] = useState({});

  const productList = useContext(ProductContext);

  // product ID from URL
  const { id } = useParams();

  useEffect(() => {
    const currProduct = productList.filter((product) => product.productId === id)[0];
    setCurrentProduct(currProduct);
  }, [currentProduct, productList]);

  return (
    <div className="product-page">
      <Logo />
      {Object.keys(currentProduct).length
        ? (
          <>
            <h1 className="product-title">{currentProduct.productName}</h1>
            <div className="product-details">
              <p className="product-price">{currentProduct.price}</p>
              <h5 className="product-rating">
                {generateStars(currentProduct.reviews[0].rating)}
              </h5>
              <p className="product-reviews">
                {currentProduct.reviews[0].count}
                {' '}
                reviews
              </p>
            </div>
            <h5 className="product-description">{currentProduct.productDescription}</h5>
            <div className="product-chart">
              <Chart
                keyword={currentProduct.keyword}
                dailyRankings={currentProduct.dailyRankings}
              />
            </div>
            <Link to="/">
              <button type="button" className="product-page-button">Back To Products</button>
            </Link>
          </>
        )
        : <h1 className="loading-text">Loading...</h1>}
    </div>
  );
}

export default ProductPage;
