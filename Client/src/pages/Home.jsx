import React from 'react'
import HeroSection from "../components/HeroSection"
import TourHighlights from "../components/TourHighlights"
import WhyChooseUs from "../components/WhyChooseUs"
import Packages from "../components/Packages"
import CarList from '../components/CarList'
import AllCar from '../components/AllCar'


const Home = () => {
  return (
    <div>
    <HeroSection/>
    <TourHighlights/>
    <Packages/>
    <AllCar/>
    <WhyChooseUs/>
    

    {/* <CarList/> */}
    </div>
  )
}

export default Home
