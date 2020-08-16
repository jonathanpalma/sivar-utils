/**
 * Beginning with 6 or 7 follow by three digits, then a dash and ends with four digits only
 */
const mobilePhoneRegExP = /^[67]\d{3}-\d{4}$/;
/**
 * Beginning with 2 follow by three digits, then a dash and ends with four digits only
 */
const residentialPhoneRegExP = /^2\d{3}-\d{4}$/;

/**
 * Verifies that given string number is a mobile number
 *
 * @param {string} phone A string phone number with a dash included
 * @returns {boolean} Is a valid mobile phone number
 */
export function isMobilePhoneNumber(phone: string): boolean {
  if (typeof phone !== 'string') return false;

  return mobilePhoneRegExP.test(phone);
}

/**
 * Verifies that given string number is a residential number
 *
 * @param {string} phone A string phone number with a dash included
 * @returns {boolean} Is a valid residential phone number
 */
export function isResidentialPhoneNumber(phone: string): boolean {
  if (typeof phone !== 'string') return false;

  return residentialPhoneRegExP.test(phone);
}

/**
 * Verifies that given string number is a phone number
 *
 * @param {string} phone A string phone number with a dash included
 * @returns {boolean} Is a valid phone number
 */
export function isPhoneNumber(phone: string): boolean {
  return isMobilePhoneNumber(phone) || isResidentialPhoneNumber(phone);
}
