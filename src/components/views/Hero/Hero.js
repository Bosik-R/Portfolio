import React, { useState } from 'react';
import Video from '../../../videos/video.mp4';
import * as S from './Hero.Elements';

const Hero = ({ visible }) => {
	const [isHover, setIsHover] = useState(false);
	const [hiden, setHiden] = useState(false);

	const onHover = () => {
		setIsHover(!isHover);
	};

	const hideButton = () => {
		setHiden(true);
		visible();
	};

	return (
		<S.Container>
			<S.HeroBg>
				<S.VideoBg autoPlay loop muted src={Video} type='video/mp4' />
			</S.HeroBg>
			<S.Content>
				<S.Title>Hi. I'm Tomasz Rosik</S.Title>
				<S.Paragraph>
					welcome to my
					<S.Span>portfolio website</S.Span>
				</S.Paragraph>
				<S.BtnWrapper>
					<S.Button
						to='contact'
						onClick={() => hideButton()}
						hiden={hiden}
						isHover={isHover}
						onMouseEnter={() => onHover()}
						onMouseLeave={() => onHover()}
					>
						<S.BtnContent isHover={isHover}>take a look</S.BtnContent>
						<S.IconHidenWrapper isHover={isHover}>
							<S.EyeHiden />
						</S.IconHidenWrapper>
						<S.IconVisibleWrapper isHover={isHover}>
							<S.EyeVisible />
						</S.IconVisibleWrapper>
					</S.Button>
				</S.BtnWrapper>
			</S.Content>
		</S.Container>
	);
};

export default Hero;
