import {
    HeaderBox,
    HeaderButton,
    HeaderCaption,
    HeaderContent,
    HeaderDescription,
    HeaderImage,
    HeaderTitle
} from "./styled";
import image from "./Images/zdjecie2.png"
import icon from "./Images/icon.png"

const HeaderTile = () => (

    <HeaderBox>
        <HeaderImage src={image} alt="Author photo" />
        <HeaderContent>
            <HeaderCaption>THIS IS</HeaderCaption>
            <HeaderTitle>Krzysztof Worwa</HeaderTitle>
            <HeaderDescription>I'm a passionate Junior Frontend Developer also in love in 3D Graphics. Currently looking for new job opportunities.</HeaderDescription>
            <HeaderButton href="mailto:worwak1998@gmail.com">
                <img src={icon} alt="" />Hire Me</HeaderButton>
        </HeaderContent>
    </HeaderBox>
);

export default HeaderTile;