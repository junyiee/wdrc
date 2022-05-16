import styled from 'styled-components';

export const InfoContainer = styled.div`
    color: #fff;
    background: #f9f9f9;

    @media screen and (max-width: 768px) {
        padding: 100px 30px;
    }
`;

export const InfoWrapper = styled.div`
    display: flex;
    z-index: 1;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    //padding: 0 24px;
    justify-content: center;
`;

export const TextWrapper = styled.div`
    padding-top: 60px;
    padding-bottom: 40px;
    margin-bottom: 30px;
    max-width: 1200px;
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 32px;
    line-height: 1.1;
    font-weight: 600;
    color: #010606;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Heading2 = styled.h3`
    margin-bottom: 20px;
    font-size: 24px;
    line-height: 1.1;
    font-weight: 600;
    color: #010606;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const SubHeading = styled.h2`
    margin-bottom: 20px;
    font-size: 18px;
    line-height: 1.1;
    font-weight: 600;
    color: #010606;

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

export const Subtitle = styled.p`
    max-width: 800px;
    margin-bottom: 35px;
    font-size: 16px;
    line-height: 24px;
    color: #010606;
`;

export const SubText = styled.p`
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 24px;
    color: #010606;
`

export const BoldText = styled.p`
    max-width: 800px;
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: bold;
    line-height: 24px;
    color: #010606;
`;

export const BoldSubHeading = styled.h4`
    margin-bottom: 20px;
    font-size: 16px;
    line-height: 1.1;
    font-weight: 600;
    color: #010606;

    @media screen and (max-width: 480px) {
        font-size: 16px;
    }
`

export const SubList = styled.ol`
    //display: flex;
    //align-items: center;
    text-align: left;
    display: block;
    list-style-type: decimal;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const ListItem = styled.li`
    font-size: 14px;
    color: #010606;
    display: list-item;
    margin-bottom: 5px;
`;

export const BulletList = styled.ol`
    display: block;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    list-style-type: circle;
    margin-block-start: 0px;
    margin-block-end: 0px;
`;