import Image from 'next/image'

import { formatPrice } from '../utils/priceFormat'
import { MinusCircle, PlusCircle, ShoppingCart } from 'phosphor-react'

import { useSelector, useDispatch } from 'react-redux'

import { decrement, increment, selectProducts } from '../store/products'
import { addToCart, selectCart } from '../store/cart'

import { CartComponent } from '../components/CartComponents'

export default function Home() {
  const dispatch = useDispatch()

  const Products = useSelector(selectProducts)
  const Cart = useSelector(selectCart)

  return (
    <main className="min-h-screen">
      <section className="max-w-5xl mx-auto text-white">
        <div className="py-14">
          <h1 className="text-3xl border-b pb-2 mb-8">Phones Deal</h1>
          <div className="grid grid-cols-3 gap-6">
            {Products.map((product) => {
              return (
                <div
                  key={product.id}
                  className="bg-white rounded-md pb-6 text-gray-200 group transition-all"
                >
                  <h3 className="px-4 py-1 text-base text-center">
                    {product.name}
                  </h3>
                  <figure className="h-[15rem] overflow-hidden mb-4">
                    <Image
                      className="w-full object-cover grayscale group-hover:filter-none group-hover:scale-105 transition-transform"
                      width={200}
                      height={500}
                      src={`/${product.image}`}
                      alt={product.name}
                    />
                  </figure>
                  <div className="px-2 text-sm mb-4">
                    <p className="min-h-[7rem]">{product.description}</p>
                    <p>
                      <strong>Price: {formatPrice(product.price)}</strong>
                    </p>
                  </div>
                  <div className="px-2 flex gap-2 justify-between">
                    <div>
                      <button
                        type="button"
                        onClick={() => dispatch(decrement(product.id))}
                      >
                        <MinusCircle size={20} />
                      </button>
                      <span>{product.amount}</span>
                      <button
                        type="button"
                        onClick={() => dispatch(increment(product.id))}
                      >
                        <PlusCircle size={20} />
                      </button>
                    </div>
                    <button
                      onClick={() => dispatch(addToCart(product))}
                      className="flex gap-2 bg-blue-400 text-white py-1 px-2 hover:bg-blue-500 transition-all"
                      type="button"
                    >
                      <ShoppingCart size={24} />
                      <strong>Add to Cart</strong>
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        {Cart.length && <CartComponent />}
      </section>
    </main>
  )
}
