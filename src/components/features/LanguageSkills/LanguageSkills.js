import React, { useState } from 'react';
import Icon from '../../../images/skills-3.svg';
import * as S from './LanguageSkills.Elements';

const LanguageSkills = () => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<S.Card>
				<S.Icon src={Icon} />
				<S.IconTitle onClick={() => setOpen(!open)} open={open}>
					Languages
				</S.IconTitle>
				<S.Content open={open}>
					<S.Wrapper>
						<S.Language>English</S.Language>
						<S.Stars>
							<S.StarFill />
							<S.StarFill />
							<S.StarFill />
							<S.StarFill />
							<S.StarFill />
							<S.Star />
						</S.Stars>
					</S.Wrapper>
					<S.Wrapper>
						<S.Language>German</S.Language>
						<S.Stars>
							<S.StarFill />
							<S.StarFill />
							<S.StarFill />
							<S.StarFill />
							<S.StarFill />
							<S.StarHalf />
						</S.Stars>
					</S.Wrapper>
				</S.Content>
			</S.Card>
		</>
	);
};

export default LanguageSkills;
