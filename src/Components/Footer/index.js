import { FooterSection, LetsTalk, Adress, EmailWrapper, EmailLink, Info, IconsWrapper, GithubIcon, FacebookIcon, LinkedinIcon, InstagramIcon, ArtStationIcon } from "./styled";

const Footer = () => (
    <FooterSection>
        <LetsTalk>
            Let's talk!
        </LetsTalk>
        <Adress>
            <EmailWrapper>
                <EmailLink href="mailto:codify.kontakt@gmail.com" title="codify.kontakt@gmail.com">codify.kontakt@gmail.com</EmailLink>
            </EmailWrapper>
            <Info>
                I’m always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to contact me 🤞
            </Info>
            <IconsWrapper>
                <a href="https://github.com/KrzysiekWorwa" target="_blank" title="Github" rel="noreferrer">
                    <GithubIcon />
                </a>
                <a href="https://www.facebook.com/krzysztof.worwa/" target="_blank" title="Facebook" rel="noreferrer">
                    <FacebookIcon />
                </a>
                <a href="https://www.linkedin.com/in/krzysztof-worwa-5462b8242/" target="_blank" title="Linkedin" rel="noreferrer">
                    <LinkedinIcon />
                </a>
                <a href="https://www.instagram.com/k_worwa/" target="_blank" title="Instagram" rel="noreferrer">
                    <InstagramIcon />
                </a>
                <a href="https://www.artstation.com/krzysiek_worwa" target="_blank" title="Artstation" rel="noreferrer">
                    <ArtStationIcon />
                </a>
            </IconsWrapper>
        </Adress>
    </FooterSection>
);

export default Footer;