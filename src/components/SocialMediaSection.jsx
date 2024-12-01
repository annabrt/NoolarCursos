import React from 'react';
import '../css/Cursos.css'; 

function SocialMediaSection(props) {
  return (
    
      <div className="social-content"> 
      <div className="imagemmeio">
        <img src="./img/Backgroundm.svg" alt="" />
      </div>
        <h2>Siga a <span className='highlight'>Noolar</span> nas <br /> redes sociais!</h2> {/* Título */}
        <img src="img/imigrantes1.svg" alt="Mulheres Látinas" className="right-image" />
        <p>
          Confira nossas publicações e <br />compartilhe suas experiências sobre <br /> o uso da plataforma. Quem sabe <br />sua história aparece aqui?
        </p>
        <div className="button-container"> 
          <button className="social-button">
          <i class='bx bxl-linkedin-square'></i>
            LinkedIn
          </button>
          <button className="social-button">
          <i class='bx bxl-instagram-alt'></i>
            Instagram
          </button>
        </div>
      </div>
    
  );
}

export default SocialMediaSection;



