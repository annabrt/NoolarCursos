import React from 'react';
import '../css/Cursos.css'; 
import './Card.jsx'
import Card from './Card'; 

const CoursesSection = () => {
  const courses = [
    { id: 1, name: '', image: '', hoverText: '' },
    { id: 2, name: '', image: '', hoverText: '' },
    { id: 3, name: '', image: '', hoverText: '' },
  ];

  return (
    <section className="courses">
      <h2>Desenvolva novas <br /> <span className="highlight">habilidades!</span></h2>
      <div className="cards">
        <Card
          key={1}
          image={`/img/curso1.jpg`}
          title={"Profissionalizantes"}
          description={"Prepare-se para o futuro que você deseja, nossos cursos profissionalizantes abrem as portas para novas oportunidades!"}
          cardId={"card-1"} // Adiciona a cardId
        />

        <Card
          key={2}
          image={`img/curso2.jpg`}
          title={"Comunicação"}
          description={"Aprenda a se expressar com confiança e a construir relações pessoais e profissionais duradouras!"}
          cardId={"card-2"} // Adiciona a cardId
        />
        <Card
          key={1}
          image={`img/curso3.jpg`}
          title={"Português"}
          description={"Prepare-se para o futuro que você deseja, nossos cursos profissionalizantes abrem as portas para novas oportunidades!"}
          cardId={"card-3"} // Adiciona a cardId
        />

      </div>

      <button className="veja-mais" >Veja mais</button>

    </section>
  );
};

export default CoursesSection;


