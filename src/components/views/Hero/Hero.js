import React, { useState } from 'react';
import Video from '../../../videos/video.mp4';
import {
	HeroContainer,
	HeroBg,
	VideoBg,
	HeroContent,
	HeroTitle,
	HeroParagraph,
	HeroSpan,
	HeroBtnWrapper,
	HeroButton,
	EyeVisible,
	IcomVisibleWrapper,
	EyeHiden,
	IconHidenWrapper,
	HeroBtnContent,
} from './Hero.Elements';

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
		<HeroContainer>
			<HeroBg>
				<VideoBg autoPlay loop muted src={Video} type='video/mp4' />
			</HeroBg>
			<HeroContent>
				<HeroTitle>Hi. I'm Tomasz Rosik</HeroTitle>
				<HeroParagraph>
					welcome to my
					<HeroSpan>portfolio website</HeroSpan>
				</HeroParagraph>
				<HeroBtnWrapper>
					<HeroButton
						to='contact'
						onClick={() => hideButton()}
						hiden={hiden}
						isHover={isHover}
						onMouseEnter={() => onHover()}
						onMouseLeave={() => onHover()}
					>
						<HeroBtnContent isHover={isHover}>take a look</HeroBtnContent>
						<IconHidenWrapper isHover={isHover}>
							<EyeHiden />
						</IconHidenWrapper>
						<IcomVisibleWrapper isHover={isHover}>
							<EyeVisible />
						</IcomVisibleWrapper>
					</HeroButton>
				</HeroBtnWrapper>
			</HeroContent>
		</HeroContainer>
	);
};

export default Hero;
