import { getNewEloScores } from "$lib/server/elo.js";

export async function PATCH({ request, locals }) {
  // parse request data
  const { id1, id2, id1Won } = await request.json();
  // get current elos
  const [
    { eloScore: elo1, gamesWon: games1Won },
    { eloScore: elo2, gamesWon: games2Won },
  ] = await Promise.all([
    locals.db.collection("faces").getOne(id1),
    locals.db.collection("faces").getOne(id2),
  ]);
  // calculate new elos
  const newElos = await getNewEloScores(elo1, elo2, id1Won);
  // update new elos
  const [result1, result2] = await Promise.all([
    locals.db
      .collection("faces")
      .update(id1, { eloScore: newElos[0], gamesWon: games1Won + id1Won }),
    locals.db.collection("faces").update(id2, {
      eloScore: newElos[1],
      gamesWon: id1Won === 1 ? games2Won : games2Won + id1Won,
    }),
  ]);

  return new Response({ status: 201 });
}
