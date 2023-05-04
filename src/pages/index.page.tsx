import { useSelector, useDispatch } from 'react-redux'

import {
  selectProductosFiltrados,
  sortByDescription,
  sortByName,
  sortByQuery,
} from '../store/products'

import { useEffect } from 'react'

import { ProductCard } from '../components/ProductCard'

export default function Home() {
  const dispatch = useDispatch()

  const products = useSelector(selectProductosFiltrados)

  useEffect(() => {
    dispatch(sortByName())
  }, [])

  const filterByQuey = (event) => {
    dispatch(sortByQuery(event.target.value))
  }

  return (
    <main className="min-h-screen">
      <section className="max-w-5xl py-8 mx-auto text-white">
        <div className="py-14">
          <h1 className="text-3xl border-b pb-2 mb-6">Phones Deal</h1>
          <div className="flex gap-2 mb-6">
            <input
              className="text-white px-2 bg-transparent border border-gray-600 rounded-md"
              onChange={filterByQuey}
              type="text"
              placeholder="Seach"
            />
            <button
              className="flex gap-2 bg-blue-400 text-white py-1 px-2 hover:bg-blue-500 transition-all disabled:opacity-75 disabled:bg-slate-400 disabled:cursor-not-allowed"
              onClick={() => dispatch(sortByName())}
            >
              Sort by Name
            </button>
            <button
              className="flex gap-2 bg-blue-400 text-white py-1 px-2 hover:bg-blue-500 transition-all disabled:opacity-75 disabled:bg-slate-400 disabled:cursor-not-allowed"
              onClick={() => dispatch(sortByDescription())}
            >
              Sort by Description
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {products.map((product) => {
              return <ProductCard key={product.id} product={product} />
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
