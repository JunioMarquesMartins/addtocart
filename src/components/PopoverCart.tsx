import { Popover, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeToCart, selectCart } from '../store/cart'
import { ShoppingCart, Trash } from 'phosphor-react'
import Image from 'next/image'
import { formatPrice, subTotal } from '../utils/priceFormat'

export function PopoverCart() {
  const Cart = useSelector(selectCart)

  const total = formatPrice(
    Cart.reduce((total, product) => {
      return total + product.price * product.amount
    }, 0),
  )

  const dispatch = useDispatch()

  return (
    <div className=" top-16 w-full max-w-sm px-4">
      <Popover className="relative">
        {({ open }) => (
          <>
            {Cart.length > 0 && (
              <Popover.Button>
                <div className="relative">
                  <span className="absolute top-0 right-[-6px] bg-white text-gray-100 rounded-full text-[.7rem] w-[18px] h-[18px] flex items-center justify-center">
                    <strong>{Cart?.length}</strong>
                  </span>
                  <ShoppingCart size={32} />
                </div>
              </Popover.Button>
            )}

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute right-1/2 z-10 mt-3 w-screen max-w-lg -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative bg-white p-7 text-gray-100">
                    <table className="w-full">
                      <thead>
                        <tr className="text-left py-3">
                          <th />
                          <th>NAME</th>
                          <th>AMOUNT</th>
                          <th>PRICE</th>
                          <th>SUBTOTAL</th>
                          <th />
                        </tr>
                      </thead>
                      <tbody>
                        {Cart.map((product) => {
                          return (
                            <tr key={product.id} className="border-b-2">
                              <td>
                                <Image
                                  width={100}
                                  height={100}
                                  src={`/${product.image}`}
                                  alt=""
                                />
                              </td>
                              <td>
                                <p>{product.name}</p>
                              </td>
                              <td>{product.amount}</td>
                              <td>
                                <strong>{formatPrice(product.price)}</strong>
                              </td>
                              <td>
                                <strong>
                                  {formatPrice(
                                    subTotal(product.price, product.amount),
                                  )}
                                </strong>
                              </td>
                              <td>
                                <button
                                  onClick={() =>
                                    dispatch(removeToCart(product.id))
                                  }
                                >
                                  <Trash size={20} />
                                </button>
                              </td>
                            </tr>
                          )
                        })}
                        <tr>
                          <td>
                            Total: <strong>{total}</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}
