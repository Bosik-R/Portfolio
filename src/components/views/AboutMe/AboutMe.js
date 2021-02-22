import React from 'react'
import * as S from './AboutMe.Elements'
import svg from '../../../images/profile.svg'
import me from '../../../images/tom.jpg'
import { aboutMe as data } from '../../../Data/InitialData'

const AboutMe = () => {
	return (
		<>
			<S.Container id='who_am_I'>
				<S.Title>who am I</S.Title>
				<S.Wrapper>
					<S.LeftColumn>
						<S.Subtitle>{data.title}</S.Subtitle>
						{data.paragraph.map(p => (
							<S.Paragraph key={data.paragraph.indexOf(p)}>{p}</S.Paragraph>
						))}
					</S.LeftColumn>
					<S.RightColumn>
						<S.ImageWrapper>
							<S.Svg src={svg} />
							<S.Image src={me} />
						</S.ImageWrapper>
					</S.RightColumn>
				</S.Wrapper>
			</S.Container>
		</>
	)
}

export default AboutMe
