export const nitRegExp = /(^\d{4})-(\d{6})-(\d{3})-(\d$)/;

/**
 * Verifies that given NIT format is valid
 *
 * @param  {string} str       A string representing NIT digits (with hyphen)
 * @returns {boolean}         Validity of the given NIT
 */

function isHyphenIndex(i: Number) {
  return i === 4 || i === 11;
}

function calculateValidatorDigitOldFormat(str: string) {
  let sum = 0;
  for (let i = 0; i <= 14; i++) {
    if (!isHyphenIndex(i)) sum += (15 - i) * Number(str.charAt(i));
    sum %= 11;
  }
  return sum;
}

function calculateValidatorDigit(str: string) {
  let n = 1;
  let sum = 0;
  for (let i = 0; i <= 14; i++) {
    if (!isHyphenIndex(i)) {
      sum +=
        Number(str.charAt(i)) * (3 + 6 * Math.floor(Math.abs((n + 4) / 6)) - n);
      n += 1;
    }
  }
  sum %= 11;
  return sum > 1 ? 11 - sum : 0;
}

function isNIT(str: string): boolean {
  if (!nitRegExp.test(str)) return false;
  let sum = 0;
  if (Number(str.substring(12, 15)) <= 100) {
    sum = calculateValidatorDigitOldFormat(str);
  } else {
    sum = calculateValidatorDigit(str);
  }
  return sum === Number(str.charAt(16));
}

export default isNIT;
