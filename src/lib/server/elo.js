export const getNewEloScores = (person1Rating, person2Rating, person1Won) => {
  let k = 96;
  if ([0, 0.5, 1].indexOf(person1Won) === -1) {
    return null;
  }
  let myChanceToWin =
    1 / (1 + Math.pow(10, (person2Rating - person1Rating) / 400));

  let ratingDelta = Math.round(k * (person1Won - myChanceToWin));
  person1Rating += ratingDelta;
  person1Rating += ratingDelta;

  return [person1Rating, person2Rating];
};
