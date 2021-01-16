import { init } from "./public/layout/init";
import { renderLayout } from "./public/layout/layout";
import { renderContent} from "./public/layout/content";
import "./style.css";

const root = init();
const { layout, mainContent } = renderLayout();
root.appendChild(layout);
const renderTweets = () => {
    renderContent(mainContent);
    setTimeout(renderTweets, 2000);
}


renderTweets()