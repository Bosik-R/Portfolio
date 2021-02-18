import React, {useState} from 'react'
import HardSkills from '../../features/HardSkills/HardSkills';
import LanguageSkills from '../../features/LanguageSkills/LanguageSkills';
import SoftSkills from '../../features/SoftSkills/SoftSkills';
import { 
  SkillsContainer, 
  SkillsTitle,
  SkillsWrapper,
  SkillsOverlay,
  OverlayItem,
} from './Skills.Elements';
import Certificat from '../../../images/certificat.jpg';

const Skills = () => {
  const [openOverlay, setOpenOverlay] = useState(false);

  const toggleOverlay = () => {
    setOpenOverlay(!openOverlay);
  };

  return (
    <>
      <SkillsContainer id='my_skills'>
        <SkillsTitle>my skills</SkillsTitle>
        <SkillsWrapper>
          <HardSkills toggle={toggleOverlay}/>
          <SoftSkills/>
          <LanguageSkills/>
        </SkillsWrapper>
        { openOverlay ?
          <SkillsOverlay onClick={() => toggleOverlay()}>
            <OverlayItem src={Certificat} alt='certificat'/>
          </SkillsOverlay>
          : null
        }

      </SkillsContainer>  
    </>
  )
}

export default Skills;
