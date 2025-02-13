import FeatureSection from "./components/FeatureSection"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import InvestmentPlans from "./components/InvestmentPlans"
import Navbar from "./components/Navbar"
import Testimonials from "./components/Testimonials"
import WorkFlow from "./components/WorkFlow"

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <WorkFlow />
        <InvestmentPlans />
        <Testimonials/>
        <Footer/>
      </div>
    </div>
  )
}

export default App