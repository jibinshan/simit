import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Reserve() {
  return (
    <section className='w-full h-full flex flex-col md:flex-row'>
          <div className='w-full md:w-1/2 flex justify-center items-center bg-[#58100e] pt-16'>
            <Image
            src='/images/home/reserve.png'
            width={287}
            height={510}
            alt='reserve'
            className='md:w-[450px] max-h-[500px] object-cover rounded-t-full'
            />
          </div>
          <div className='relative w-full md:w-1/2 pt-16 px-4 md:px-6'
          style={{
            backgroundImage: `url(/images/home/reservenew/red.png)`,
            backgroundRepeat:"no-repeat",
            backgroundSize: "cover",
          }}
          >
            <div className='w-full h-full bg-[#f7f4ed] rounded-t-full py-12 px-12 flex flex-col justify-center items-center gap-7'>
                <p className='text-[#76101E] font-playfair text-6xl font-[600] capitalize text-center'>Reserve Table</p>
                <p className='font-inter text-black max-w-[400px] text-center'>Experience the charm of Arabian hospitality. Book your table now for a memorable dining experience filled with flavorful dishes and warm ambiance.</p>
                <Button className='bg-[#76101E] px-6 py-7 rounded-full flex justify-center items-center gap-1'>
                    <span className='font-playfair text-lg'>Book Now</span>
                    <ArrowRight className='w-5 h-5 mt-1'/>
                </Button>
            </div>
          </div>
    </section>
  )
}

export default Reserve