import React from 'react';
import * as S from './Sidebar.Elements';

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<S.Container isOpen={isOpen}>
			<S.Icon>
				<S.CloseIcon onClick={toggle} />
			</S.Icon>
			<S.Wrapper>
				<S.Menu>
					<S.Link to='my_work' onClick={toggle}>
						my work
					</S.Link>
					<S.Link to='my_skills' onClick={toggle}>
						my skills
					</S.Link>
					<S.Link to='contact' onClick={toggle}>
						contact
					</S.Link>
				</S.Menu>
			</S.Wrapper>
		</S.Container>
	);
};

export default Sidebar;
