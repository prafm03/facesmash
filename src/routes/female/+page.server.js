export async function load({ locals }) {
  const records = await locals.db.collection("faces").getFullList({
    sort: "-eloScore",
    filter: "(sex='female')",
  });
  return {
    records,
  };
}
