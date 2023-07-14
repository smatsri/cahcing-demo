import { cache } from "./cache"

export const getTodoHtml = (id: number) => cache.getItem(id.toString())