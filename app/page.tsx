import AboutSection from '@/components/about-section'
import BenefitSection from '@/components/benefit-section'
import ContactSection from '@/components/contact-section'
import FaqSection from '@/components/faq-section'
import HeroSection from '@/components/hero-section'
import ProductSection from '@/components/product-section'
import TestimoniSection from '@/components/testimoni-section'

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <BenefitSection />
      <ProductSection />
      <AboutSection />
      <TestimoniSection />
      <FaqSection />
      <ContactSection />
    </>
  )
}

export default HomePage
