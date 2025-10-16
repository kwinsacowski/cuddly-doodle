import React from 'react'
import IntervalCarousel from '../carousel/IntervalCarousel'
import { productData } from '../vdata'
import { vacationData } from '../vdata'

const Homepage = () => { 

    const data1 = vacationData
    const data2 =productData

  return (
    <div>
      <h2>HomePage</h2>

      <IntervalCarousel data={data1}/>
      <IntervalCarousel data={data2}/>

    </div>
  )
}

export default Homepage
