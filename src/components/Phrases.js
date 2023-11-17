import { phraseList } from "./phraseList";

export const getEmoji = (phrase) => {
  return phraseList[Math.floor(Math.random() * phraseList.length)];
};
