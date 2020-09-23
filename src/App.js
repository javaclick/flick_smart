import React from 'react';

function Food({ name, picture }) {
  return (
    <div>
      <h2> This is {name} </h2>
      <img src={picture} />
    </div>
  
  );
}

const foodILike = [
  {
    name: 'Galaxy',
    image: 'http://img.danawa.com/prod_img/500000/897/239/img/12239897_1.jpg?shrink=160:160&_v=20200915090613',
  },
  {
    name: 's20',
    image: 'http://img.danawa.com/prod_img/500000/201/359/img/10359201_1.jpg?shrink=160:160&_v=20200417124920',
  },
  {
    name: 'iPhone',
    image: 'http://img.danawa.com/prod_img/500000/515/571/img/9571515_1.jpg?shrink=160:160&_v=20191119100510',
  },
];


function renderFood(dish) {
  return <Food name={dish.name} picture={dish.image} />;
}

function App() {
  return (
    <div>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
