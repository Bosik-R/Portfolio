import React from 'react';
import * as S from './MyWork.Elements';

const MyWorkCard = ({ data }) => {
	return (
		<S.Card>
			<S.LeftWrapper>
				{data.image.map((item) => (
					<S.Image key={item} src={item} />
				))}
				<S.LinksWrapper>
					<S.HerokuLink href={data.heroku} target='_blank'>
						<S.HerokuIcon />
					</S.HerokuLink>
					<S.GitLink href={data.git} target='_blank'>
						<S.GitIcon />
					</S.GitLink>
				</S.LinksWrapper>
			</S.LeftWrapper>
			<S.RightWrapper>
				<S.Content>
					<S.ContentTitle>{data.title}</S.ContentTitle>
					<S.Paragraph>{data.p1}</S.Paragraph>
					{data.p2 && <S.Paragraph>{data.p2}</S.Paragraph>}
					{data.p3 && <S.Paragraph>{data.p3}</S.Paragraph>}
					{data.p4 && <S.Paragraph>{data.p4}</S.Paragraph>}
				</S.Content>
			</S.RightWrapper>
		</S.Card>
	);
};

export default MyWorkCard;
