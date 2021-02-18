import React from 'react';
import * as S from './MyWork.Elements';
import MyWorkCard from './MyWorkCard';
import { projectOne, projectTwo } from '../../../Data/InitialData';

const MyWork = () => {
	return (
		<S.Container id='my_work'>
			<S.Title>my work</S.Title>
			<S.Wrapper>
				<MyWorkCard data={projectTwo} />
				<MyWorkCard data={projectOne} />
			</S.Wrapper>
		</S.Container>
	);
};

export default MyWork;
