export const duiRegExp = /(^\d{8})-(\d$)/;

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
