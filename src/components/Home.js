import React, {useContext} from 'react'
import MyContext from '../MyContext'
import Card from './Card'
import Logo from './Logo'

function Home() {
  const productList = useContext(MyContext)
  return (
    <>
      <Logo />
      <div className="product-list">
        {productList && productList.map(product => (
          <Card key={product.productId} product={product} />
      ))}
      </div>
    </>
  )
}

export default Home
