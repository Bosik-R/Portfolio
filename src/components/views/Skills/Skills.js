import React, { useState } from 'react';
import HardSkills from '../../features/HardSkills/HardSkills';
import LanguageSkills from '../../features/LanguageSkills/LanguageSkills';
import SoftSkills from '../../features/SoftSkills/SoftSkills';
import * as S from './Skills.Elements';
import Certificat from '../../../images/certificat.jpg';

const Skills = () => {
	const [openOverlay, setOpenOverlay] = useState(false);

	const toggleOverlay = () => {
		setOpenOverlay(!openOverlay);
	};

	return (
		<>
			<S.Container id='my_skills'>
				<S.Title>my skills</S.Title>
				<S.Wrapper>
					<HardSkills toggle={toggleOverlay} />
					<SoftSkills />
					<LanguageSkills />
				</S.Wrapper>
				{openOverlay ? (
					<S.Overlay onClick={() => toggleOverlay()}>
						<S.OverlayItem src={Certificat} alt='certificat' />
					</S.Overlay>
				) : null}
			</S.Container>
		</>
	);
};

export default Skills;
