export interface ITheme {
    type:"light"|"dark"
    body: string;
    primary: string;
    default: string;

}

export const lightTheme: ITheme = {
    type:"light",
    body: "#fff",
    primary: "#d23669",
    default:"#222"
}

export const darkTheme: ITheme = {
    type:"dark",
    body: "#282c35",
    primary: "#ffa7c4",
    default:"#fff"
}

  export const setTheme = (theme: ITheme) => {
    const root: any = document && document.querySelector(":root");

    root.style.setProperty("--bodyBackground", theme.body);
    root.style.setProperty("--defaultColor", theme.default);
    root.style.setProperty("--primaryColor", theme.primary);
  };