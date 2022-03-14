
import { ITheme } from "../../../utils/theme";
import { EACTIONS } from "../../actionEnum";
import { IThemeAction } from "./themeAction";

export function setThemeAction(theme: ITheme): IThemeAction {
  return {
    type: EACTIONS.SET_THEME,
    payload: theme,
  };
}


