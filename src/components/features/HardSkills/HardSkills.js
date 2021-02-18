import React, { useState } from 'react';
import Icon from '../../../images/skills-1.svg';
import Certificat from '../../../images/certificat.jpg';
import * as S from './HardSkills.Elements';
import { skillsHard } from '../../../Data/InitialData';

const HardSkills = ({ toggle }) => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<S.Card>
				<S.Icon src={Icon} />
				<S.IconTitle onClick={() => setOpen(!open)} open={open}>
					Hard skills
				</S.IconTitle>
				<S.Content open={open}>
					{skillsHard.map((item) => (
						<S.Wrapper key={item.name}>
							<S.Name>{item.name}</S.Name>
							<S.List>
								{item.skills.map((skill) => (
									<S.Skill key={skill}>{skill}</S.Skill>
								))}
							</S.List>
						</S.Wrapper>
					))}
					<S.Image src={Certificat} alt='certificat' onClick={() => toggle()} />
				</S.Content>
			</S.Card>
		</>
	);
};

export default HardSkills;
