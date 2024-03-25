import { useEffect, useState } from 'react'
import { getDishes } from '../service/service'

export function useDishes () {
  const [dishes, setDishes] = useState([])

  useEffect(() => {
    getDishes()
      .then(data => setDishes(data))
      .catch(err => console.log(err))
  }, [])

  return { dishes }
}
