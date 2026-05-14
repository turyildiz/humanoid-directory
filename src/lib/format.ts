export function displayValue(value: string | number | null | undefined, suffix = '') {
  if (value === null || value === undefined || value === '') return 'Not publicly disclosed';
  return `${value}${suffix}`;
}

export function slugToLabel(slug: string) {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
}
