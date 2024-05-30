import React, {useState} from 'react';
import Header from './components/header/Header';
import Content from './components/content/Content';
import database from './data';

function App() {
  const [products, setProducts] = useState(database);
  const [cart, setCart] = useState([]);  

  const addToCart = (id) => {
    products.map((item) => {
      if(item.id === id){
        setCart((prevCart) => [
          ...prevCart,
          {
          ...item,
          bought: true
        }]);
        return { ...item, bought: true };
      }
      return item;
    })
  }

  const changeProduct = (id) => {
      setProducts((newProduct) => {
          return newProduct.map((item) => {
              if (item.id === id) 
                  return {
                      ...item,
                      bought: true
                  };
              return item;
          });
      })
  }
  return (
    <div className="App">
      <Header cart={cart}/>
      <Content products={products} changeProduct={changeProduct} addToCart={addToCart}/>
    </div>
  );
}

export default App;
