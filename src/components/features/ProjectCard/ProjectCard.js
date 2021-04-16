import React, { useState } from 'react';
import * as S from './ProjectCard.Elements';

const ProjectCard = ({ title, description, tech, images, git, live }) => {
	const [index, setIndex] = useState(0);
	const [click, setClick] = useState(false);

	console.log(click);

	const nextImage = () => {
		setIndex(index + 1);
	};

	const prevImage = () => {
		setIndex(index - 1);
	};

	const pushButton = () => {};

	return (
		<S.Card>
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
