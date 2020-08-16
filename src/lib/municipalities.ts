type lookupTable<T> = {
  [key: string]: T;
};

// TODO: map the whole municipality's list
const municipalitiesLookup: lookupTable<number> = {
  '01': 12,
  '02': 13,
  '03': 16,
  '04': 33,
  '05': 22,
  '06': 19,
  '07': 16,
  '08': 22,
  '09': 9,
  '10': 13,
  '11': 23,
  '12': 20,
  '13': 26,
  '14': 18,
};

/**
 * Verifies that given municipality code is valid foreign code
 *
 * @param  {string} code      A string representing municipality digits
 * @returns {boolean}         Foreign validity of the given municipality
 */
export function isForeignCode(code: string) {
  return code.startsWith('9');
}

/**
 * Verifies that given municipality code is valid national code
 *
 * @param  {string} code      A string representing municipality digits
 * @returns {boolean}         National validity of the given municipality
 */
export function isNationalCode(code: string) {
  if (!code.startsWith('0') && !code.startsWith('1')) return false;

  const department = code.substring(0, 2);
  const municipality = code.substring(2);
  return municipalitiesLookup[department] >= Number(municipality);
}

/**
 * Verifies that given municipality code is valid
 *
 * @param  {string} code      A string representing municipality digits
 * @returns {boolean}         Validity of the given municipality
 */
export function isMunicipalityCode(code: string): boolean {
  return code.length === 4 && (isForeignCode(code) || isNationalCode(code));
}
