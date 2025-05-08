import { FooterSection, LetsTalk, Adress, EmailWrapper, EmailLink, Info } from "./styled";

const Footer = () => (
    <FooterSection>
        <LetsTalk>
            Let's talk!
        </LetsTalk>
        <EmailWrapper>
            <EmailLink href="mailto:worwak1998@gmail.com" title="worwak1998@gmail.com">worwak1998@gmail.com</EmailLink>
        </EmailWrapper>
        <Info>
            I’m always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to contact me 🤞
        </Info>
    </FooterSection>
);

export default Footer;