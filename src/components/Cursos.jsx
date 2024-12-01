// Cursos.js
import React from 'react';
import '../css/Cursos.css';
import CoursesSection from './CoursesSection';
import Frases from './Frases';

import Banner from './Banner';
import SocialMediaSection from './SocialMediaSection';

function Cursos() {
  return (
    <div>
      <Banner />
      <Frases/>
      <CoursesSection />
  
      <SocialMediaSection />
      
    </div>
  );
}

export default Cursos;
