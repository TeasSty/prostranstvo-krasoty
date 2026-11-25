import { Book } from './components/Book'
import { Crafts } from './components/Crafts'
import { DoubleShift } from './components/DoubleShift'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Learn } from './components/Learn'
import { Works } from './components/Works'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Crafts />
        <DoubleShift />
        <Works />
        <Learn />
        <Book />
      </main>
      <Footer />
    </>
  )
}
