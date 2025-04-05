import React from 'react'
import Products from './Components/Products';


const App = () => {
  const products = [
    {
      id: 1,
      title: "Nirma",
      amount: 100,
      date: new Date(2025, 8, 10)
    },
    {
      id: 2,
      title: "Surf excel",
      amount: 200,
      date: new Date(2025, 10, 2)
    },
    {
      id: 3,
      title: "Tide",
      amount: 150,
      date: new Date(2025, 12, 28)
    },
    {
      id: 4,
      title: "Ghadi",
      amount: 80,
      date: new Date(2025, 1, 14)
    },
  ]
  return (
    <div>
      <div className='mt-9'>
        <Products items={products}/>
      </div>
    </div>
  )
}

export default App