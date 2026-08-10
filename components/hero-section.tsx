'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import cs1 from '@/public/assets/costumers/cs-1.jpg'
import cs2 from '@/public/assets/costumers/cs-2.jpg'
import cs3 from '@/public/assets/costumers/cs-3.jpg'
import cs4 from '@/public/assets/costumers/cs-4.jpg'
import { FaLeaf } from 'react-icons/fa'

const HeroSection = () => {
  return (
    <section
      id='home'
      className={`relative min-h-screen bg-[url(/assets/hero.webp)] bg-cover bg-center pt-36 pb-16 sm:pt-44 lg:pb-80`}>
      {/* overlay */}
      <div className='absolute top-0 right-0 left-0 z-10 block h-full w-full bg-neutral-50/25 sm:hidden'></div>
      <div className='relative z-20 container mx-auto px-4'>
        <div className='w-full'>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='mb-4'>
            <Badge className='bg-cream text-accent py-3 font-semibold'>
              <FaLeaf />
              <span className='text-sm uppercase md:text-base'>freshly baked everyday</span>
            </Badge>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            <h1 className='font-heading w-full text-4xl leading-tight font-bold text-shadow-2xs sm:text-5xl lg:w-1/2 xl:text-7xl'>
              <span>Kroisan Premium,</span>
              <span className='text-primary block'>Renyah di Luar,</span>
              <span className='text-primary block'>Lembut di Dalam.</span>
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}>
            <p className='p-shadow mt-4 max-w-96 leading-relaxed'>
              Dibuat dari bahan pilihan terbaik dengan mentega asli, tanpa pengawet, dan selalu
              segar setiap hari untuk momen istimewa anda.
            </p>
          </motion.div>
          <div className='mt-10 flex flex-col gap-5 lg:flex-row lg:items-center'>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}>
              <Button size={'lg'} className='h-13 w-max px-8 shadow-md lg:w-auto'>
                Pesan Sekarang
                <ArrowRight />
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className='flex items-center'>
              <div className='rounded-full bg-white p-0.5'>
                <Image
                  src={cs1}
                  alt='image'
                  width={32}
                  height={32}
                  className='size-8 rounded-full object-cover'
                />
              </div>
              <div className='-translate-x-4 rounded-full bg-white p-0.5'>
                <Image
                  src={cs2}
                  alt='image'
                  width={32}
                  height={32}
                  className='size-8 rounded-full object-cover'
                />
              </div>
              <div className='-translate-x-8 rounded-full bg-white p-0.5'>
                <Image
                  src={cs3}
                  alt='image'
                  width={32}
                  height={32}
                  className='size-8 rounded-full object-cover'
                />
              </div>
              <div className='-translate-x-12 rounded-full bg-white p-0.5'>
                <Image
                  src={cs4}
                  alt='image'
                  width={32}
                  height={32}
                  className='size-8 rounded-full object-cover'
                />
              </div>
              <span className='p-shadow -translate-x-10 text-sm md:text-base'>
                5000+ Pelanggan Puas
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
