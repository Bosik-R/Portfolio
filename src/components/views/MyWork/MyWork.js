import React from 'react';
import * as S from './MyWork.Elements';
import MyWorkCard from './MyWorkCard';

const MyWork = () => {
	return (
		<S.Container id='my_work'>
			<S.Title>my work</S.Title>
			<S.Wrapper>
				<MyWorkCard />
				<MyWorkCard />
			</S.Wrapper>
		</S.Container>
	);
};

export default MyWork;
