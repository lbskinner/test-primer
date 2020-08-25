function saveThePrisoner(n, m, s) {
  // n - the number of prisoners
  // m - the number of sweets
  // s - the chair number to start passing out treats at
  let prisonerWarnedChairNum = (s + m - 1) % n;
  prisonerWarnedChairNum === 0 && (prisonerWarnedChairNum = n);
  return prisonerWarnedChairNum;

  //   let chairNum = 0;
  //   let totalChairCount = 0;
  //   if (n > m) {
  //     totalChairCount = m + s - 1;
  //     chairNum = totalChairCount > n ? totalChairCount - n : totalChairCount;
  //   } else if (n < m) {
  //     if (m % n === 0 && s === 1) {
  //       chairNum = n;
  //     } else {
  //       totalChairCount = (m % n) - 1 + s;
  //       chairNum = totalChairCount > n ? totalChairCount - n : totalChairCount;
  //     }
  //   } else {
  //     chairNum = s === 1 ? n : s - 1;
  //   }
  //   return chairNum;
}

console.log(saveThePrisoner(13, 140874526, 1));

module.exports = saveThePrisoner;
