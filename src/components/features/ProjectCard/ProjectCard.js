import React from 'react';
import * as S from './ProjectCard.Elements';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const ProjectCard = ({
	title,
	invert,
	description,
	tech,
	images,
	git,
	live,
}) => {
	return (
		<S.Card>
			<S.ImageWrapper invert={invert}>
				<CarouselProvider
					naturalSlideWidth={480}
					naturalSlideHeight={480}
					totalSlides={images.length}
					visibleSlides={1}
				>
					<Slider>
						{images.map((item, index) => (
							<Slide index={index} key={index}>
								<S.Image src={item} />
							</Slide>
						))}
					</Slider>
					<S.ButtonsWrapper>
						<S.BackBtn>
							<S.ArrowIconLeft />
						</S.BackBtn>
						<S.NextBtn>
							<S.ArrowIconRight />
						</S.NextBtn>
					</S.ButtonsWrapper>
				</CarouselProvider>
			</S.ImageWrapper>
			<S.CardContent invert={invert}>
				<S.Title>{title}</S.Title>
				{tech && (
					<S.TechWrapper>
						{tech.map((t, index) => (
							<S.Tech key={index}>{t}</S.Tech>
						))}
					</S.TechWrapper>
				)}
				<S.Description>
					{description.map((p, index) => (
						<S.Paragraph key={index}>{p}</S.Paragraph>
					))}
				</S.Description>
				<S.LinksWrapper>
					{live && (
						<S.Link href={live} target='blank'>
							<S.Live />
							view live
						</S.Link>
					)}
					<S.Link href={git} target='blank'>
						<S.GitIcon />
						view code
					</S.Link>
				</S.LinksWrapper>
			</S.CardContent>
		</S.Card>
	);
};

export default ProjectCard;
