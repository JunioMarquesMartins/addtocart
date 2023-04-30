import Link from 'next/link'
import { BatteryEmpty } from 'phosphor-react'

export function Footer() {
  return (
    <footer className="bg-black py-10 px-6">
      <div className="max-w-5xl w-full mx-auto">
        <div className="flex-col flex md:flex-row gap-10 justify-between">
          <div className="text-white">
            <h5 className="max-w-[23rem]">Phones Deal</h5>
            <p>contact:</p>
            <p>+34 663 355 555</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
