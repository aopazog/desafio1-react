import React from 'react';

function CardPizza({ name, price, ingredients, img }) {
  return (
    <div className="card">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{ingredients.join(', ')}</p>
        <p className="card-text">Precio: ${price.toLocaleString()}</p>
        <button className="btn btn-primary">Ver más</button>
        <button className="btn btn-success">Añadir</button>
      </div>
    </div>
  );
}

export default CardPizza;
