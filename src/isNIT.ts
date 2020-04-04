import municipalitiesCode from './municipalitiesCodeRanges';

export const nitRegExp = /(^\d{4})-(\d{6})-(\d{3})-(\d$)/;

/**
 * Verifies that given NIT format is valid
 *
 * @param  {string} str       A string representing NIT digits (with hyphen)
 * @returns {boolean}         Validity of the given NIT
 */
function isHyphen(i: number) {
  return i === 4 || i === 11 || i === 15;
}

function checkDigitOldFormat(str: string) {
  let sum = 0;
  for (let i = 0; i <= 14; i++) {
    if (!isHyphen(i)) sum += (15 - i) * Number(str.charAt(i));
    sum %= 11;
  }
  return sum;
}

function checkDigit(str: string) {
  let n = 1;
  let sum = 0;
  for (let i = 0; i <= 14; i++) {
    if (!isHyphen(i)) {
      sum +=
        Number(str.charAt(i)) * (3 + 6 * Math.floor(Math.abs((n + 4) / 6)) - n);
      n += 1;
    }
  }
  sum %= 11;
  return sum > 1 ? 11 - sum : 0;
}

function isForeignCode(num: number) {
  return num === 9;
}

function isNationalCode(str: string) {
  if (!(Number(str.charAt(0)) === 0 || Number(str.charAt(0)) === 1)) return false;
  for (let i = 0; i < municipalitiesCode.length; i++) {
    const [minRange, maxRange] = municipalitiesCode[i];
    if (Number(str) >= minRange && Number(str) <= maxRange) return true;
    if (minRange >= Number(str)) return false;
  }
  return false;
}

function isMunicipalityCode(str: string): boolean {
  if (isForeignCode(Number(str.charAt(0)))) return true;
  if (isNationalCode(str)) return true;
  return false;
}

function setFullYear(year: string) {
  return Number(year) >=
    Number(new Date().getFullYear().toString().substr(-2)) + 1
    ? '19'.concat(year)
    : '20'.concat(year);
}

function isDate(str: string): boolean {
  const year = setFullYear(str.substring(4));
  const month = str.substring(2, 4);
  const day = str.substring(0, 2);
  const date = new Date(`${year}/${month}/${day}`);
  return date && Number(date.getMonth()) + 1 === Number(month);
}

function isNIT(str: string): boolean {
  if (!nitRegExp.test(str)) return false;
  const [municipalityCode, birthDate, correlative, verifier] = str.split('-');
  if (!isMunicipalityCode(municipalityCode)) return false;
  if (!isDate(birthDate)) return false;
  let sum = 0;
  if (Number(correlative) <= 100) {
    sum = checkDigitOldFormat(str);
  } else {
    sum = checkDigit(str);
  }
  return sum === Number(verifier);
}

export default isNIT;
