interface Product {
  id: number
  name: string
  image: string
  description: string
  price: number
}
export const Products: Product[] = [
  {
    id: 1,
    name: 'iPhone 14 Pro MAX',
    image: 'promax.jpg',
    description:
      'Teléfono de 12 GB y 256 GB, Tarjeta Dual, Doble Modo de Espera, I14 Pro Max, Teléfono Móvil de 6,6 Pulgadas, Frontal, 12MP, Trasero, 24MP, 12nm, Procesador EU 100-240V para la Vida Diaria (Púrpura)',
    price: 1435,
  },
  {
    id: 2,
    name: 'Galaxy S23 Ultra',
    image: 's23ultra.jpg',
    description:
      'Galaxy S23 Ultra 5G eSim + Nano SIM Teléfono Móvil Android, 256GB, SIM Free Smartphone, Phantom Black, Versión Internacional Coreana',
    price: 1035,
  },
  {
    id: 3,
    name: 'Xiaomi 13 5G',
    image: 'xaiomi.jpg',
    description:
      'Smartphone de 8+256GB, Pantalla de 6.36” AMOLED de 120Hz, Snapdragon 8 Gen 2, Cámara Leica de 50MP, Carga de 67W, 4500mAh, Negro (Versión ES + 3 años de garantía)',
    price: 1041,
  },
  {
    id: 4,
    name: 'HONOR Magic 5',
    image: 'honor.jpg',
    description:
      'Lite Smartphone 5G,Telefono movil de 6+128 GB,Snapdragon 695,Pantalla AMOLED Curva de 120 Hz de 6,67”,Cámara Triple de 64MP,Batería Larga duración de 5100 mAh, Dual SIM,Android 12',
    price: 1199.04,
  },
  {
    id: 5,
    name: 'OPPO Reno8 Pro 5G',
    image: 'oppo.jpg',
    description:
      'Teléfono Móvil Libre, 8GB+256GB, Cámara 50+8+2+32MP, Smartphone Android, Batería 4500mAh, Carga Rápida 80W, Dual SIM - Verde',
    price: 660.56,
  },
  {
    id: 6,
    name: 'Google Pixel 7 Pro',
    image: 'google-pixel.jpg',
    description:
      'Móvil 5G Android Libre con teleobjetivo, Objetivo Gran Angular y batería de 24 Horas de duración - 128GB, Nieve + Pixel Buds A-Series, Blanco',
    price: 799.35,
  },
]
