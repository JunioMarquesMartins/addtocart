import Image from 'next/image'
import { formatPrice } from '../utils/priceFormat'
import { dateFormat } from '../utils/dateFormat'
import {
  ArrowElbowDownRight,
  MinusCircle,
  PlusCircle,
  ShoppingCart,
} from 'phosphor-react'
import { useDispatch } from 'react-redux'
import { decrement, increment } from '../store/products'
import { addToCart } from '../store/cart'
import { SwitchToggle } from './SwitchToggle'
import { useEffect, useState } from 'react'
import { Button } from './Button'

export function ProductCard({ product }) {
  const dispatch = useDispatch()

  const [isExpery, setIsExpery] = useState(false)

  const dateIsExpery = () => {
    const currentDate = new Date()
    const experyDate = new Date(product.dateOfExpiry)
    setIsExpery(currentDate > experyDate)
  }
  useEffect(() => {
    dateIsExpery()
  }, [])
  return (
    <div className="bg-white rounded-md pb-6 text-gray-200 group transition-all">
      <h3 className="px-4 py-1 text-base text-center">{product.name}</h3>
      <figure className="h-[15rem] overflow-hidden mb-2">
        <Image
          className="w-full object-cover grayscale group-hover:filter-none group-hover:scale-105 transition-transform"
          width={200}
          height={500}
          src={`/${product.image}`}
          alt={product.name}
        />
      </figure>
      <div className="px-2 text-sm mb-4">
        <p className="min-h-[4.4rem] pt-2 pb-2 mb-2">{product.description}</p>
        <hr />
        <div className="flex justify-between mt-4">
          <div>
            <p>
              <strong>Price:</strong> <br />
              <span className="flex gap-1 items-end">
                <ArrowElbowDownRight size={20} />
                {formatPrice(product.price)}
              </span>
            </p>
            <p>
              <strong>Date of Expiry:</strong>
              <br />
              <span className="flex gap-1 items-end">
                <ArrowElbowDownRight size={20} />
                {dateFormat(product.dateOfExpiry)}
              </span>
            </p>
          </div>

          {isExpery && (
            <div>
              <strong className="text-[11px] mb-2">
                Add to Cart as disabled?
              </strong>
              <SwitchToggle prodId={product.id} />
            </div>
          )}
        </div>
      </div>

      <div className="px-2 flex gap-2 justify-between">
        <div className="flex gap-2 items-center px-3 py-1 shadow-xl rounded-xl">
          <button type="button" onClick={() => dispatch(decrement(product.id))}>
            <MinusCircle size={24} />
          </button>
          <strong>{product.amount}</strong>
          <button type="button" onClick={() => dispatch(increment(product.id))}>
            <PlusCircle size={24} />
          </button>
        </div>

        <div>
          <div>
            <Button
              onClick={() => dispatch(addToCart(product))}
              text="Add to Cart"
              className="flex gap-2 bg-blue-400 text-white py-1 px-2 hover:bg-blue-500 transition-all disabled:opacity-75 disabled:bg-slate-400 disabled:cursor-not-allowed"
              disabled={product.amount === 0}
            >
              <ShoppingCart size={24} />
              {/* <strong>Add to Cart</strong> */}
            </Button>
            {/* <button
              onClick={() => dispatch(addToCart(product))}
              className="flex gap-2 bg-blue-400 text-white py-1 px-2 hover:bg-blue-500 transition-all disabled:opacity-75 disabled:bg-slate-400 disabled:cursor-not-allowed"
              type="button"
              disabled={product.amount === 0}
            >
              <ShoppingCart size={24} />
              <strong>Add to Cart</strong>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  )
}
