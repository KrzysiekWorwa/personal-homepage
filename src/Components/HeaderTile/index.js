import {
    HeaderButton,
    HeaderCaption,
    HeaderContent,
    HeaderDescription,
    HeaderImage,
    HeaderSection,
    HeaderTitle
} from "./styled";
import image from "./Images/Profilowe.webp"
import icon from "./Images/icon.png"

const HeaderTile = () => (

    <HeaderSection>
        <HeaderImage src={image} alt="Author photo" />
        <HeaderContent>
            <HeaderCaption>THIS IS</HeaderCaption>
            <HeaderTitle>Krzysztof Worwa</HeaderTitle>
            <HeaderDescription>Frontend Developer with a solid knowledge of JavaScript and a focus on building modern web applications using React. I combine a passion for web development with a love for 3D graphics. I am the owner of Codify, a company specializing in web development, 3D visualization, and virtual tours.</HeaderDescription>
            <HeaderButton href="mailto:codify.kontakt@gmail.com" title="codify.kontakt@gmail.com">
                <img src={icon} alt="" />Hire Me</HeaderButton>
        </HeaderContent>
    </HeaderSection>
);

export default HeaderTile;