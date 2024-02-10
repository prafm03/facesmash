import { SECRET_DB_ENDPOINT } from "$env/static/private";
import PocketBase from "pocketbase";

export const handle = async ({ event, resolve }) => {
  if (!event.locals.db) {
    event.locals.db = new PocketBase(SECRET_DB_ENDPOINT);
  }
  return resolve(event);
};
