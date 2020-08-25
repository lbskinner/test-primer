function saveThePrisoner(n, m, s) {
  // n - the number of prisoners
  // m - the number of sweets
  // s - the chair number to start passing out treats at
  let chairNum = s;
  if (n > m) {
    chairNum = (n % m) + s;
  } else if (n < m) {
    totalChairCount = (m % n) - 1 + s;
    chairNum = totalChairCount > n ? totalChairCount - n : totalChairCount;
  } else {
    chairNum = s === 1 ? n : s - 1;
  }
  return chairNum;
}

console.log(saveThePrisoner(352926151, 380324688, 94730870));
console.log(saveThePrisoner(94431605, 679262176, 5284458));
console.log(saveThePrisoner(208526924, 756265725, 150817879));
console.log(saveThePrisoner(962975336, 972576181, 396355184));
console.log(saveThePrisoner(464237185, 937820284, 255816794));
console.log(saveThePrisoner(649320641, 742902564, 647542323));

module.exports = saveThePrisoner;
