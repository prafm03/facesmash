import { getNewEloScores } from "$lib/server/elo.js";

export async function POST({ request, locals }) {
  // parse request data
  const { id1, id2, id1Won } = await request.json();
  // get current elos
  const [{ eloScore: elo1 }, { eloScore: elo2, gamesWon: games2Won }] =
    await Promise.all(
      locals.db.collection("faces").getOne(id1),
      locals.db.collection("faces").getOne(id2),
    );
  // calculate new elos
  const newElos = await getNewEloScores(elo1, elo2, id1Won);
  // update new elos
  await Promise.all([
    locals.db
      .collection("faces")
      .update(id1, { eloScore: newElos[0], gamesWon: id1Won }),
    locals.db.collection("faces").update(id2, {
      eloScore: newElos[1],
      gamesWon: id1Won === 1 ? games2Won : id1Won,
    }),
  ]);

  return new Response({ status: 201 });
}
