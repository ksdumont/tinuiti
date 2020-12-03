import React, { useContext, useState } from 'react';
import MyContext from '../MyContext';
import Card from './Card';
import Logo from './Logo';
import SearchBox from './SearchBox';

function Home() {
  const productList = useContext(MyContext);
  const [products, setProducts] = useState(productList);

  const filterProducts = (text) => {
    const filteredProducts = products
      .filter((product) => product.productName.toLowerCase().includes(text));
    setProducts(filteredProducts);
  };
  return (
    <>
      <Logo />
      <SearchBox getProducts={filterProducts} />
      <div className="product-list">
        {products && products.map((product) => (
          <Card key={product.productId} product={product} />
        ))}
      </div>
    </>
  );
}

export default Home;
