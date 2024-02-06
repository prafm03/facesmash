import { SECRET_DB_ENDPOINT } from "$env/static/private";
import PocketBase from "pocketbase";

export const handle = async ({ event, resolve }) => {
  event.locals.db = new PocketBase(SECRET_DB_ENDPOINT);
  return resolve(event);
};
