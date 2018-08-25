export function _getEnumKeys(enumObj: any): string[] {
  const keys = Object.keys(enumObj);
  return keys.slice(keys.length / 2);
}
