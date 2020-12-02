import React from 'react'


function Card({product}) {
  const {category, dailyRankings, keyword, price, productDescription, productName, reviews, image} = product
  
  const displayStars = (rating) => {
    let node = document.createElement("div")
    for (let i = 0; i <= 5; i++) {
      if (i <= rating) {
        node.appendChild('<span class="fa fa-star checked"></span>')
      } else {
        node.appendChild('<span class="fa fa-star"></span>')
      }
    }
    return node;
  }

  return (
    <div className="card">
      <div className="card-img"><img src={image} alt={productName}/></div>
      <div className="card-body">
        <h5 className="card-title">{productName}</h5>
        <p className="card-price">{price}</p>
      <div className="card-body">
        <h5 className="card-rating">{reviews[0].rating}</h5>
        <p className="card-reviews">{reviews[0].count} reviews</p>
      </div>
      <button className="card-button">See More</button>
      </div>
    </div>
  )
}

export default Card
