export const duiRegExp = /(^\d{8})-(\d$)/;

/**
 * Verifies that given DUI format is valid
 *
 * @param  {string} str       A string representing DUI digits (with hyphen)
 * @returns {boolean}         Validity of the given DUI
 */
function isDUI(str: string): boolean {
  if (!duiRegExp.test(str)) return false;

  let sum = 0;
  const [digits, verifier] = str.split('-');
  for (let i = 0; i < digits.length; i++) {
    sum += Number(digits[i]) * (digits.length + 1 - i);
  }

  return Number(verifier) === 10 - (sum % 10);
}

export default isDUI;
