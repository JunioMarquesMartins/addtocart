export function dateFormat(date) {
  const dateFormatted = new Date(date).toLocaleDateString()

  return dateFormatted
}

export function dateIsExpery(date) {
  const currentDate = new Date()
  const experyDate = new Date(date)

  return currentDate > experyDate
}
