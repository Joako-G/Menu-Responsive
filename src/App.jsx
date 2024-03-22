import { Dishes } from './components/dish/Dishes'
import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
import './index.css'

export function App () {
  return (
    <main className='font-["Stalinist_One"]'>
      <Header />
      <Dishes />
      <Footer />
    </main>
  )
}
