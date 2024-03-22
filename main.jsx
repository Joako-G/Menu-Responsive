import { createRoot } from 'react-dom/client'
import { App } from './src/App'
import { NextUIProvider } from '@nextui-org/react'

const root = createRoot(document.getElementById('app'))

root.render(
  <NextUIProvider>
    <main className='dark text-foreground bg-background'>
      <App />
    </main>
  </NextUIProvider>
)
