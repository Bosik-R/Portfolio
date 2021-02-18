import React, { useState } from 'react';
import Icon from '../../../images/skills-2.svg';
import * as S from './SoftSkills.Elements';
import { skillsSoft } from '../../../Data/InitialData';

const SoftSkills = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<S.Card>
				<S.Icon src={Icon} />
				<S.IconTitle onClick={() => setOpen(!open)} open={open}>
					Soft
				</S.IconTitle>
				<S.Content open={open}>
					<S.Wrapper>
						{skillsSoft.map((skill) => (
							<S.SoftSkill key={skill.name}>
								<S.SoftSkillImage src={skill.img} alt={skill.name} />
								<S.SoftSkillName>{skill.name}</S.SoftSkillName>
							</S.SoftSkill>
						))}
					</S.Wrapper>
				</S.Content>
			</S.Card>
		</>
	);
};

export default SoftSkills;
