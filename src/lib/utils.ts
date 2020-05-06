/**
 * Calculates full year for a given two-digit format year
 *
 * @param  {string} year      A string representing two-digit format year
 * @returns {string}          Full year
 */
export function getFullYear(year: string): string {
  return Number(year) >=
    Number(new Date().getFullYear().toString().substr(-2)) + 1
    ? '19'.concat(year)
    : '20'.concat(year);
}

/**
 * Verifies that given NIT format birthdate is valid
 *
 * @param  {string} str       A string representing NIT format birthdate
 * @returns {boolean}         Validity of the given birthdate
 */
export function isDate(str: string): boolean {
  const year = getFullYear(str.substring(4));
  const month = str.substring(2, 4);
  const day = str.substring(0, 2);
  const date = new Date(`${year}/${month}/${day}`);
  return date && Number(date.getMonth()) + 1 === Number(month);
}
