interface ISetup {
  endpoint: string;
  documentTitle: string;
}

export const setup: ISetup = {
  endpoint: process.env.NEXT_PUBLIC_HOST!,
  documentTitle: "api management",

};
