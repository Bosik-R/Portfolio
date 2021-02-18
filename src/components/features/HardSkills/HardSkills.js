import React, {useState} from 'react';
import Icon from '../../../images/skills-1.svg';
import Certificat from '../../../images/certificat.jpg';
import {
  HardSkillsCard,
  HardSkillsIcon,
  HardSkillsIconTitle,
  HardSkillsContent,
  HardSkillsWrapper,
  HardSkillsName,
  HardSkillsList,
  HardSkill,
  OverlayItem,
  HardSkillsCert,
} from './HardSkills.Elements';
import {skillsHard} from '../../../Data/InitialData';

const HardSkills = ({toggle}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <HardSkillsCard>
        <HardSkillsIcon src={Icon} />
        <HardSkillsIconTitle onClick={() => setOpen(!open)} open={open}>
          Hard
        </HardSkillsIconTitle>
        <HardSkillsContent open={open}>
          {skillsHard.map(item => (
            <HardSkillsWrapper key={item.name}>
              <HardSkillsName>
                {item.name}
              </HardSkillsName>
              <HardSkillsList>
                {item.skills.map(skill => (
                <HardSkill key={skill}>
                  {skill}
                </HardSkill>
              ))}
              </HardSkillsList>
            </HardSkillsWrapper>
          ))}
            <HardSkillsCert onClick={() => toggle()}>
                <OverlayItem src={Certificat} alt='certificat'/>
              </HardSkillsCert>
        </HardSkillsContent>
      </HardSkillsCard>
    </>
  )
}

export default HardSkills;
