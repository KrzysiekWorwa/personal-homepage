import { FooterSection, LetsTalk, Adress, EmailWrapper, EmailLink, Info, IconsWrapper, GithubIcon, FacebookIcon, LinkedinIcon, InstagramIcon } from "./styled";

const Footer = () => (
    <FooterSection>
        <LetsTalk>
            Let's talk!
        </LetsTalk>
        <Adress>
            <EmailWrapper>
                <EmailLink href="mailto:worwak1998@gmail.com" title="worwak1998@gmail.com">worwak1998@gmail.com</EmailLink>
            </EmailWrapper>
            <Info>
                I’m always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to contact me 🤞
            </Info>
            <IconsWrapper>
                <GithubIcon />
                <FacebookIcon />
                <LinkedinIcon />
                <InstagramIcon />
            </IconsWrapper>
        </Adress>
    </FooterSection>
);

export default Footer;