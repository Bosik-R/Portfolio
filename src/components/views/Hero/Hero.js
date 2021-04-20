import React from 'react';
import Video from '../../../videos/video.mp4';
import Resume from '../../../images/Tomasz Rosik.pdf';
import * as S from './Hero.Elements';

const Hero = () => {
	return (
		<S.Container>
			<S.HeroBg>
				<S.VideoBg autoPlay loop muted src={Video} type='video/mp4' />
			</S.HeroBg>
			<S.Content>
				<S.TitleWrapper>
					<S.Title>Hi. I'm Tomasz Rosik a</S.Title>
					<S.Glitch>
						<S.GlitchFront>Web Developer</S.GlitchFront>
						Web Developer
						<S.GlitchBack>Web Developer</S.GlitchBack>
					</S.Glitch>
				</S.TitleWrapper>
				<S.Lumin />
				<S.BtnWrapper>
					<S.Link href='https://github.com/Bosik-R' target='blank'>
						Git
					</S.Link>
					<S.Link
						href='https://www.linkedin.com/in/tomasz-rosik-3b55381bb'
						target='blank'
					>
						LinkedIn
					</S.Link>
					<S.Link href={Resume} download>
						Resume
					</S.Link>
				</S.BtnWrapper>
			</S.Content>
		</S.Container>
	);
};

export default Hero;
