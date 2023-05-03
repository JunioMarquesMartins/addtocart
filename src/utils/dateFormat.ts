export function dateFormat(date) {
  const dateFormatted = new Date(date).toLocaleDateString()

  return dateFormatted
}
