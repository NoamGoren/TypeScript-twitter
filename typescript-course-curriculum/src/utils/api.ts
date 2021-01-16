import { ITweet } from "../types/types";
const OK_STATUS = 200;
const BASE_API_URL =
  "https://bumble-twitter-interview.herokuapp.com/noam-goren";

const createErrorMessage = (response: Response) => {
  return `An error has occured: ${response.status}`;
};

export async function getTweets(count: number, id: number) {
  const getUrl = `${BASE_API_URL}/api?count=${count}&afterId=${id}`;
  const response = await fetch(getUrl);
  if (response.status === OK_STATUS) {
    const jsonRes = await response.json();
    const tweets: ITweet[] = jsonRes;
    tweets.reverse();
    return Promise.all(tweets);
  }
  const message = createErrorMessage(response);
  return Promise.reject(new Error(message));
}

export async function resetStories() {
  const getUrl = `${BASE_API_URL}/reset`;
  let response = await fetch(getUrl);
  if (response.status === OK_STATUS) {
    const jsonRes = await response.json();
    return Promise.all(jsonRes);
  }
  const message = createErrorMessage(response);
  return Promise.reject(new Error(message));
}
