import React from 'react';
import Video from '../../../videos/video.mp4';
import { links, aboutMe } from '../../../Data/InitialData';
import CV from '../../../images/TomaszRosik.pdf';
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
					<S.Link href={CV} download>
						Resume
					</S.Link>
				</S.BtnWrapper>
				<S.ParagraphWrapper>
					<S.MyStory>
						<S.TextColor>{aboutMe.myStoryColor}</S.TextColor>
						{aboutMe.myStory}
					</S.MyStory>
					<S.MyGool>
						<S.TextColor>{aboutMe.myGoolColor}</S.TextColor>
						{aboutMe.myGool}
					</S.MyGool>
				</S.ParagraphWrapper>
			</S.Content>
		</S.Section>
	);
};

export default Hero;
