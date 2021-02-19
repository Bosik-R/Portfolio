import React from 'react';
import * as S from './AboutMe.Elements';
import svg from '../../../images/profile.svg';
import { aboutMe as data } from '../../../Data/InitialData';

const AboutMe = () => {
	return (
		<>
			<S.Container>
				<S.Title id='who_am_I'>who am I</S.Title>
				<S.Wrapper>
					<S.LeftColumn>
						<S.Subtitle>{data.title}</S.Subtitle>
						<S.Paragraph>{data.p1}</S.Paragraph>
						<S.Paragraph>{data.p2}</S.Paragraph>
						<S.Paragraph>{data.p3}</S.Paragraph>
						<S.Paragraph>{data.p4}</S.Paragraph>
					</S.LeftColumn>
					<S.RightColumn>
						<S.ImageWrapper>
							<S.Svg src={svg} />
							<S.Image src={data.image} />
						</S.ImageWrapper>
					</S.RightColumn>
				</S.Wrapper>
			</S.Container>
		</>
	);
};

export default AboutMe;
