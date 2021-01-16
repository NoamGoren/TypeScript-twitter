
import { ITweet } from "../../types/types";
import { isTweet } from "../../types/type-guards";
import { formatDate } from "../../utils/formatDate";

  export function createStory(tweet: ITweet) {
  if (!isTweet(tweet)) return;
  const { parentDiv, storyWrapper } = createParentDiv();
  const profileDiv = createProfilePictureDiv(tweet);
  const tweetDiv = createTweetDiv(profileDiv, tweet);
  const tagline = createTagElement(tweet);
  tweetDiv.appendChild(tagline)
  parentDiv.appendChild(tweetDiv);
  storyWrapper.appendChild(parentDiv);
  return storyWrapper;
}

function createParentDiv() {
  const storyWrapper = document.createElement("li");
  const parentDiv = document.createElement("div");
  parentDiv.classList.add("parentDiv");
  storyWrapper.classList.add("post");
  return { parentDiv, storyWrapper };
}

function createTweetDiv(profileDiv: HTMLDivElement, tweet: ITweet) {
  const tweetDiv = document.createElement("div");
  tweetDiv.appendChild(profileDiv);
  const title = document.createElement("a");
  title.classList.add("link");
  tweetDiv.classList.add("tweetDiv");
  let text = tweet.text;
  title.innerText = text;
  tweetDiv.appendChild(title);
  return tweetDiv;
}

function createProfilePictureDiv(tweet: ITweet) {
  const profileDiv = document.createElement("div");
  const picture = document.createElement("img");
  picture.src = tweet.image;
  profileDiv.appendChild(picture);
  return profileDiv;
}

function createTagElement(tweet: ITweet) {
  const tagline = document.createElement("p");
  tagline.classList.add("meta-info");
  tagline.appendChild(document.createTextNode("By " + tweet.username));
  tagline.appendChild(
    document.createTextNode(
      ` on ${formatDate(new Date(tweet.timeStamp))}`
    )
  );
  return tagline;
}

