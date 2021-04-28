import React from 'react';
import * as S from './Skills.Elements';
import Certificat from '../../../images/certificat.jpg';
import { mySkills } from '../../../Data/InitialData';

const Skills = ({ toggleOverlay }) => {
	return (
		<S.Section id='my_skills'>
			<S.Title>my skills</S.Title>
			<S.Wrapper>
				{mySkills.map((category, index) => (
					<S.CategoryCard width={category.width} key={index}>
						<S.CategoryTitle>{category.title}</S.CategoryTitle>
						<S.SkillsWrapper>
							{category.skills.map((skill, index) => (
								<S.Skill key={index} src={skill} />
							))}
						</S.SkillsWrapper>
					</S.CategoryCard>
				))}
			</S.Wrapper>
			<S.OverlayButton onClick={toggleOverlay}>
				<S.Certificat src={Certificat} />
			</S.OverlayButton>
		</S.Section>
	);
};

export default Skills;
