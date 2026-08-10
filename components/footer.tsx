import Image from 'next/image'
import logo from '@/public/assets/logo.png'
import { FaGithub, FaInstagram, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa'
import { IoLocation, IoMail } from 'react-icons/io5'

const Footer = () => {
  return (
    <footer>
      <div className='bg-cream w-full py-10'>
        <div className='container mx-auto'>
          <div className='flex w-full flex-wrap'>
            <div className='mb-12 w-full px-4 lg:w-1/4'>
              <div className='mb-5 flex items-center gap-2'>
                <Image src={logo} alt='logo' width={36} height={36} className='size-9' />
                <div className='flex flex-col'>
                  <span className='text-primary font-heading text-2xl font-bold md:text-3xl'>
                    Croisania
                  </span>
                  <span className='text-xs'>Freshly Baked, Just For You</span>
                </div>
              </div>
              <p className='mb-4 text-sm leading-relaxed'>
                Kroisan premium dengan bahan terbaik dan dibuat dengan cinta untuk anda.
              </p>
              <div className='space-y-2'>
                <div className='flex items-center gap-2'>
                  <FaPhoneAlt className='text-primary shrink-0' />
                  <span>+628123456789</span>
                </div>
                <div className='flex items-center gap-2'>
                  <IoMail className='text-primary shrink-0' />
                  <span>croisania@gmail.com</span>
                </div>
                <div className='flex items-center gap-2'>
                  <IoLocation className='text-primary shrink-0' />
                  <span>Jl. Roti Enak No. 10, Jakarta</span>
                </div>
              </div>
            </div>
            <div className='mb-12 w-full px-4 lg:w-1/4'>
              <div className='flex flex-col justify-center gap-5'>
                <h3 className='text-primary font-bold'>Menu</h3>
                <a
                  className='hover:text-primary transition-colors duration-300 ease-in-out'
                  href='#home'>
                  Beranda
                </a>
                <a
                  className='hover:text-primary transition-colors duration-300 ease-in-out'
                  href='#benefit'>
                  Benefits
                </a>
                <a
                  className='hover:text-primary transition-colors duration-300 ease-in-out'
                  href='#about'>
                  Tentang Kami
                </a>
                <a
                  className='hover:text-primary transition-colors duration-300 ease-in-out'
                  href='#product'>
                  Produk
                </a>
                <a
                  className='hover:text-primary transition-colors duration-300 ease-in-out'
                  href='#contact'>
                  Kontak
                </a>
              </div>
            </div>
            <div className='mb-12 w-full px-4 lg:w-1/4'>
              <div className='flex flex-col justify-center gap-5'>
                <h3 className='text-primary font-bold'>Info</h3>
                <a
                  className='hover:text-primary transition-colors duration-300 ease-in-out'
                  href='#faq'>
                  FAQ
                </a>
                <a
                  className='hover:text-primary transition-colors duration-300 ease-in-out'
                  href='#testimoni'>
                  Testimoni
                </a>
                <a
                  className='hover:text-primary transition-colors duration-300 ease-in-out'
                  href='#'>
                  Kebijakan Privasi
                </a>
                <a
                  className='hover:text-primary transition-colors duration-300 ease-in-out'
                  href='#'>
                  Syarat & Ketentuan
                </a>
              </div>
            </div>
            <div className='mb-12 w-full px-4 lg:w-1/4'>
              <h3 className='text-primary mb-5 text-center font-bold sm:text-left'>Follow Kami</h3>
              <div className='mb-8 flex items-center justify-center gap-4 sm:justify-start'>
                <a
                  href='https://instagram.com/rafiamd16'
                  target='_blank'
                  className='bg-primary rounded-full p-1.5'>
                  <FaInstagram className='text-white' size={22} />
                </a>
                <a
                  href='https://linkedin.com/in/rafiamd'
                  target='_blank'
                  className='bg-primary rounded-full p-1.5'>
                  <FaLinkedinIn className='text-white' size={22} />
                </a>
                <a
                  href='https://github.com/rafiamd16'
                  target='_blank'
                  className='bg-primary rounded-full p-1.5'>
                  <FaGithub className='text-white' size={22} />
                </a>
              </div>
              <div className='mx-auto max-w-2xs rounded-lg border bg-white p-4 text-sm shadow-sm sm:mx-0'>
                <span>Dapatkan promo & info terbaru ikuti kami di media sosial!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-primary py-4'>
        <p className='text-center text-sm text-white'>
          Copyright &copy; 2026 Croisania. All Rights Reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
