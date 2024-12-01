import React from 'react';
import '../css/Cursos.css'; 

const Frases = () => {
  return (
    <section className="Frases">
      <div className="circle">
        <img src='./img/circulo.svg' alt="Circulo" className="circulo"  />
      </div>
      <div className="text-box">
      <p>Sabemos que aprender algo <br />novo pode ser <span className="highlight2">desafiador...</span> </p>
      </div>
      <div className="icon2">
        <img src="./img/icon2.png" alt="pequeno avião de papel com traços atrás" />
      </div>
     


      <div className="text-box2">
        <p>Mas estamos aqui para tornar essa  experiência mais <span className='highlight3'>fácil</span> e <span className='highlight4'>gratificante!</span></p>
      </div>    
    
    </section>
  );
};

export default Frases;
