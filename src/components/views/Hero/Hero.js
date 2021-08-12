import React from 'react';
import Video from '../../../videos/video.mp4';
import { links, aboutMe } from '../../../Data/InitialData';
import * as S from './Hero.Elements';

const Hero = () => {
	return (
		<S.Section>
			<S.HeroBg>
				<S.VideoBg autoPlay loop muted src={Video} type='video/mp4' />
			</S.HeroBg>
			<S.Content>
				<S.TitleWrapper>
					<S.Title>Hi. I'm Tomasz Rosik</S.Title>
					<S.Glitch>
						<S.GlitchFront>Web Developer</S.GlitchFront>
						Web Developer
						<S.GlitchBack>Web Developer</S.GlitchBack>
					</S.Glitch>
				</S.TitleWrapper>
				<S.Lumin />
				<S.BtnWrapper>
					<S.Link href={links.git} target='blank'>
						Git
					</S.Link>
					<S.Link href={links.linkedin} target='blank'>
						LinkedIn
					</S.Link>
					<S.Link href={links.resume} target='blank'>
						Resume
					</S.Link>
				</S.BtnWrapper>
				<S.ParagraphWrapper>
					<S.MyStory>
						<S.TextColor>{aboutMe.myStory[0]}</S.TextColor>
						{aboutMe.myStory[1]}
					</S.MyStory>
					<S.MyGool>
						<S.TextColor>{aboutMe.myGool[0]}</S.TextColor>
						{aboutMe.myGool[1]}
					</S.MyGool>
				</S.ParagraphWrapper>
			</S.Content>
		</S.Section>
	);
};

export default Hero;
