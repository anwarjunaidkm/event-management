import React from 'react'
import Banner from '../components/banner/Banner'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import MainCategoryCard from '../components/mainCategory/MainCategoryCard'
import Popular from '../components/popular/Popular'

function Home() {
  return (
   <>
   <Header />
   <Banner />
   <MainCategoryCard />
   <Popular />
   <Footer />

   

   </>
  )
}

export default Home