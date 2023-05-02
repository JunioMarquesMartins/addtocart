import Link from 'next/link'

import { BatteryEmpty, ShoppingCart } from 'phosphor-react'
import { useSelector } from 'react-redux'
import { selectCart } from '../store/cart'

export function Header() {
  // const Cart = useSelector(selectCart)
  // console.log(Cart)
  return (
    <header className="bg-gray-200 py-2 px-5 text-white flex justify-between items-center fixed w-full left-0 top-0 z-10">
      <Link href="/">
        <BatteryEmpty size={32} />
      </Link>
      <nav>
        <Link href="/cart">
          <ShoppingCart size={32} />
        </Link>
      </nav>
    </header>
  )
}
