'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { motion } from 'framer-motion'
import { FaArrowRight, FaPhoneAlt } from 'react-icons/fa'
import { IoMail, IoPerson } from 'react-icons/io5'

const ContactSection = () => {
  return (
    <section id='contact' className='bg-white py-26'>
      <div className='container mx-auto'>
        <motion.h5
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-accent mb-2 px-4 text-center text-sm font-semibold tracking-widest uppercase'>
          kontak kami
        </motion.h5>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='text-primary font-heading mb-10 px-4 text-center text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl'>
          Kami Siap Mendengar Anda.
        </motion.h1>

        <div className='flex flex-wrap items-stretch'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='w-full px-4 lg:w-1/2'>
            <div className='h-full overflow-hidden rounded-md'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63121.20732982827!2d116.07902974955813!3d-8.588743762650658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdbf591a7f5ec7%3A0x830b122bdd101dc5!2sKota%20Mataram%2C%20Nusa%20Tenggara%20Bar.!5e0!3m2!1sid!2sid!4v1786451244829!5m2!1sid!2sid'
                allowFullScreen
                loading='lazy'
                referrerPolicy='strict-origin-when-cross-origin'
                className='h-full min-h-112.5 w-full'></iframe>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className='mt-8 w-full px-4 lg:mt-0 lg:w-1/2'>
            <div className='h-full rounded-xl border bg-white p-6 shadow-md lg:p-8'>
              <h2 className='text-primary font-heading font-semi-bold mb-5 text-lg md:text-3xl'>
                Kirim Pesan
              </h2>
              <form className='space-y-4'>
                <div className='grid grid-cols-1 gap-2 md:grid-cols-2'>
                  <div className='relative'>
                    <Input placeholder='Nama Lengkap' className='h-12 pl-10' />
                    <IoPerson className='absolute top-1/2 left-3 -translate-y-1/2' />
                  </div>
                  <div className='relative'>
                    <Input type='email' placeholder='Email' className='h-12 pl-10' />
                    <IoMail className='absolute top-1/2 left-3 -translate-y-1/2' />
                  </div>
                  <div className='relative md:col-span-2'>
                    <Input placeholder='No. Telepon' className='h-12 pl-10' />
                    <FaPhoneAlt className='absolute top-1/2 left-3 -translate-y-1/2' />
                  </div>
                  <div className='md:col-span-2'>
                    <Textarea placeholder='Pesan' className='h-25' />
                  </div>
                </div>
                <Button size={'lg'} className={'w-full'}>
                  Kirim Pesan <FaArrowRight />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
