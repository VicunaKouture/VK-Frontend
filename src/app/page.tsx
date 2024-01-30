import Image from 'next/image'
import Header from '@/Components/Header'
import Hero from '@/Components/Hero'
import DesignsSection from './designs/DesignsSection'

export default function Home() {
  return (
    <div>
      <div style={{ background: '#C2EFD4', paddingTop: '50px' }}>
    <Header/>
    <Hero />
</div>
<DesignsSection />
    </div>
  )
}
