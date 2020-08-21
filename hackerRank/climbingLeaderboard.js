function climbingLeaderboard(scores, alice) {
  const distScores = [...new Set(scores)];
  // console.log(distScores);

  // failed test 6 for time out and 1, 3, & 5 for incorrect answer
  const aliceRankings = [];
  for (let i = 0; i < alice.length; i++) {
    for (let j = distScores.length - 1; j >= 0; j--) {
      if (alice[i] < distScores[j]) {
        aliceRankings.push(j + 2);
        break;
      }
    }
    if (alice[i] > distScores[0]) aliceRankings.push(1);
  }
  console.log(aliceRankings);

  // pass all tests except for test cases 6, 7, 8, & 9 (terminated due to timeout)
  // alice.forEach((aliceScore) => {
  //     const index = distScores.findIndex((score) => aliceScore >= score);
  //     if(index === -1) {
  //         aliceRankings.push(distScores.length + 1);
  //     } else {
  //         aliceRankings.push(index + 1);
  //     }
  //     console.log(aliceRankings)
  // })
  return aliceRankings;

  // pass all test cases
  // const aliceRankings = [];
  // const distScore = [...new Set(scores)];
  // let i = distScore.length - 1;
  // alice.forEach((score) => {
  //     while (i >= 0) {
  //         if (score >= distScore[i]) {
  //             i--;
  //         } else {
  //             aliceRankings.push(i + 2);
  //             break;
  //         }
  //     }
  //     if (i < 0) aliceRankings.push(1);
  // });

  // return aliceRankings;
}

const scores = [100, 90, 90, 80, 75, 60];
const alice = [50, 65, 77, 90, 102];

console.log(climbingLeaderboard(scores, alice));
