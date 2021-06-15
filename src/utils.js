export function camelToTitleCase (camelCaseString = '') {
  return camelCaseString
    .replace(/([A-Z])/g, match => ` ${match}`)
    .replace(/^./, match => match.toUpperCase())
    .trim()
}
