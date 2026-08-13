'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { motion } from 'framer-motion'

const faqs = [
  {
    question: 'Apakah kroisan menggunakan bahan pengawet?',
    answer:
      'Tidak. Semua kroisan kami dibuat segar (freshly baked) setiap hari menggunakan bahan-bahan alami berkualitas tanpa menggunakan bahan pengawet sintetis.',
    value: 'bahan',
  },
  {
    question: 'Bagaimana cara penyimpanan yang benar?',
    answer:
      'Simpan kroisan dalam wadah kedap udara di suhu ruangan untuk ketahanan 1–2 hari. Jika ingin disimpan lebih lama, masukkan ke dalam kulkas (tahan hingga 5 hari) dan panaskan kembali di oven atau air fryer sebelum dinikmati.',
    value: 'penyimpanan',
  },
  {
    question: 'Berapa lama kroisan bisa bertahan?',
    answer:
      'Kroisan memiliki tekstur dan rasa terbaik saat dikonsumsi pada hari yang sama. Di suhu ruangan dapat bertahan hingga 2 hari, dan hingga 5 hari jika disimpan di dalam lemari es.',
    value: 'bertahan',
  },
  {
    question: 'Apakah tersedia pengiriman ke luar kota?',
    answer:
      'Ya, kami melayani pengiriman ke luar kota khusus untuk produk kemasan tertentu menggunakan layanan kurir ekspres (next day service) demi menjaga kualitas dan kesegaran produk.',
    value: 'pengiriman',
  },
  {
    question: 'Apakah bisa pesan untuk acara tertentu?',
    answer:
      'Bisa. Kami menerima pesanan dalam jumlah besar untuk berbagai acara (catering, ulang tahun, atau acara kantor). Silakan lakukan pemesanan minimal H-3 sebelum tanggal acara.',
    value: 'acara',
  },
]

const FaqSection = () => {
  return (
    <section id='faq' className='bg-white py-26'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col items-center justify-center'>
          <motion.h5
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-accent mb-2 text-sm font-semibold tracking-widest uppercase'>
            FAQ
          </motion.h5>
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='text-primary font-heading mb-10 text-center text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl'>
            Pertanyaan yang Sering Diajukan
          </motion.h1>

          {/* faqs */}
          <Accordion className='max-w-5xl'>
            <div className='grid grid-cols-1 gap-y-2'>
              {faqs.map((faq) => (
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 * faqs.indexOf(faq) }}
                  key={faq.value}>
                  <AccordionItem
                    value={faq.value}
                    className={'rounded-lg border bg-white px-4 shadow'}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </div>
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default FaqSection
