import Link from 'next/link'

import { BatteryEmpty, ShoppingCart } from 'phosphor-react'
import { useSelector } from 'react-redux'
import { selectCart } from '../store/cart'

export function Header() {
  const Cart = useSelector(selectCart)
  return (
    <header className="bg-gray-200 py-2 px-5 text-white flex justify-between items-center fixed w-full left-0 top-0 z-10">
      <Link href="/">
        <BatteryEmpty size={32} />
      </Link>
      <nav>
        {Cart.length > 0 && (
          <Link className="relative" href="/cart">
            <span className="absolute top-0 right-[-6px] bg-white text-gray-100 rounded-full text-[.7rem] w-[18px] h-[18px] flex items-center justify-center">
              <strong>{Cart?.length}</strong>
            </span>
            <ShoppingCart size={32} />
          </Link>
        )}
      </nav>
    </header>
  )
}
