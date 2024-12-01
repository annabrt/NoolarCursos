// BackgroundCursos.jsx
import React from 'react';
import '../css/Cursos.css'; 

function BackgroundCursos(props) {
    return (
        <div className="background-cpropsursos">
            <img src={props.imagem1} alt="" className="background-imagem bc1" />
            <img src={props.imagem2} alt="" className="background-imagem bc2" />
        </div>
    );
}

export default BackgroundCursos;







