import React from 'react'
import { useHistory } from "react-router-dom";


function Card({product}) {
  const {category, dailyRankings, image, inBuybox, keyword, price, productDescription, productId, productName, reviews} = product
  
  let history = useHistory();
  
  const handleClick = (props) => {
    history.push(`/product/${productId}`)
  }

  return (
    <div className="card">
      <div className="card-img"><img src={image} alt={productName}/></div>
      <div className="card-body">
        <h5 className="card-title">{productName}</h5>
        <p className="card-price">{price}</p>
        <h5 className="card-rating">{reviews[0].rating}</h5>
        <p className="card-reviews">{reviews[0].count} reviews</p>
      <button onClick={() => handleClick()} className="card-button">See More</button>
      </div>
    </div>
  )
}

export default Card
