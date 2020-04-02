export const nitRegExp = /(^\d{4})-(\d{6})-(\d{3})-(\d$)/;

/**
 * Verifies that given NIT format is valid
 *
 * @param  {string} str       A string representing NIT digits (with hyphen)
 * @returns {boolean}         Validity of the given NIT
 */
function isNIT(str: string): boolean {
  if (!nitRegExp.test(str)) return false;

  // TODO: Validate NIT

  return true;
}

export default isNIT;
