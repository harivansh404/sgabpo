import Services from '../Services/Services'
import Blog1 from '../blog/Blog1'
import Brand from '../brand/Brand'
import Testimonials from '../card/Testomonials'
import ContectForm from '../contect/ContectForm'
import NumInc from '../details/NumInc'
import Carousel from '../header/achievement/Carousel'
import HeroSection from '../header/herosection/HeroSection'

const HomePage = () => {
  return (
  <>
      <HeroSection />
      <Carousel />
      <Services/>
      {/* <Testimonials /> */}
      {/* <Blog1 /> */}
      <NumInc/>
      <ContectForm/>
  </>
  )
}

export default HomePage