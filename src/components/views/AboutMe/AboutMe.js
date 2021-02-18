import React from 'react'
import { Button } from '../../common/Button/Button.Elements';
import {
  AboutMeContainer,
  AboutMeWrapper,
  AboutMeRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrapper,
  ImgWrapper,
  Img,
} from './AboutMe.Elements';

const AboutMe = ({ id, darkBg, lightText, topLine, headline, description, buttonLabel, imgStart, img, alt, primary, dark}) => {
  return (
    <>
      <AboutMeContainer darkBg={darkBg} id={id}>
        <AboutMeWrapper>
          <AboutMeRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightText={lightText}>{description}</Subtitle>
                <BtnWrapper>
                  <Button 
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    primary={primary} 
                    dark={dark} 
                    to='home'
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrapper>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrapper>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </Column2>
          </AboutMeRow>
        </AboutMeWrapper>
      </AboutMeContainer>
    </>
  )
}

export default AboutMe;
