import { Gps, Instagram, Whatsapp } from '../icon/Icon'

export function Footer () {
  return (
    <div className='grid justify-items-center gap-5  md:grid-cols-[1fr_0.5fr_1.5fr] mt-5 p-2 text-2xl text-primary bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500'>
      <div className='grid md:grid-rows-[1fr_50px] w-60 md:w-auto'>

        <div>
          <h1>Dirección</h1>
          <p className='text-xl'>Av. Carlos Snopek N°1233 - Alto Comedero</p>
        </div>
        <a target='_blank' href='https://maps.app.goo.gl/3f3GYh3RFjtzgJeL8' rel='noreferrer'><Gps /></a>

      </div>
      <div className='grid md:grid-rows-[1fr_50px] w-60 md:w-40 lg:w-auto'>
        <h1>Redes Sociales</h1>
        <a className='flex w-10 h-10' target='_blank' href='https://www.instagram.com/tamaljujuy/' rel='noopener noreferrer'><Instagram /></a>
      </div>

      <div className='grid md:grid-rows-[1fr_60px] w-60 md:w-auto'>
        <h1>Contacto</h1>
        <div className='flex items-center md:items-start'>
          <Whatsapp />
          <p className='text-sm md:text-lg'>388 - 4095206 (Solo Whatsapp)</p>
        </div>
      </div>
    </div>
  )
}
