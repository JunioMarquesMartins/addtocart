import { createSlice, original } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    data: [
      {
        id: 1,
        name: 'f Item - 1',
        image: 'promax.jpg',
        description:
          'A Teléfono de 12 GB y 256 GB, Tarjeta Dual, Doble Modo de Espera, I14 Pro Max, Teléfono Móvil de 6,6 Pulgadas',
        price: 1435,
        amount: 0,
        dateOfExpiry: new Date(2024, 6, 2).toLocaleDateString(),
      },
      {
        id: 2,
        name: 'a Item - 2',
        image: 's23ultra.jpg',
        description:
          'F Galaxy S23 Ultra 5G eSim + Nano SIM Teléfono Móvil Android, 256GB, SIM Free Smartphone, Phantom Black',
        price: 1035,
        amount: 0,
        dateOfExpiry: new Date(2023, 1, 2).toLocaleDateString(),
      },
      {
        id: 3,
        name: 'c Item - 3',
        image: 'xaiomi.jpg',
        description:
          'B Smartphone de 8+256GB, Pantalla de 6.36” AMOLED de 120Hz, Snapdragon 8 Gen 2, Cámara Leica de 50MP',
        price: 1041,
        amount: 0,
        dateOfExpiry: new Date(2024, 1, 12).toLocaleDateString(),
      },
      {
        id: 4,
        name: 'b Item - 4',
        image: 'honor.jpg',
        description:
          'C Lite Smartphone 5G,Telefono movil de 6+128 GB,Snapdragon 695,Pantalla AMOLED Curva de 120 Hz de 6,67”',
        price: 1199.04,
        amount: 0,
        dateOfExpiry: new Date(2023, 8, 3).toLocaleDateString(),
      },
      {
        id: 5,
        name: 'e Item - 5',
        image: 'oppo.jpg',
        description:
          'D Teléfono Móvil Libre, 8GB+256GB, Cámara 50+8+2+32MP, Smartphone Android, Batería 4500mAh, Carga Rápida 80W, Dual SIM - Verde',
        price: 660.56,
        amount: 0,
        dateOfExpiry: new Date(2021, 2, 2).toLocaleDateString(),
      },
      {
        id: 6,
        name: 'd Item - 6',
        image: 'google-pixel.jpg',
        description:
          'E Móvil 5G Android Libre con teleobjetivo, Objetivo Gran Angular y batería de 24 Horas de duración - 128GB',
        price: 799.35,
        amount: 0,
        dateOfExpiry: new Date(2025, 6, 2).toLocaleDateString(),
      },
    ],
    query: '',
  },
  reducers: {
    increment: (state, action) => {
      const productIndex = original(state).data.findIndex(
        (item) => item.id === action.payload,
      )
      if (productIndex !== -1 && state.data[productIndex].amount < 10)
        state.data[productIndex].amount += 1
    },
    decrement: (state, action) => {
      const productIndex = original(state).data.findIndex(
        (item) => item.id === action.payload,
      )
      if (productIndex !== -1 && state.data[productIndex].amount > 0)
        state.data[productIndex].amount -= 1
    },
    sortByName: (state) => {
      state.data.sort((a, b) => a.name.localeCompare(b.name))
    },
    sortByDescription: (state) => {
      state.data.sort((a, b) => a.description.localeCompare(b.description))
    },
    sortByQuery: (state, action) => {
      state.query = action.payload
    },
  },
})

export const selectProductosFiltrados = (state) => {
  const { data, query } = state.products
  return filtrarProductos(data, query)
}

function filtrarProductos(data, query) {
  return data.filter((producto) => {
    return producto.name.toLowerCase().includes(query.toLowerCase())
  })
}

export const {
  increment,
  decrement,
  sortByName,
  sortByDescription,
  sortByQuery,
} = productSlice.actions

export default productSlice.reducer
