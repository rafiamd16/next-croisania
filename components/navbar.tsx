'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { FaBars, FaX } from 'react-icons/fa6'
import logo from '../public/assets/logo.png'
import { Button } from '@/components/ui/button'

const navItems = [
  { href: '#home', label: 'Beranda' },
  { href: '#about', label: 'Tentang Kami' },
  { href: '#product', label: 'Produk' },
  { href: '#testimoni', label: 'Testimoni' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Kontak' },
]

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openMenu = () => {
    setIsMenuOpen(true)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (scrollY > 0) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    })
  })

  return (
    <>
      <header
        className={`absolute top-0 right-0 left-0 z-50 w-full bg-white ${isScroll ? 'fixed bg-white/50 shadow-sm backdrop-blur-sm' : ''}`}>
        <div className='container mx-auto px-4'>
          <div className='flex items-center justify-between'>
            <a
              href={'#home'}
              className='flex items-center gap-2 py-4 text-lg font-bold md:text-2xl'>
              <Image src={logo} alt='logo' width={36} height={36} className='size-9' />
              <div className='flex flex-col'>
                <span className='text-primary font-heading'>Croisania</span>
                <span className='hidden text-[8px] text-neutral-500 sm:block md:text-[10px]'>
                  Freshly Baked, Just For You
                </span>
              </div>
            </a>

            {/* Large Navbar */}
            <nav className='hidden lg:block'>
              <ul className='gap-6 lg:flex'>
                {navItems.map((item, i) => (
                  <li key={i}>
                    <a
                      className='after:bg-primary hover:text-primary relative duration-300 after:absolute after:-bottom-1 after:left-1/2 after:h-0.5 after:w-1/2 after:origin-center after:-translate-x-1/2 after:scale-x-0 after:rounded after:transition-transform after:duration-300 hover:-translate-y-0.5 hover:after:scale-x-100'
                      href={item.href}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Hamburger */}
            <div>
              <Button
                size={'lg'}
                className='active:ring-primary hidden h-11 items-center rounded-full px-5 active:ring-2 active:ring-offset-1 lg:flex'>
                Pesan Sekarang
                <FaArrowRight />
              </Button>

              <button onClick={openMenu} className='block lg:hidden'>
                <FaBars />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navbar */}
      <div
        className={`fixed inset-0 z-50 bg-neutral-950/50 transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={closeMenu}>
        <nav
          className={`absolute top-0 right-0 h-screen w-64 bg-white p-6 shadow-xl transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}>
          {/* Close Button */}
          <Button
            size={'icon'}
            onClick={closeMenu}
            className='absolute top-5 right-4 cursor-pointer'
            variant={'outline'}>
            <FaX />
          </Button>

          {/* Navigation */}
          <ul className='mt-12 flex flex-col gap-5'>
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className='after:bg-primary hover:text-primary relative duration-300 after:absolute after:-bottom-1 after:left-1/2 after:h-0.5 after:w-1/2 after:origin-center after:-translate-x-1/2 after:scale-x-0 after:rounded after:transition-transform after:duration-300 hover:-translate-y-0.5 hover:after:scale-x-100'>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar
