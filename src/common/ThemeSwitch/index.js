import { useSelector, useDispatch } from "react-redux";
import { selectIsDarkTheme, toggleTheme } from "../themeSlice";
import { Box, Button, Icon, IconWrapper, Text, Wrapper } from "./styled";

const ThemeSwitch = () => {

    const isDarkTheme = useSelector(selectIsDarkTheme);
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <Button onClick={() => dispatch(toggleTheme())}>
                <Text>
                    Dark mode {isDarkTheme ? "on" : "off"}</Text>
                <Box>
                    <IconWrapper $moveToRight={isDarkTheme}>
                        <Icon />
                    </IconWrapper>
                </Box>
            </Button>
        </Wrapper>
    );
};

export default ThemeSwitch;