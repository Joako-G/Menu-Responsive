import { Gps, Instagram, Whatsapp } from '../icon/Icon'

export function Footer () {
  return (
    <div className='grid justify-items-center md:justify-items-stretch md:grid-cols-[1fr_1fr_1.5fr] mt-5 p-2 text-2xl text-primary bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500'>
      <div className='grid md:grid-rows-[1fr_50px]'>
        <div>
          <h1>Direccion</h1>
          <p className='text-xl'>Av. Carlos Snopek N°1233</p>
        </div>
        <Gps />
      </div>
      <div className='grid md:grid-rows-[1fr_50px] w-52'>
        <h1>Redes Sociales</h1>
        <a className='flex w-10 h-10' target='_blank' href='https://www.instagram.com/tamaljujuy/' rel='noopener noreferrer'><Instagram /></a>
      </div>

      <div className='grid md:grid-rows-[0.9fr_50px]'>
        <h1>Contacto</h1>
        <div className='flex items-center md:items-start h-auto'>
          <Whatsapp />
          <p className='text-sm md:text-2xl ml-2 items-center'>388 - 4095206 (Solo Whatsapp)</p>
        </div>
      </div>
    </div>
  )
}

/**
 *
 * <div className='grid grid-cols-[1fr_1fr_2fr] md:grid-rows-[1fr_80px] lg:grid-rows-[1fr_65px] mt-5 p-2 text-2xl text-primary bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500'>
      <div className='pb-3'>
        <h1>Direccion</h1>
        <p className='text-xl'>Av. Carlos Snopek N°1233</p>

      </div>
      <div className='pb-3'>
        <h1>Redes Sociales</h1>

      </div>
      <div className='pb-3'>
        <h1>Contacto</h1>
      </div>

      <div className='w-10 h-6 text-center flex justify-center'>
        <Gps />
      </div>

      <div className='text-center flex justify-center'>
        <a className='md:p-2' target='_blank' href='https://www.instagram.com/tamaljujuy/' rel='noopener noreferrer'><Instagram /></a>
      </div>

      <div className='flex md:justify-start'>
        <div className='self-center md:self-auto md:mt-2'><Whatsapp /></div>
        <p className='text-sm md:text-2xl ml-2'>388 - 4095206 (Solo Whatsapp)</p>
      </div>
    </div>

 */
