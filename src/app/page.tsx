import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Local } from './components/Local'
import { Navbar } from './components/Navbar'
import { Requisitos } from './components/Requisitos'
import { Sobre } from './components/Sobre'
import WhatsAppButton from './components/WppButton'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Sobre />
      <Requisitos />
      <Faq />
      <Local />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
