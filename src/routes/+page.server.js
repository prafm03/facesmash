export async function load({ locals }) {
  const sex = Math.random() < 0.5 ? "male" : "female";
  const options = await locals.db.collection("faces").getFullList({
    sort: "@random",
    filter: `(sex='${sex}')`,
  });
  return {
    options,
  };
}
