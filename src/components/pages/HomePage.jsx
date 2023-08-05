import Services from '../Services/Services'
import Testimonials from '../card/Testomonials'
import ContectForm from '../contect/ContectForm'
import Achievements from '../details/Achievements'
import AchievementsCarousel from '../header/achievement/AchievementsCarousel'
import HeroSection from '../header/herosection/HeroSection'

const HomePage = () => {
  return (
  <>
      <HeroSection />
      {/* <AchievementsCarousel /> */}
      <Services/>
      <Testimonials />
      {/* <Blog1 /> */}
      <Achievements />
      <ContectForm />
      
  </>
  )
}

export default HomePage