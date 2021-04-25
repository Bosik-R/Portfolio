import React from 'react';
import * as S from './Skills.Elements';
import Certificat from '../../../images/certificat.jpg';
import { mySkills } from '../../../Data/InitialData';

const Skills = ({ toggleOverlay }) => {
	return (
		<S.Section id='my_skills'>
			<S.Title>my skills</S.Title>
			<S.Wrapper>
				<S.FrontEnd>
					<S.SkillTitle>Frontend</S.SkillTitle>
					<S.Underline />
					<S.SkillsWrapper>
						{mySkills.frontEnd.map((skill, index) => (
							<S.Skill key={index} src={skill} />
						))}
					</S.SkillsWrapper>
				</S.FrontEnd>
				<S.BackEnd>
					<S.SkillTitle>Backend</S.SkillTitle>
					<S.SkillsWrapper>
						{mySkills.backEnd.map((skill, index) => (
							<S.Skill key={index} src={skill} />
						))}
					</S.SkillsWrapper>
				</S.BackEnd>
				<S.BuildManagement>
					<S.SkillTitle>Build and Management</S.SkillTitle>
					<S.SkillsWrapper>
						{mySkills.build.map((skill, index) => (
							<S.Skill key={index} src={skill} />
						))}
					</S.SkillsWrapper>
				</S.BuildManagement>
			</S.Wrapper>
			<S.OverlayButton onClick={toggleOverlay}>
				<S.Certificat src={Certificat} />
			</S.OverlayButton>
		</S.Section>
	);
};

export default Skills;
