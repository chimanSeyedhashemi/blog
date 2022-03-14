import { Action } from "redux";
import { ITheme } from "../../../utils/theme";
import { EACTIONS } from "../../actionEnum";

export interface IThemeAction extends Action<EACTIONS> {
  payload: ITheme;
}
