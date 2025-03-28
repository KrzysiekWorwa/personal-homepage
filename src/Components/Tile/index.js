import { SectionBody, SectionHeader,SectionUnderline, SectionTitle, Body } from "./styled";

const Tile = ({title, body}) => (

    <SectionBody>
        <SectionHeader>
            <SectionTitle>
                {title}
            </SectionTitle>
            <SectionUnderline />
        </SectionHeader>
        <Body>
            {body}
        </Body>
    </SectionBody>

);

export default Tile;