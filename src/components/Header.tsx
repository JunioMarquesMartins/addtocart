import Link from 'next/link'

import { AndroidLogo } from 'phosphor-react'
import ModalCart from './ModalCart'

export function Header() {
  return (
    <header className="bg-gray-200 py-2 px-5 text-white flex justify-between items-center fixed w-full left-0 top-0 z-10">
      <Link href="/">
        <AndroidLogo size={32} color="#a4c639" />
      </Link>
      <nav>
        <ModalCart />
      </nav>
    </header>
  )
}
