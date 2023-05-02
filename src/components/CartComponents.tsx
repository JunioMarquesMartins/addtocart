import Image from 'next/image'
import { Trash } from 'phosphor-react'
import { formatPrice } from '../utils/priceFormat'
import { useSelector } from 'react-redux'
import { selectCart } from '../store/cart'

export function CartComponent() {
  const cart = useSelector(selectCart)
  return (
    <main className="min-h-screen">
      <section className="max-w-5xl mx-auto text-white">
        <div className="py-14">
          <h1 className="text-3xl border-b pb-2 mb-8">Cart</h1>
          <div className="flex gap-8 bg-white text-gray-200">
            <table className="w-full">
              <thead>
                <tr className="text-left py-3">
                  <th />
                  <th>PRODUCTO</th>
                  <th>AMOUNT</th>
                  <th>SUBTOTAL</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {cart.map((product) => {
                  return (
                    <tr key={product.id} className="border-b-2">
                      <td>
                        <Image
                          width={100}
                          height={100}
                          src={`/${product.image}`}
                          alt=""
                        />
                      </td>
                      <td>
                        <p>{product.name}</p>
                        <strong>{formatPrice(product.price)}</strong>
                      </td>
                      <td>
                        <p>{product.amount}</p>
                      </td>
                      <td>
                        <p>{formatPrice(product.price)}</p>
                      </td>
                      <td>
                        <Trash size={32} />
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  )
}
