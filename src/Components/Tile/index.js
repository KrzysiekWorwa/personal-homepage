import { SectionBody, SectionHeader,SectionUnderline, SectionTitle, Body } from "./styled";

const Tile = ({title, body}) => (

    <SectionBody>
        <SectionHeader id="skillset">
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