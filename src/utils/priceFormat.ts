export const { format: formatPrice } = new Intl.NumberFormat('es-ES', {
  style: 'currency',
  currency: 'EUR',
})

export function subTotal(price, amount) {
  return price * amount
}
