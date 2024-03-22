import { useEffect, useState } from 'react'
import { Dish } from './Dish'
import { getDishes } from '../../service/service'

export function Dishes () {
  const [dishes, setDishes] = useState([])

  useEffect(() => {
    getDishes()
      .then(data => setDishes(data))
      .catch(err => console.log(err))
  }, [])
  return (
    <div className='justify-items-center pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {
        dishes.map((dish) => (
          <Dish key={dish.id} dish={dish} />
        ))
      }
    </div>
  )
}
