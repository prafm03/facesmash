import { DB_ENDPOINT, DB_SECRET } from "$env/static/private";
import PocketBase from "pocketbase";

export const handle = async ({ event, resolve }) => {
  if (!event.locals.db) {
    event.locals.db = new PocketBase(DB_ENDPOINT);
    event.locals.db.beforeSend = (url, options) => {
      options.headers["db-secret"] = DB_SECRET;
      return { url, options };
    };
  }

  return resolve(event);
};
