import React, { useState } from 'react';
import * as S from './MyWork.Elements';
import MyWorkCard from './MyWorkCard';
import { projectOne, projectTwo } from '../../../Data/InitialData';

const MyWork = () => {
	const [openOverlay, setOpenOverlay] = useState(false);
	const [path, setPath] = useState('');

	const toggleOverlay = (path) => {
		setOpenOverlay(!openOverlay);
		setPath(path);
	};

	return (
		<S.Container id='my_work'>
			<S.Title>my work</S.Title>
			<S.Wrapper>
				<MyWorkCard data={projectOne} toggle={toggleOverlay} />
				<MyWorkCard data={projectTwo} toggle={toggleOverlay} />
			</S.Wrapper>
			{openOverlay ? (
				<S.Overlay onClick={() => toggleOverlay()}>
					<S.OverlayItem src={path} alt='my work' />
				</S.Overlay>
			) : null}
		</S.Container>
	);
};

export default MyWork;
