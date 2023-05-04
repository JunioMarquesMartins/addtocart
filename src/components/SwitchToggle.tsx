import { useState } from 'react'
import { Switch } from '@headlessui/react'
import { useDispatch } from 'react-redux'
import { disabledProduct } from '../store/products'

export function SwitchToggle({ prodId }) {
  const dispatch = useDispatch()
  const [enabled, setEnabled] = useState(false)

  const disabledProd = () => {
    if (!enabled) {
      dispatch(disabledProduct(prodId))
    }
  }

  return (
    <div>
      <Switch
        checked={enabled}
        onClick={disabledProd}
        onChange={setEnabled}
        className={`${enabled ? 'bg-blue-500' : 'bg-gray-500'}
          relative inline-flex h-[30px] w-[64px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none translate-y-[-2px] inline-block h-[30px] w-[30px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  )
}
