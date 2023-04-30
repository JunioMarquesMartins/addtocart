export const { format: formatPrice } = new Intl.NumberFormat('es-ES', {
  style: 'currency',
  currency: 'EUR',
})
