'use client'

import { useCounterStore } from '@/store/counter-store'

export const Counter = () => {
  const { count, increment, decrement, reset } = useCounterStore()

  return (
    <div className="p-6 border rounded-lg shadow-sm bg-white">
      <h2 className="text-2xl font-semibold mb-4">Zustand Counter</h2>
      <div className="text-4xl font-bold mb-6 text-center text-primary">
        {count}
      </div>
      <div className="flex gap-3 justify-center">
        <button
          onClick={increment}
          className="px-4 py-2 bg-success text-white rounded hover:bg-success-600 transition-colors"
        >
          +
        </button>
        <button
          onClick={decrement}
          className="px-4 py-2 bg-error text-white rounded hover:bg-error-600 transition-colors"
        >
          -
        </button>
        <button
          onClick={reset}
          className="px-4 py-2 bg-primary text-dark rounded hover:bg-primary-600 transition-colors"
        >
          Reset
        </button>
      </div>
    </div>
  )
}