import createEmotionServer from "@emotion/server/create-instance";
import createCache from "@emotion/cache";

export const cache = createCache({ key: "css", prepend: true });
cache.compat = true;

export const { extractCritical } = createEmotionServer(cache);