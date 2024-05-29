import { Button, Card } from '@mui/material'
import React from 'react'

export const OrderCard = () => {
  return (
    <Card className='flex justify-between items-center p-5' style={{ backgroundColor: '#256a62' }}>
        <div className='flex items-center space-x-5'>
            <img 
                className='h-16 w-16'
                src="https://kinpetshop.com/wp-content/uploads/thuc-an-hat-smartheart-danh-cho-cho-con-vi-bo-va-sua-.jpg" 
                alt=""
            />
            <div>
                <p>Thức Ăn Hạt Smartheart Dành Cho Chó Con Vị Bò Và Sữa</p>
                <p>567.000 VNĐ</p>

            </div>
            
        </div>
        <div>
            <Button  className='cursor-not-allowed'> completed </Button>
        </div>

    </Card>
  )
}
