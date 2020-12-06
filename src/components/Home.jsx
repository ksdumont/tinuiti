import React, { useContext, useState, useEffect } from 'react';
import ProductContext from '../ProductContext';
import Card from './Card';
import Logo from './Logo';
import SearchBox from './SearchBox';

function Home() {
  const productList = useContext(ProductContext);
  const [products, setProducts] = useState(productList);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const filteredProducts = productList
      .filter((product) => product.productName.toLowerCase().includes(query.toLowerCase()));
    setProducts(filteredProducts);
  }, [query]);
  return (
    <>
      <Logo />
      <SearchBox getQuery={(q) => setQuery(q)} />
      <div className="product-list">
        {!products.length && query === ''
          ? productList.map((product) => (
            <Card key={product.productId} product={product} />
          )) : (
            products.map((product) => (
              <Card key={product.productId} product={product} />
            ))
          )}
      </div>
    </>
  );
}

export default Home;
