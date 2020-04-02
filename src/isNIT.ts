export const nitRegExp = /(^\d{4})-(\d{6})-(\d{3})-(\d$)/;

function isNIT(str: string): boolean {
  if (!nitRegExp.test(str)) return false;

  // TODO: Validate NIT

  return true;
}

export default isNIT;
