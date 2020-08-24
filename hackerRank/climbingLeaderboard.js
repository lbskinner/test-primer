function climbingLeaderboard(scores, alice) {
  const distScores = [...new Set(scores)];
  // console.log(distScores);

  // failed test case 6 for time out
  const aliceRankings = [];
  for (let i = 0; i < alice.length; i++) {
    for (let j = distScores.length - 1; j >= 0; j--) {
      if (alice[i] < distScores[j]) {
        aliceRankings.push(j + 2);
        break;
      }
    }
    if (alice[i] >= distScores[0]) aliceRankings.push(1);
  }
  console.log(aliceRankings);

  // passed all test cases
  const aliceRankings = [];
  const aliceLength = alice.length;
  let distScoresLength = distScores.length - 1;
  for (let i = 0; i < aliceLength; i++) {
    console.count("outer");
    for (let j = distScoresLength; j >= 0; j--) {
      console.count("inner top");

      if (alice[i] < distScores[j]) {
        console.count("inner if");
        aliceRankings.push(j + 2);
        // reset the starting point for the inner loop to where we were last at
        distScoresLength = j;
        break;
      }
    }
    if (alice[i] >= distScores[0]) aliceRankings.push(1);
  }

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

  // // pass all test cases
  // const aliceRankings = [];
  // const distScore = [...new Set(scores)];
  // let i = distScore.length - 1;
  // alice.forEach((score) => {
  //   while (i >= 0) {
  //     if (score >= distScore[i]) {
  //       i--;
  //     } else {
  //       aliceRankings.push(i + 2);
  //       break;
  //     }
  //   }
  //   if (i < 0) aliceRankings.push(1);
  // });

  return aliceRankings;
}

const scores = [100, 90, 90, 80, 75, 60];
const alice = [50, 65, 77, 90, 102];

console.log(climbingLeaderboard(scores, alice));
