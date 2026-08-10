'use client'

import { FaBan, FaLeaf } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { GiButter } from 'react-icons/gi'
import { MdOutdoorGrill } from 'react-icons/md'
import { FaTruckFast } from 'react-icons/fa6'

const benefits = [
  {
    icon: <FaLeaf size={50} className='text-primary' />,
    title: 'Bahan Premium',
    description: 'Hanya menggunakan bahan berkualitas terbaik',
  },
  {
    icon: <GiButter size={50} className='text-primary' />,
    title: 'Mentega Asli',
    description: 'Menggunakan mentega asli, bukan margarin',
  },
  {
    icon: <MdOutdoorGrill size={50} className='text-primary' />,
    title: 'Dipanggang Fresh',
    description: 'Dibuat setiap hari untuk rasa terbaik',
  },
  {
    icon: <FaBan size={50} className='text-primary' />,
    title: 'Tanpa Pengawet',
    description: 'Aman dikonsumsi seluruh keluarga',
  },
  {
    icon: <FaTruckFast size={50} className='text-primary' />,
    title: 'Pengiriman Cepat',
    description: 'Dikirim fresh ke rumah atau kantor anda',
  },
]

const BenefitSection = () => {
  return (
    <section id='benefit' className='py-26'>
      <div className='container mx-auto px-4'>
        {/* benefits */}
        <div className='flex flex-col items-center justify-center'>
          <motion.h5
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='text-accent mb-2 text-sm font-semibold tracking-widest uppercase'>
            Benefits
          </motion.h5>
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-primary font-heading mb-10 text-center text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl'>
            Keunggulan Produk Kami
          </motion.h1>
          <div className='relative z-30 grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5'>
            {benefits.map((card, index) => (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 * index }}
                key={index}
                className={`${index === 4 ? 'col-span-1 md:col-span-2 xl:col-span-1' : ''}`}>
                <div className='flex min-h-55 flex-col items-center justify-center gap-4 rounded-xl border bg-white px-4 py-8 shadow-md transition duration-500 ease-in-out hover:-translate-y-1 hover:shadow-[10px_10px_5px_rgba(0,0,0,0.8)]'>
                  {card.icon}
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

export default BenefitSection
