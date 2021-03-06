const colors = {
  primary: "#0d0e4d",
  primaryLight: "#141550",
  primaryLight2: "#1a1b55",
  primaryLight3: "#251e75",
  white: "#f7f7f7",
  textBlack: "rgba(0, 0, 0, 0.9)",
  textWhite: "rgba(255, 255, 255, 0.87)",
};

const shadows = {
  default: "2px 2px 17px -1px rgba(0, 0, 0, 0.87)",
  text: "1px 1px 1px rgba(255, 255, 255, 0.12)",
};

const transitionTimes = {
  default: "0.3s",
};

const easings = {
  bounce: "cubic-bezier(0.64, 0.57, 0.67, 1.53)",
};

const borderRadius = "10px";

// Projects and contact
const boxPadding = "25px";

export type Theme = {
  colors: { [key in keyof typeof colors]: string };
  shadows: { [key in keyof typeof shadows]: string };
  transitionTimes: { [key in keyof typeof transitionTimes]: string };
  easings: { [key in keyof typeof easings]: string };
  borderRadius: string;
  boxPadding: string;
};

export const theme: Theme = {
  colors,
  shadows,
  transitionTimes,
  borderRadius,
  boxPadding,
  easings,
};
