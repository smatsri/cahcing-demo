import PriorityCache from "@/lib/caching/PriorityCache";
import { getPosts } from "./api";
import { CacheProvider } from "@emotion/react";
import { cache as emotionCache, extractCritical } from "../emotion";
import { MessagesProvider } from "@/components/shared/MessagesProvider";
import AppThemeProvider from "@/app/AppThemeProvider";
import { CarPostAd } from "@/components/CarPost/Price/types";
import CarPost from "@/components/CarPost/CarPost";

const cache = new PriorityCache(1000, 1000 * 60 * 5);
const ignore = () => {};

export const renderPost = async (post: CarPostAd) => {
  const ReactDOMServer = (await import("react-dom/server")).default;
  const fullHtml = ReactDOMServer.renderToString(
    <AppThemeProvider>
      <MessagesProvider>
        <CacheProvider value={emotionCache}>
          <CarPost
            post={post}
            onBenefitsClick={ignore}
            onContactClick={ignore}
            onDetailsClick={ignore}
            onFavChange={ignore}
            onFundingClick={ignore}
            onInsightsClick={ignore}
            onPostClick={ignore}
          />
        </CacheProvider>
      </MessagesProvider>
    </AppThemeProvider>
  );

  const { html } = extractCritical(fullHtml);

  const script = `
  <script type="text/javascript">
  window.CarPosts = window.CarPosts || {};
  window.CarPosts['${post.carId}'] = ${JSON.stringify(post)};
  </script>
`;
  return html + script;
};

let loaded = false;
let keys: string[] = [];

export const loadData = async () => {
  if (!loaded) {
    const posts = await getPosts();
    const htmlsPromises = posts.map(async (post) => ({
      key: post.carId,
      value: await renderPost(post),
    }));
    const items = await Promise.all(htmlsPromises);
    cache.addMany(items);
    loaded = true;

    keys = items.map((item) => item.key);
  }

  return keys;
};

export const getCarPostHtml = (carId: string) => {
  const html = cache.getItem(carId);
  return html;
};

export const getCarPostData = (carId: string): CarPostAd => {
  const post: CarPostAd = (window as any)["CarPosts"][carId];
  return post;
};
