import { useSelector, useDispatch } from 'react-redux'

import {
  selectProducts,
  sortByDescription,
  sortByName,
} from '../store/products'

import { useEffect } from 'react'

import { ProductCard } from '../components/ProductCard'

export default function Home() {
  const dispatch = useDispatch()

  const Products = useSelector(selectProducts)

  useEffect(() => {
    dispatch(sortByName())
  }, [])

  return (
    <main className="min-h-screen">
      <section className="max-w-5xl mx-auto text-white">
        <div className="py-14">
          <h1 className="text-3xl border-b pb-2 mb-8">Phones Deal</h1>
          <div>
            <button onClick={() => dispatch(sortByName())}>Sort by Name</button>
            <button onClick={() => dispatch(sortByDescription())}>
              Sort by Description
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {Products.map((product) => {
              return <ProductCard key={product.id} product={product} />
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
