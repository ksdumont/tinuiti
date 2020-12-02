import React, {useContext} from 'react'
import MyContext from '../MyContext'
import Card from './Card'

function List() {
  const productList = useContext(MyContext)
  return (
    <div className="product-list">
      {productList && productList.map(product => (
        <Card key={product.productId} product={product} />
    ))}
    </div>
  )
}

export default List
