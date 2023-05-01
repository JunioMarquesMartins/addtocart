import Image from 'next/image'

import { formatPrice } from '../utils/priceFormat'
import { MinusCircle, PlusCircle } from 'phosphor-react'

import { useSelector, useDispatch } from 'react-redux'

import { decrement, increment, selectProducts } from '../store/products'

export default function Home() {
  const dispatch = useDispatch()

  const Products = useSelector(selectProducts)

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
                  <div className="px-2 text-sm">
                    <p className="min-h-[7rem]">{product.description}</p>
                    <p>
                      <strong>Price: {formatPrice(product.price)}</strong>
                    </p>
                  </div>
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
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
