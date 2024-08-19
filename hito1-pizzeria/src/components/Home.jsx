import React from 'react';
import pizzas from './pizzas.js'; 
import CardPizza from './CardPizza'
const Home = () => {
  return (
    <div className="container">
      {pizzas.map((pizza) => (
        <CardPizza
          key={pizza.id}
          name={pizza.name}
          ingredients={pizza.ingredients}
          price={pizza.price}
          image={pizza.img}
        />
      ))}
    </div>
  );
};

export default Home;
