import { Gps, Instagram, Whatsapp } from '../icon/Icon'

export function Footer () {
  return (
    <div className='text-primary text-2xl grid grid-cols-3 md:grid-rows-[1fr_80px] lg:grid-rows-[1fr_65px] mt-5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500'>
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

      <div className='w-10 h-6 text-center flex justify-center'>
        <a className=' ' target='_blank' href='https://www.instagram.com/tamaljujuy/' rel='noopener noreferrer'><Instagram /></a>
      </div>

      <div className='flex md:justify-start'>
        <div className='self-center md:self-auto md:mt-2'><Whatsapp /></div>
        <p className='ml-5'>388 - 4095206 (Solo Whatsapp)</p>
      </div>

    </div>
  )
}

/**
 * <div className='text-primary text-2xl grid grid-cols-3 md:grid-rows-[1fr_1fr] xl:grid-rows-[1fr_50px] mt-5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500'>
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

      <div className='w-10 h-6 text-center flex justify-center'><Gps /></div>
      <div className='w-10 h-6 text-center flex justify-center'>
        <a className=' ' target='_blank' href='https://www.instagram.com/tamaljujuy/' rel='noopener noreferrer'><Instagram /></a>
      </div>
      <div className=' flex justify-start'><Whatsapp />
        <p className='ml-5'>388 - 4095206 (Solo Whatsapp)</p>
      </div>

 */
