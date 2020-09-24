import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>This is {name} </h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}/>
    </div>
  
  );
}

const foodILike = [
  {
    id: 1,
    name: 'Galaxy',
    image: 'http://img.danawa.com/prod_img/500000/897/239/img/12239897_1.jpg?shrink=160:160&_v=20200915090613',
    rating: 5,
  },
  {
    id: 2,
    name: 's20',
    image: 'http://img.danawa.com/prod_img/500000/201/359/img/10359201_1.jpg?shrink=160:160&_v=20200417124920',
    rating: 4.5,
  },
  {
    id: 3,
    name: 'iPhone',
    image: 'http://img.danawa.com/prod_img/500000/515/571/img/9571515_1.jpg?shrink=160:160&_v=20191119100510',
    rating: 4,
  },
];



function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
      ))}
    </div>
  );
}

export default App;
