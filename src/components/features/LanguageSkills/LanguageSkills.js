import React, {useState} from 'react';
import Icon from '../../../images/skills-3.svg';
import {
  LanguageSkillsCard,
  LanguageSkillsIcon,
  LanguageSkillsIconTitle,
  LanguageSkillsContent,
  LanguageSkillsWrapper,
  LanguageSkillsLang,
  LanguageSkillsStars,
  LanguageSkillsStar,
  LanguageSkillsStarHalf,
  LanguageSkillsStarFill,
} from './LanguageSkills.Elements';

const LanguageSkills = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <LanguageSkillsCard>
        <LanguageSkillsIcon src={Icon}/>
        <LanguageSkillsIconTitle onClick={() => setOpen(!open)} open={open}>
          Languages
          </LanguageSkillsIconTitle>
        <LanguageSkillsContent open={open}>
          <LanguageSkillsWrapper>
            <LanguageSkillsLang>English</LanguageSkillsLang>
            <LanguageSkillsStars>
              <LanguageSkillsStarFill/><LanguageSkillsStarFill/><LanguageSkillsStarFill/><LanguageSkillsStarFill/><LanguageSkillsStarFill/><LanguageSkillsStar/>
            </LanguageSkillsStars> 
          </LanguageSkillsWrapper>
          <LanguageSkillsWrapper>
            <LanguageSkillsLang>German</LanguageSkillsLang>
            <LanguageSkillsStars>
              <LanguageSkillsStarFill/><LanguageSkillsStarFill/><LanguageSkillsStarFill/><LanguageSkillsStarFill/><LanguageSkillsStarFill/><LanguageSkillsStarHalf/>
            </LanguageSkillsStars> 
          </LanguageSkillsWrapper>
        </LanguageSkillsContent>
      </LanguageSkillsCard>
    </>
  )
}

export default LanguageSkills;
