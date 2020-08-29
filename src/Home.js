import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <img 
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg" 
        alt=""/>
      
      {/* Product id, title, price, rating, image */}
      <div className="home__row">
        <Product 
          id="1234"
          title="New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz Intel Core i7) - Silver"
          price={2149}
          rating={4}
          image="https://m.media-amazon.com/images/I/71UItVa0VmL._AC_UY218_.jpg"
        />

        <Product 
          id="1234"
          title="New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz Intel Core i7) - Silver"
          price={2149}
          rating={4}
          image="https://m.media-amazon.com/images/I/71UItVa0VmL._AC_UY218_.jpg"
        />
      </div>

      <div className="home__row">
        <Product 
          id="1234"
          title="New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz Intel Core i7) - Silver"
          price={2149}
          rating={4}
          image="https://m.media-amazon.com/images/I/71UItVa0VmL._AC_UY218_.jpg"
        />

        <Product 
          id="1234"
          title="New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz Intel Core i7) - Silver"
          price={2149}
          rating={4}
          image="https://m.media-amazon.com/images/I/71UItVa0VmL._AC_UY218_.jpg"
        />

        <Product 
          id="1234"
          title="New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz Intel Core i7) - Silver"
          price={2149}
          rating={4}
          image="https://m.media-amazon.com/images/I/71UItVa0VmL._AC_UY218_.jpg"
        />
      </div>
      
      <div className="home__row">
        <Product 
          id="1234"
          title="New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage, 2.6GHz Intel Core i7) - Silver"
          price={2149}
          rating={4}
          image="https://m.media-amazon.com/images/I/71UItVa0VmL._AC_UY218_.jpg"
        />
      </div>
      
      {/* Product */}
    </div>
  )
}

export default Home
