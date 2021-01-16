import { getTweets, resetStories} from "../../utils/api";
import { ITweet } from "../../types/types";
import { createStory } from "../components/createITweet";

const TWEET_COUNT = 5;
const MAX_INDEX = 50;
let currentIndex = 0;
let itemCache: { [itemId: number]: ITweet } = {};

async function createTweets(mainContent: HTMLElement) {
    const stories = await renderTweets(TWEET_COUNT,currentIndex);
    if(stories != null){
      appendTweets(mainContent, stories);
    }
}

function appendTweets(mainContent: HTMLElement, stories: (HTMLLIElement | undefined)[]) {
  const postsContainer = document.getElementById("ulID")!;
  mainContent.appendChild(postsContainer);
  stories.forEach((story) => {
    if (story) {
      postsContainer.prepend(story);
    }
  });
}

async function renderTweets(count:number,tweetIndex:number) {
  const posts = await getTweets(count,tweetIndex).catch(error => console.log(error));
  if(posts){
    const stories = posts
    .filter(post => !itemCache[post.id])
    .map(createStory);
    iterateTweets(posts);
    return stories;
  }
    return null;
}

 function iterateTweets(posts:ITweet[]) {
  posts.forEach((post) => {
    if (post && !itemCache[post.id]) {
      currentIndex = post.id;
      itemCache[post.id] = post;
    }
  });
}

export async function renderContent(mainContent: HTMLElement) {
  if (currentIndex >= MAX_INDEX) {
    resetCurrentIndex();
    console.log("reset");
    await resetStories().catch((error) => console.log(error));
  } else {
    await createTweets(mainContent);
  }
}

function resetCurrentIndex() {
  currentIndex = 0;
}

