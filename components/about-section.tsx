'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import about from '@/public/assets/about.webp'
import { FaLeaf } from 'react-icons/fa'
import { CiLight } from 'react-icons/ci'
import { GiCroissant, GiLovers } from 'react-icons/gi'

const filosophy = [
  {
    icon: <FaLeaf size={50} className='text-primary' />,
    title: 'Kualitas',
    description: 'Kami hanya menggunakan kualitas terbaik',
  },
  {
    icon: <CiLight size={50} className='text-primary' />,
    title: 'Fresh Every Day',
    description: 'Dipanggang setiap hari untuk memastikan kesegaran di setiap gigitan',
  },
  {
    icon: <GiCroissant size={50} className='text-primary' />,
    title: 'Craftsmanship',
    description: 'Dibuat dengan teknik tradisional dan perhatian pada setiap detail',
  },
  {
    icon: <GiLovers size={50} className='text-primary' />,
    title: 'Passion',
    description: 'Kami mengerjakan setiap produk dengan cinta dan dedikasi penuh',
  },
]

const AboutSection = () => {
  return (
    <section id='about' className='bg-cream py-26'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap'>
          <div className='w-full px-4 lg:w-1/2'>
            <motion.h5
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='text-accent mb-2 text-sm font-semibold tracking-widest uppercase'>
              Tentang Kami
            </motion.h5>
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className='text-primary font-heading max-w-lg text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl'>
              Bagaimana Semuanya Bermula
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className='py-4'>
              <span className='bg-accent block h-1 w-14'></span>
            </motion.div>
            <div className='space-y-2'>
              <motion.p
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className='max-w-lg leading-relaxed'>
                Croisania berawal dari dapur kecil dengan mimpi besar: menciptakan croissant
                berkualitas premium yang dibuat dengan hati dan bahan terbaik.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className='max-w-lg leading-relaxed'>
                Bermula dari kecintaan pada seni memanggang ala Prancis, kami bereksperimen tanpa
                henti untuk menemukan tekstur sempurna—renyah di luar, lembut di dalam.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className='max-w-lg leading-relaxed'>
                Hari ini, kami bangga bisa menjadi bagian dari momen spesial Anda, setiap hari.
              </motion.p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='mt-10 w-full px-4 lg:mt-0 lg:w-1/2'>
            <Image
              src={about.src}
              alt='image'
              width={500}
              height={500}
              className='w-full max-w-full rounded-xl object-cover'
            />
          </motion.div>
        </div>

        <div className='mt-26 flex flex-col items-center justify-center px-4'>
          <motion.h5
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-accent mb-2 text-sm font-semibold tracking-widest uppercase'>
            filosofi & nilai kami
          </motion.h5>
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='text-primary font-heading mb-10 text-center text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl'>
            Apa yang Kami Percaya
          </motion.h1>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4'>
            {filosophy.map((card) => (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 * filosophy.indexOf(card) }}
                key={card.title}>
                <div className='flex min-h-full flex-col items-center justify-center gap-4 rounded-xl border bg-white px-4 py-8 shadow-md transition duration-500 ease-in-out hover:-translate-y-1 hover:shadow-[10px_10px_5px_rgba(0,0,0,0.8)]'>
                  <div className='border-cream rounded-full border-4 p-4'>{card.icon}</div>
                  <h3 className='text-center font-semibold'>{card.title}</h3>
                  <p className='text-center text-sm'>{card.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
