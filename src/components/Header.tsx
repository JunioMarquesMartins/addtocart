import Link from 'next/link'

import { BatteryEmpty } from 'phosphor-react'
import { PopoverCart } from './PopoverCart'

export function Header() {
  return (
    <header className="bg-gray-200 py-2 px-5 text-white flex justify-between items-center fixed w-full left-0 top-0 z-10">
      <Link href="/">
        <BatteryEmpty size={32} />
      </Link>
      <nav>
        <PopoverCart />
      </nav>
    </header>
  )
}
