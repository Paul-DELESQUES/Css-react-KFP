import React, { useState } from "react";

function CardPo({ imgSrc, name, type, description, poKFP }) {
  const [isRotated, setIsRotated] = useState(false);

  const handleCardClick = () => {
    setIsRotated(!isRotated);
  };

  const cardClassName = `container ${isRotated ? 'rotate' : ''}`;

  return (
    <div className={cardClassName} onClick={handleCardClick}>
      <div className="container-header">
        <div className="imgContainer">
          <img src={imgSrc} alt={type} />
        </div>
      </div>
      <div className="container-body">
        <h2 className="culte">{name}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
}

export default CardPo;
