// Banner.js
import React from 'react';
import '../css/Cursos.css'; // Importando o CSS específico


const Banner = ({ imagemBanner }) => {
  return (
    <section className="banner">
      <div className="imagembanner">
      <img src="./img/banner.svg" alt="" />
      </div>
      <div className="icon-section">
        <img src="/img/icon1.png" alt="Livros" />
      </div>
      <div className="text-section">
        <h1>Cursos</h1>
        <p>
          Aprendendo de Forma <br /> <span className="highlight">Fácil</span> e <span className="highlight">Gratificante!</span>
        </p>
        <button className="button1">Inscreva-se</button>
      </div>
    </section>
  );
};

export default Banner;
