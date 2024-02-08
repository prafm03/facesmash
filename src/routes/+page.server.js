export async function load({ locals }) {
  // page, limit, options
  const query = await locals.db.collection("faces").getList(1, 2, {
    fields: "id, profilePhoto",
    sort: "@random",
    filter: `(sex='${Math.random() < 0.5 ? "male" : "female"}')`,
    perPage: 2,
    skipTotal: true,
  });
  console.log(query);
  return {
    options: query.items,
  };
}
