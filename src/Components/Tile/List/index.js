import { StyledList, Item } from "./styled";

const List = ({ skills }) => (
    <StyledList>
        {skills.map(skill => (
            <Item key={skill}>
                {skill}
            </Item>
        ))}
    </StyledList>
);

export default List;