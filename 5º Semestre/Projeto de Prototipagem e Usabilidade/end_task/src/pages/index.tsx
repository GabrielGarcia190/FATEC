import Image from 'next/image'
import { Inter } from 'next/font/google'
import { CaretDown, CaretLeft } from 'phosphor-react'
import Scroll from '@/components/Scrooll'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div className='bg-[#F8F4F4] w-screen h-screen flex items-center justify-center'>
      <div className='bg-[#FDFFFF] h-[90%] w-[90%] shadow-lg rounded-xl'>
          <div className='flex flex-row p-8 items-center'>
          <CaretLeft size={35} color="#000" />
            <p className='font-[Montserrat] text-black md:text-3xl ml-4 sm:text-2xl'>Registro de Ponto</p>

            
          </div>
          <Scroll >

              
            </Scroll>
      </div>
   </div>
  )
}
