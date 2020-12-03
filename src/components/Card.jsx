import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

function Card({ product }) {
  const {
    image,
    price,
    productId,
    productName,
    reviews,
  } = product;

  const history = useHistory();

  const handleClick = () => {
    history.push(`/product/${productId}`);
  };

  return (
    <div className="card">
      <div className="card-img"><img src={image} alt={productName} /></div>
      <div className="card-body">
        <h5 className="card-title">{productName}</h5>
        <p className="card-price">{price}</p>
        <h5 className="card-rating">{reviews[0].rating}</h5>
        <p className="card-reviews">
          {reviews[0].count}
          {' '}
          reviews
        </p>
        <button type="button" onClick={() => handleClick()} className="card-button">See More</button>
      </div>
    </div>
  );
}

Card.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string,
    price: PropTypes.string,
    productId: PropTypes.string,
    productName: PropTypes.string,
    reviews: PropTypes.instanceOf(Array),
  }),
};
Card.defaultProps = {
  product: PropTypes.shape({
    image: '',
    price: '',
    productId: '',
    productName: '',
    reviews: [],
  }),

};

export default Card;
