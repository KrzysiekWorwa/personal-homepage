import { useSelector, useDispatch } from "react-redux";
import { selectIsDarkTheme, toggleTheme } from "../themeSlice";

const ThemeSwitch = () => {

    const isDarkTheme = useSelector(selectIsDarkTheme);
    const dispatch = useDispatch();

    return (
        <button onClick={() => dispatch(toggleTheme())}>Dark mode {isDarkTheme ? "on" : "off"}</button>
    );
};

export default ThemeSwitch;