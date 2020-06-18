const colors = {
  primary: "#0d0e4d",
  white: "#f7f7f7",
  textBlack: "rgba(0, 0, 0, 0.9)",
  textWhite: "rgba(255, 255, 255, 0.87)",
};

export type Theme = {
  colors: { [key in keyof typeof colors]: string };
};

export const theme: Theme = {
  colors,
};
