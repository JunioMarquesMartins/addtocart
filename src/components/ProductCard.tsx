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
    <div className="bg-white rounded-md pb-2 text-gray-200 group transition-all">
      <h3 className="px-4 py-1 text-base text-center">{product.name}</h3>
      <figure className="bg-gray-300 overflow-hidden mb-2 p-8 h-[28rem]">
        <Image
          className="w-full grayscale group-hover:filter-none group-hover:scale-105 transition-transform translate-y-[-4rem]"
          width={200}
          height={500}
          src={`/${product.image}`}
          alt={product.name}
        />
      </figure>
      <div className="px-2 text-sm mb-4">
        <p className="min-h-[4.4rem] pb-2 mb-2 border-b border-b-gray-300">
          {product.description}
        </p>
        <div className="flex justify-between mt-4 items-center">
          <div>
            <p>
              <strong>Price: </strong>
              {formatPrice(product.price)}
            </p>
            <p>
              <strong>Date of Expiry: </strong>
              {dateFormat(product.dateOfExpiry)}
            </p>
          </div>
        </div>
      </div>

      <div className="px-2 flex gap-2 justify-between">
        <div className="flex gap-2 items-center px-3 py-1 shadow-xl rounded-xl bg-greenDroid-100 text-white">
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
              className="rounded-md flex gap-2 bg-greenDroid-100 text-white py-1 px-3 hover:bg-greenDroid-200 transition-all disabled:opacity-75 disabled:bg-slate-400 disabled:cursor-not-allowed"
              disabled={product.amount === 0}
            >
              <ShoppingCart size={24} />
            </Button>
          </div>
        </div>
      </div>

      {isExpery && (
        <div className="text-center mt-4">
          <strong className="text-[11px] mb-2">Add to Cart as disabled?</strong>
          <SwitchToggle product={product} />
        </div>
      )}
    </div>
  )
}
