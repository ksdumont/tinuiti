import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import generateStars from '../helper';

function Card({ product }) {
  const {
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
      <div className="card-img"><img src="/lineGraphImage.jpg" alt="graph" /></div>
      <div className="card-body">
        <h5 className="card-title"><strong>{productName}</strong></h5>
        <p className="card-price">{price}</p>
        <h5 className="card-rating">
          {generateStars(reviews[0].rating)}
        </h5>
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
    image: '/lineGraphImage.jpg',
    price: '$91.22',
    productId: '5f95f6674cf51d5b5197ab6f',
    productName: 'Brainclip',
    reviews: [{
      rating: 3,
      count: 903,
    }],
  }),

};

export default Card;
