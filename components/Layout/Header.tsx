import { ChangeEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setThemeAction } from "../../redux/action/theme";
import { IReduxState } from "../../redux/model.store";
import styles from "../../styles/Header.module.css";
import { darkTheme, lightTheme, setTheme } from "../../utils/theme";
import { translation } from "../../utils/translation";
import { Toggle } from "../Toggle";

export const Header = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((store: IReduxState) => store);

    useEffect(() => {
      setTheme(theme);
    }, [theme]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

    if (theme.type === "light") {
      dispatch(setThemeAction(darkTheme));
    } else {
      dispatch(setThemeAction(lightTheme));
    }
  };

  return (
    <header className={styles.container}>
      <h1 className={styles.headerText}>{translation.Overreacted}</h1>

      <Toggle
        onChange={handleChange}
        defaultChecked={theme.type === "dark" ? true : false}
      />
    </header>
  );
};
