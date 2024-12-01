import React from 'react';
import '../css/Cursos.css'; // Importando o CSS específico

const Card = ({ image, title, description, cardId }) => {
  return (
    <div className={`card ${cardId}`}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <span className="hover-text">{description}</span>
    </div>
  );
};

export default Card;
