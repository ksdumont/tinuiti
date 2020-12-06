import React from 'react';
// calculate star ratings
function generateStars(rating) {
  const result = [];
  for (let i = 1; i < 6; i += 1) {
    if (i <= rating) {
      result.push(<i key={i} className="fa fa-star star-checked" />);
    } else {
      result.push(<i key={i} className="fa fa-star-o star-empty" />);
    }
  }
  return result;
}
export default generateStars;
