import React from 'react';

import { 
    InfoContainer, 
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    BtnLink,
    ImgWrap,
    Img
} from './InfoElements';

/* text and image column template */
const AboutSection = ({lightBg, id, imgStart, topLine, lightText, headline, 
    darkText, description, buttonLabel, img, alt, primary, dark}) => {
  return (
    <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                                <BtnLink 
                                    to='/about'
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1 : 0}
                                >{buttonLabel}</BtnLink>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    </>
  )
}

export default AboutSection