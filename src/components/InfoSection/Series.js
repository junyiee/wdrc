import React from 'react';

import { 
    InfoContainer, 
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Subtitle,
    SmallImgWrap,
    Img
} from './InfoElements';

/* text and image column template */
const Series = ({lightBg, id, topLine1, topLine2, darkText, description1, description2, img1, img2, alt}) => {
  return (
    <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow>
                    <Column1>
                         <SmallImgWrap>
                            <Img src={img1} alt={alt}/>
                        </SmallImgWrap>
                        <TextWrapper>
                            <TopLine>{topLine1}</TopLine>
                            <Subtitle darkText={darkText}>{description1}</Subtitle>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <SmallImgWrap>
                            <Img src={img2} alt={alt}/>
                        </SmallImgWrap>
                        <TextWrapper>
                            <TopLine>{topLine2}</TopLine>
                            <Subtitle darkText={darkText}>{description2}</Subtitle>
                        </TextWrapper>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    </>
  )
}

export default Series