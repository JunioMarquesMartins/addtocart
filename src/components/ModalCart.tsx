import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeAllProducts, removeToCart, selectCart } from '../store/cart'
import { ShoppingCart, Trash } from 'phosphor-react'
import Image from 'next/image'
import { formatPrice, subTotal } from '../utils/priceFormat'
import { resetProducts } from '../store/products'

export default function ModalCart() {
  const dispatch = useDispatch()
  const Cart = useSelector(selectCart)
  const [isOpen, setIsOpen] = useState(false)

  const total = formatPrice(
    Cart.reduce((total, product) => {
      if (!product.disabled) {
        total += product.price * product.amount
      }
      return total
    }, 0),
  )

  const cartIsActive = Cart.length > 0

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  function cartAutoClose() {
    if (!cartIsActive) closeModal()
  }
  useEffect(() => {
    cartAutoClose()
  }, [cartIsActive])

  const deletedAllProducts = () => {
    dispatch(removeAllProducts())
    dispatch(resetProducts())
  }

  return (
    <>
      {Cart.length > 0 && (
        <button type="button" onClick={openModal}>
          <div className="relative">
            <span className="absolute top-0 right-[-6px] bg-greenDroid-100 text-gray-100 rounded-full text-[.7rem] w-[18px] h-[18px] flex items-center justify-center">
              <strong>{Cart?.length}</strong>
            </span>
            <ShoppingCart size={32} />
          </div>
        </button>
      )}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Cart
                  </Dialog.Title>
                  <div className="mt-2">
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
                            <tr
                              key={product.id}
                              className={`${
                                product.disabled ? 'opacity-70 bg-red-200' : ''
                              } border-b-2`}
                            >
                              <td>
                                <Image
                                  width={100}
                                  height={100}
                                  src={`/${product.image}`}
                                  alt=""
                                />
                              </td>
                              <td>
                                {product.disabled && (
                                  <strong className="text-red-800">
                                    Product Disabled
                                  </strong>
                                )}
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

                  <div className="mt-4 text-right">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-400 px-4 py-2 text-sm font-medium text-gray-100 hover:bg-red-500 focus:outline-none focus-visible:ring-2 focus-visible:bg-red-600 focus-visible:ring-offset-2"
                      onClick={deletedAllProducts}
                    >
                      Delete all
                      <Trash size={20} />
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
