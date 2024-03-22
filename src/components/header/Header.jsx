import icono from '../../assets/logo.jpeg'
import './Header.css'

export function Header () {
  return (
    <header>
      <div className='grid sm:grid-cols-1 justify-items-center md:grid-cols-[1fr_4fr_1fr] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
        <div className='md:justify-self-start p-5'>
          <img className='rounded-full w-16 md:w-32 bg-white' src={icono} alt='' />
        </div>
        <div className='md:justify-self-start m-auto md:content-center'>
          <h2 className='text-4xl text-primary font-medium'>EL TAMAL JUJEÑO</h2>
        </div>

      </div>
    </header>
  )
}
