import React, {useState, useContext, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import MyContext from '../MyContext'
import Logo from './Logo'
import Chart from './Chart'

function ProductPage() {
  const [currentProduct, setCurrentProduct] = useState({})
  
  const productList = useContext(MyContext)
  const {id} = useParams()
  
  useEffect(() => {
    const currProduct = productList.filter(product => product.productId === id)[0] 
    setCurrentProduct(currProduct)
  }, []) 
  
  console.log(currentProduct)

  return (
    <div className="product-page">
      <Logo />
      {currentProduct !== undefined ? 
      <>
        <h1 className="product-title">{currentProduct.productName}</h1>
        <h5 className="product-description">{currentProduct.productDescription}</h5>
        <div className="product-chart">
        <Chart />
        </div>
      </>
      :
      <h1>Loading...</h1>
      }
    </div>
  )
}

export default ProductPage
