import { useSelector, useDispatch } from 'react-redux'

import {
  selectProductosFiltrados,
  sortByDescription,
  sortByName,
  sortByQuery,
} from '../store/products'

import { useEffect } from 'react'

import { ProductCard } from '../components/ProductCard'
import { Button } from '../components/Button'
import { Funnel } from 'phosphor-react'

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
        <div className="py-14 px-2 md:px-8">
          <h1 className="text-3xl border-b pb-2 mb-6">Phones Deal</h1>
          <div className="flex flex-col md:flex-row gap-2 mb-6 items-center">
            <input
              className="text-white px-2 py-2 bg-transparent border border-gray-600 rounded-md flex-1 w-full"
              onChange={filterByQuey}
              type="text"
              placeholder="Seach"
            />
            <div className="lg:flex">
              <Button
                text="Filter by Name"
                onClick={() => dispatch(sortByName())}
                className="text-sm rounded-md flex gap-2 bg-transparent text-white py-1 px-3 focus:bg-greenDroid-100 hover:bg-greenDroid-100 transition-all disabled:opacity-75 disabled:bg-slate-400 disabled:cursor-not-allowed"
              >
                <Funnel size={20} />
              </Button>

              <Button
                text="Filter by Description"
                onClick={() => dispatch(sortByDescription())}
                className="text-sm rounded-md flex gap-2 bg-transparent text-white py-1 px-3 focus:bg-greenDroid-100 hover:bg-greenDroid-100 transition-all disabled:opacity-75 disabled:bg-slate-400 disabled:cursor-not-allowed"
              >
                <Funnel size={20} />
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-4 py-4 lg:px-0 lg:py-0 lg:grid lg:grid-cols-3 lg:gap-6">
            {products.map((product) => {
              return <ProductCard key={product.id} product={product} />
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
