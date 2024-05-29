import React from 'react'
import ShopCard from '../Shop/ShopCard'

export default function Favorites() {
  return (
    <div>
        <h1 className='py-5 text-xl font-semibold text-center' style={{ color: '#111111' }}> My Favorites</h1>

        <div className='flex flex-wrap gap-3 justify-center'>

            {[1,1,1].map((item)=><ShopCard/>)}

        </div>
    </div>
  )
}
