import Feedback from '@/Components/Feedback'
import Footer from '@/Components/Footer'

import Head from 'next/head'
import Image from 'next/image'




export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 w-full bg-white " >
     
        
       
        <Feedback/>
        <Footer/>
        

    </main>
  )
}
