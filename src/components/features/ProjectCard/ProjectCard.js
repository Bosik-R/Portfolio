import React, { useState } from 'react';
import * as S from './ProjectCard.Elements';

const ProjectCard = ({
	title,
	description,
	tech,
	images,
	git,
	live,
	close,
}) => {
	const [index, setIndex] = useState(0);

	console.log(index);

	const nextImage = () => {
		setIndex(index + 1);
		console.log(index);
	};

	const prevImage = () => {
		setIndex(index - 1);
	};

	return (
		<S.Container>
			<S.Card>
				<S.CloseIcon onClick={() => close({})} />
				<S.ImageWrapper>
					{images.length > 1 ? (
						index > 0 ? (
							<S.ArrowIconLeft onClick={() => prevImage()} />
						) : null
					) : null}
					<S.Image src={images[index]} />
					{images.length > 1 ? (
						index !== images.length - 1 ? (
							<S.ArrowIconRight onClick={() => nextImage()} />
						) : null
					) : null}
				</S.ImageWrapper>
				<S.CardContent>
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
							<S.Link href={live} target='_blank'>
								<S.Live />
								view live
							</S.Link>
						)}
						<S.Link href={git} target='_blank'>
							<S.GitIcon />
							view code
						</S.Link>
					</S.LinksWrapper>
				</S.CardContent>
			</S.Card>
		</S.Container>
	);
};

export default ProjectCard;
