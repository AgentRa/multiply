module.exports = function multiply(first, second) {

  let huge1 = BigInt(first);
  let huge2 = BigInt(second);
  let huge3 = BigInt(huge1 * huge2);
  return huge3.toString();
}
