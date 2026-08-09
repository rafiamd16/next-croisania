'use client'

import { FaArrowRight, FaBan, FaLeaf } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { GiButter } from 'react-icons/gi'
import { MdOutdoorGrill } from 'react-icons/md'
import { FaTruckFast } from 'react-icons/fa6'
import Image from 'next/image'
import { CircleCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'

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

const products = [
  {
    src: '/assets/products/product-1.webp',
    alt: 'Croissant premium',
    // Tall image on the left (Desktop), normal square on mobile
    className: 'col-span-1 lg:row-span-2 h-64 lg:h-full',
  },
  {
    src: '/assets/products/product-2.webp',
    alt: 'Croissant butter',
    // Wide image on top right (Desktop), normal square on mobile
    className: 'col-span-1 h-64 lg:col-span-2 lg:h-full',
  },
  {
    src: '/assets/products/product-3.webp',
    alt: 'Croissant sliced',
    className: 'col-span-1 h-64 lg:col-span-1 lg:h-full',
  },
  {
    src: '/assets/products/product-4.webp',
    alt: 'Croissant almond',
    className: 'col-span-1 h-64 lg:col-span-1 lg:h-full',
  },
]

const features = [
  'Lapisan renyah sempurna',
  'Tekstur lembut dan berongga',
  'Rasa gurih dan aroma butter yang khas',
  'Cocok untuk sarapan & camilan',
  'Tersedia dalam berbagai varian rasa',
]

const ProductSection = () => {
  return (
    <section id='benefit' className='py-24'>
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
            initial={{ opacity: 0, y: -100 }}
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
                <div className='flex min-h-55 flex-col items-center justify-center gap-4 rounded-xl border bg-white px-4 py-8 shadow-lg transition duration-500 ease-in-out hover:-translate-y-1 hover:shadow-[10px_10px_5px_rgba(0,0,0,0.8)]'>
                  {card.icon}
                  <h3 className='text-center font-semibold'>{card.title}</h3>
                  <p className='text-center text-sm'>{card.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* product */}
        <div id='product' className='flex flex-col items-center gap-12 pt-24 lg:flex-row lg:gap-16'>
          <div className='w-full lg:w-2/5'>
            <motion.h5
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className='text-accent mb-2 text-center text-sm font-semibold tracking-widest uppercase sm:text-left'>
              Produk Kami
            </motion.h5>
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='text-primary font-heading mb-6 text-center text-3xl leading-tight font-bold sm:text-left sm:text-4xl lg:text-5xl'>
              Kroisan yang Akan Anda Cintai
            </motion.h1>
            <ul className='mb-8 space-y-4'>
              {features.map((feature, index) => (
                <motion.li
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 * index }}
                  key={index}
                  className='flex items-center gap-3'>
                  <CircleCheck className='text-accent h-6 w-6 shrink-0' />
                  <span className='text-primary text-base font-medium'>{feature}</span>
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}>
              <Button
                size={'lg'}
                className='bg-primary active:ring-primary h-12 rounded-full px-8 text-white active:ring-2 active:ring-offset-2'>
                Pesan Sekarang
                <FaArrowRight className='ml-2' />
              </Button>
            </motion.div>
          </div>

          {/* image grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className='w-full lg:flex-1'>
            <div className='grid grid-cols-2 gap-4 lg:h-137.5 lg:grid-cols-3 lg:grid-rows-2'>
              {products.map((product, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl ${product.className}`}>
                  <Image
                    src={product.src}
                    alt={product.alt}
                    fill
                    className='object-cover transition-transform duration-500 ease-in-out group-hover:scale-110'
                    sizes='(max-width: 1024px) 50vw, 33vw'
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ProductSection
