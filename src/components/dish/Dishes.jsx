import { Dish } from './Dish'
import { useDishes } from '../../hooks/useDeshes'

export function Dishes () {
  const { dishes } = useDishes()

  return (
    <div className=''>
      <h1 className='flex justify-center text-4xl  md:text-5xl mt-5 text-primary'>Sabado y Domingo</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center pt-10'>
        {
        dishes.map((dish) => (
          <Dish key={dish.id} dish={dish} />
        ))
      }
      </div>
    </div>
  )
}
