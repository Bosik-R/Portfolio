import React from 'react';
import * as S from './MyWork.Elements';
import { projects as data } from '../../../Data/InitialData';
import ProjectCard from '../../features/ProjectCard/ProjectCard';

const MyWork = () => {
	return (
		<S.Container id='my_work'>
			<S.Title>my work</S.Title>
			<S.Wrapper>
				{data.map((project, index) => (
					<ProjectCard key={index} {...project} />
				))}
			</S.Wrapper>
		</S.Container>
	);
};

export default MyWork;
