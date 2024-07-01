// import React from 'react'
import React, { useEffect, useState } from "react"
import CarouselHero from "../../components/common/CarouselHero"

import Footer from "../../components/user/FooterUser"

import CategoryCard from "../../components/user/CategoryCard"


import { getAllCategoriesAPI } from "../../api/common"

function HeroUser() {


  const [showComponent, setShowComponent] = useState(false)
  const [categories, setCategories] = useState([])

 

  useEffect(() => {
    getAllCategoriesAPI()
      .then(({ data }) => {
        setCategories(data.categories)
      })

    setTimeout(() => {
      setShowComponent(true)
    }, 5000);
  }, [])

  return (
    <>
      

      <div className="pt-10 px-1 md:px-10 sm:px-5 bg-gray-200/95 pb-24">
        <CarouselHero />

        <hr className="h-px my-8 bg-gray-300 border-0 dark:bg-gray-700"></hr>

        <CategoryCard categories={categories} />

       

      </div>
      <Footer />
    </>
  )
}

export default HeroUser