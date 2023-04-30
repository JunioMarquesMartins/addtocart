import Link from 'next/link'

import { BatteryEmpty, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <header className="bg-gray-200 py-2 px-5 text-white flex justify-between items-center">
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
