import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

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

  const generateStars = (rating) => {
    const result = [];
    for (let i = 1; i < 6; i += 1) {
      if (i <= rating) {
        result.push(<i className="fa fa-star star-checked" />);
      } else {
        result.push(<i className="fa fa-star-o star-empty" />);
      }
    }
    return result;
  };
  return (
    <div className="card">
      <div className="card-img"><img src="/lineGraphImage.jpg" alt="graph" /></div>
      <div className="card-body">
        <h5 className="card-title">{productName}</h5>
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
    image: '',
    price: '',
    productId: '',
    productName: '',
    reviews: [],
  }),

};

export default Card;
