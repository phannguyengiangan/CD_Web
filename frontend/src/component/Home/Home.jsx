import React from 'react'
import "./Home.css"
import MultiItemCarousel from './MultiItemCarousel'
import ShopCard from '../Shop/ShopCard'

const shop=[1,1,1,1,1,1,1,1]
const Home = () => {

  return (
    <div className='pb-10'>
        <section className='banner -z-50 relative flex flex-col justify-center items-center'>

          <div className='w-[50vw] z-10 text-center'>
              <p className='text-2xl lg:text-6xl font-bold z-10 py-5'>My Pet</p>
              <p className='z-10 text-gray-300 text-xl lg:text-4xl'>Chăm sóc, yêu thương, và cùng chia sẻ niềm vui cùng bạn nhỏ của bạn</p>

          </div>
          <div className='cover absolute top-0 left-0 right-0'>

          </div>
          <div className='fadout'>

          </div>

        </section>
        <section className='p-10 lg:py-10 lg:px-20'>
          <p className='text-2xl font-semibold py-3 pb-10' style={{ color: '#256a62' }}>Danh mục sản phẩm</p>
          <MultiItemCarousel/>
        </section>
        <section className='px-5 lg:px-20 pt-10'>
           <h1 className='text-2xl fornt-semibold pb-8' style={{ color: '#0D0D0D' }}>Nhãn hiệu tiêu biểu</h1>
           <div className='flex flex-wrap items-center justify-around gap-5'>
                {
                  shop.map((item)=><ShopCard/>)
                } 
           </div>
        </section>

    </div>
  )
}

export default Home