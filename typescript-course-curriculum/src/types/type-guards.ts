import { ITweet } from "./types";

export function isTweet(arg: any): arg is ITweet {
    return (
      typeof arg.id === "number" &&
      typeof arg.timeStamp === "number" &&
      typeof arg.username === "string" &&
      typeof arg.text === "string" &&
      typeof arg.image === "string"
    );
  }