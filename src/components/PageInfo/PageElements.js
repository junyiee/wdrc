import styled from 'styled-components';

export const InfoContainer = styled.div`
    color: #fff;
    background: #f9f9f9;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const InfoWrapper = styled.div`
    display: flex;
    z-index: 1;
    // height: 800px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const TextWrapper = styled.div`
    max-width: 900px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: #010606;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
    max-width: 800px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: #010606;
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;