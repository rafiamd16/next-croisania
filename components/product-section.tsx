'use client'

import { FaArrowRight } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, CircleCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import special from '@/public/assets/products/special.webp'
import { IoShieldCheckmark } from 'react-icons/io5'

const products = [
  {
    src: '/assets/products/product-1.webp',
    alt: 'Croissant premium',
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

const features2 = [
  'Isi 6 pcs kroisan premium (bebas varian)',
  'Freshly baked setiap hari',
  'Gratis packing eksklusif',
  'Pengiriman cepat dan aman',
]

const ProductSection = () => {
  return (
    <section id='product' className='py-26'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col items-center gap-12 lg:flex-row lg:gap-16'>
          <div className='w-full lg:w-2/5'>
            <motion.h5
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='text-accent mb-2 text-sm font-semibold tracking-widest uppercase'>
              Produk Kami
            </motion.h5>
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className='text-primary font-heading mb-6 text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl'>
              Kroisan yang Akan Anda Cintai
            </motion.h1>
            <ul className='mb-8 space-y-4'>
              {features.map((feature, index) => (
                <motion.li
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 * index }}
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
              transition={{ duration: 0.5, delay: 0.8 }}>
              <Button
                size={'lg'}
                className='bg-primary active:ring-primary h-12 rounded-full px-8 text-white active:ring-2 active:ring-offset-2'>
                Lihat Semua Produk
                <FaArrowRight className='ml-2' />
              </Button>
            </motion.div>
          </div>

          {/* image grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='w-full lg:flex-1'>
            <div className='grid grid-cols-2 gap-4 lg:h-137.5 lg:grid-cols-3 lg:grid-rows-2'>
              {products.map((product) => (
                <div
                  key={product.alt}
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

        {/* Penawaran */}
        <div className='mt-24 flex flex-col-reverse gap-5 lg:flex-row'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='w-full lg:w-1/2'>
            <Image
              src={special.src}
              width={600}
              height={600}
              className='mx-auto max-w-full object-cover lg:mx-0'
              alt='image'
            />
          </motion.div>

          <div className='w-full lg:w-1/2'>
            <motion.h5
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='text-accent mb-2 text-sm font-semibold tracking-widest uppercase'>
              Penawaran Special
            </motion.h5>
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className='text-primary font-heading mb-3 text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl'>
              Paket Hemat Kroisan
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className='mb-5 text-sm'>
              Nikmati kroisan premium dengan harga lebih hemat.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className='bg-cream mb-5 flex max-w-md items-center justify-center gap-4 rounded-xl p-4'>
              <span className='text-primary text-xs font-semibold line-through sm:text-sm'>
                Rp. 75.000
              </span>
              <h1 className='font-heading text-lg font-bold sm:text-4xl'>Rp. 50.000</h1>
              <span className='bg-accent/30 text-primary rounded-full px-2 py-1 text-xs font-semibold uppercase sm:text-sm'>
                hemat 27%
              </span>
            </motion.div>

            <ul className='mb-8 space-y-4'>
              {features2.map((feature) => (
                <motion.li
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 * features2.indexOf(feature) }}
                  key={feature}
                  className='flex items-center gap-3'>
                  <CircleCheck className='text-accent h-6 w-6 shrink-0' />
                  <span className='text-primary text-base font-medium'>{feature}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className='flex flex-col gap-5 sm:flex-row'>
              <Button size={'lg'} className='h-13 w-max px-8 shadow-md lg:w-auto'>
                Pesan Sekarang
                <ArrowRight />
              </Button>
              <div className='flex items-center gap-4'>
                <IoShieldCheckmark size={46} className='text-accent' />
                <span className='text-sm'>
                  <span className='text-primary text-base'>Garansi Uang Kembali</span> <br />
                  jika tidak puas
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductSection
