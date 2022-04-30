import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { 
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    FooterP,
    SocialMedia,
    SocialsWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
    FooterFormWrapper,
    FooterForm,
    FormH1,
    FormText,
    FormInput,
    FormButton
} from './FooterElements';

const Footer = () => {
  return (
    <>
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterFormWrapper>
                        <FooterForm action='#'>
                            <FormH1>Newsletter</FormH1>
                            <FormText>Subscribe and get information about our upcoming events.</FormText>
                            <FormInput type="email" name="email" placeholder="Your Email" required />
                            <FormInput type="text" name="name" placeholder="First Name" required />
                            <FormButton type='submit'>Subscribe</FormButton>
                        </FooterForm>
                    </FooterFormWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Sections</FooterLinkTitle>
                            <FooterLink to='/'>About Us</FooterLink>
                            <FooterLink to='/'>Schedule & Tickets</FooterLink>
                            <FooterLink to='/'>Classes</FooterLink>
                            <FooterLink to='/'>Results</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Find Us</FooterLinkTitle>
                            <FooterP>Patrick Thomas</FooterP>
                            <FooterP>CEO / Race Direactor</FooterP>
                            <FooterP>info@worlddragracingcircuit.com</FooterP>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialsWrap>
                        <SocialLogo to='/'>World Drag Racing Circuit</SocialLogo>
                        <WebsiteRights>Copyright © 2011- {new Date().getFullYear()}</WebsiteRights>
                        <SocialIcons>
                        <SocialIconLink href="//www.facebook.com/worlddragracingcircuit/" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="//www.instagram.com/worlddragracing/" target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="//www.youtube.com/user/racersntuners" target="_blank" aria-label="Youtube">
                            <FaYoutube />
                        </SocialIconLink>
                    </SocialIcons>
                    </SocialsWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    </>
  )
}

export default Footer