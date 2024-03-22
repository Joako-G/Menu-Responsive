import { Card, CardHeader, CardBody, Image, autocomplete } from '@nextui-org/react'

export function Dish ({ dish }) {
  return (
    <Card className='bg-gray-800 hover:scale-110 pb-4 m-4 w-80 shadow-lg shadow-amber-400/100 xl:w-72'>
      <CardBody className='overflow-visible p-0'>
        <Image
          isBlurred
          alt='Card background'
          className='object-cover rounded-xl'
          src={dish.img}
          width={autocomplete}
        />
      </CardBody>
      <CardHeader className='p-4 flex-col items-center'>
        <h4 className='font-bold text-large'>{dish.name}</h4>
        <p className='text-tiny uppercase font-bold'>Precio</p>
        <p className='text-default-500'>{dish.price}</p>

      </CardHeader>

    </Card>
  )
}
