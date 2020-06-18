import pollImage from "./assets/images/poll.png";
import sharytImage from "./assets/images/sharyt.png";
import caloriesImage from "./assets/images/calories.png";
import xpImage from "./assets/images/xp.png";
import chessImage from "./assets/images/chess.png";

export type Project = {
  image: string;
  liveHref: string;
  codeHref: string;
  description: string;
};

type Projects = {
  [site: string]: Project;
};

export const projects: Projects = {
  poll: {
    image: pollImage,
    liveHref: "https://voter-app.netlify.app/",
    codeHref: "https://github.com/hommat/poll-graphql",
    description: "Application for creating polls that uses GraphQL.",
  },
  sharyt: {
    image: sharytImage,
    liveHref: "https://sharyt.netlify.app/",
    codeHref: "https://github.com/hommat/sharyt",
    description:
      "Application for watching youtube video with others in realtime.",
  },
  calories: {
    image: caloriesImage,
    liveHref: "http://calories-tracker.netlify.com/",
    codeHref: "https://github.com/hommat/calories-tracker",
    description:
      "Application with login system that allows you to track your calories.",
  },
  xp: {
    image: xpImage,
    liveHref: "https://winxp.netlify.com/",
    codeHref: "https://github.com/hommat/xp",
    description: "ASimple windows xp recreation.",
  },
  chess: {
    image: chessImage,
    liveHref: "https://my-chess.netlify.com/",
    codeHref: "https://github.com/hommat/chess",
    description: "Chess game.",
  },
};
