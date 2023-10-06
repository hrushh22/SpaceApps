import React from 'react';

function Card({ text }) {
  return <div className="card">{text}</div>;
}

function Cards() {
  return (
    <div className="cards">
      <Card text="Card1" />
      <Card text="Card2" />
      <Card text="Card3" />
    </div>
  );
}

export default Cards;
