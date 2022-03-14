
import { ITheme, lightTheme } from "../../../utils/theme";
import { IThemeAction } from "../../action/theme/themeAction";

import { EACTIONS } from "../../actionEnum";


export function reducer(
  state: ITheme=lightTheme,
  action: IThemeAction
) {
  switch (action.type) {
    case EACTIONS.SET_THEME:

      return action.payload;
    default:
      return state ? state : lightTheme;
  }
}
