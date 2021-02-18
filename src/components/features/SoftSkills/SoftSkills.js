import React, {useState} from 'react';
import Icon from '../../../images/skills-2.svg';
import {
  SoftSkillsCard,
  SoftSkillsIcon,
  SoftSkillsIconTitle,
  SoftSkillsContent,
  SoftSkillsWrapper,
  SoftSkillName,
  SoftSkillImage,
  SoftSkill,
} from './SoftSkills.Elements';
import {skillsSoft} from '../../../Data/InitialData';

const SoftSkills = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <SoftSkillsCard >
        <SoftSkillsIcon src={Icon} />
        <SoftSkillsIconTitle onClick={() => setOpen(!open)} open={open}>
          Soft
        </SoftSkillsIconTitle>
        <SoftSkillsContent open={open}>
          <SoftSkillsWrapper>
            {skillsSoft.map(skill => (
              <SoftSkill key={skill.name}>
                <SoftSkillImage src={skill.img} alt={skill.name}/>
                <SoftSkillName>{skill.name}</SoftSkillName>
              </SoftSkill>
            ))}
          </SoftSkillsWrapper>
        </SoftSkillsContent>
      </SoftSkillsCard>
    </>
  )
}

export default SoftSkills;
