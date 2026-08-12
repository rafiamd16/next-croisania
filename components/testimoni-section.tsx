'use client'

import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'
import wowo1 from '@/public/assets/testimonials/wowo-1.jpg'
import owi from '@/public/assets/testimonials/owi-1.jpg'
import gibran from '@/public/assets/testimonials/gibran.jpg'
import HoverImage from '@/components/hover-image'
import { Avatar, AvatarImage } from '@/components/ui/avatar'

const testimonials = [
  {
    name: 'Wowo',
    image: wowo1.src,
    quote:
      'Kroisannya enak banget! Renyah di luar, lembut di dalam. Rasa butter-nya juara! Pasti repeat order lagi.',
    address: 'Jakarta',
    rate: <FaStar className='text-yellow-400' />,
    message: 'Hidup Jokowiiii!',
  },
  {
    name: 'Pria Solo',
    image: owi.src,
    quote: 'Pengiriman cepat dan selalu fresh. Cocok banget buat sarapan keluarga setiap hari.',
    address: 'Solo',
    rate: <FaStar className='text-yellow-400' />,
    message: 'Saya akan lawan!',
  },
  {
    name: 'Gibran',
    image: gibran.src,
    quote: 'Varian rasanya banyak dan semuanya enak. Anak-anak juga suka banget!',
    address: 'Solo',
    rate: <FaStar className='text-yellow-400' />,
    message: 'Akan terbuka 19 juta lapangan pekerjaan!',
  },
]

const TestimoniSection = () => {
  return (
    <section id='testimoni' className='py-26'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col items-center justify-center'>
          <motion.h5
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-accent mb-2 text-sm font-semibold tracking-widest uppercase'>
            testimoni
          </motion.h5>
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='text-primary font-heading mb-10 text-center text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl'>
            Apa Kata Beliau?
          </motion.h1>

          <div className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3'>
            {testimonials.map((card) => (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 * testimonials.indexOf(card) }}
                key={card.name}
                className={`flex flex-col rounded-xl border bg-white px-8 py-8 shadow-md transition duration-500 ease-in-out hover:-translate-y-1 hover:shadow-[10px_10px_5px_rgba(0,0,0,0.8)] ${card.name === 'Lilbah' ? 'col-span-1 md:col-span-2 xl:col-span-1' : ''} `}>
                <div className='mb-5 flex flex-1 flex-col items-center gap-5'>
                  {/* rate */}
                  <div className='flex items-center gap-1'>
                    {card.rate}
                    {card.rate}
                    {card.rate}
                    {card.rate}
                    {card.rate}
                  </div>

                  {/* message */}
                  <p className='text-muted-foreground text-center text-sm leading-relaxed italic md:text-lg'>
                    &quot;{card.quote}&quot;
                  </p>
                </div>

                {/* image */}
                <HoverImage message={card.message}>
                  <div className='mt-3 flex items-center justify-center gap-4'>
                    <Avatar className={'size-15'}>
                      <AvatarImage src={card.image} />
                    </Avatar>
                    <div className='flex flex-col'>
                      <span className='font-semibold'>{card.name}</span>
                      <span className='text-muted-foreground text-left text-xs'>
                        {card.address}
                      </span>
                    </div>
                  </div>
                </HoverImage>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimoniSection
