import { getNewEloScores } from "$lib/server/elo.js";

export async function POST({ request, locals }) {
  const { id1, id2, id1Won } = await request.json();
  const { eloScore: elo1 } = await locals.db.collection("faces").getOne(id1);
  const { eloScore: elo2 } = await locals.db.collection("faces").getOne(id2);
  const newElos = await getNewEloScores(elo1, elo2, id1Won);
  await locals.db.collection("faces").update(id1, { eloScore: newElos[0] });
  await locals.db.collection("faces").update(id2, { eloScore: newElos[1] });
  return new Response({ status: 201 });
}
