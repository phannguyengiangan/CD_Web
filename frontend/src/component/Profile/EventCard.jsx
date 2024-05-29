import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

export const EventCard = () => {
  return (
    <div>
        <Card sx={{width:345}} style={{ backgroundColor: '#256a62' }}>
            <CardMedia 
                
                sx={{height:345}}
                image='//theme.hstatic.net/200000312661/1001217927/14/img_home_banner_desktop_2.jpg?v=163'
            />
            <CardContent>
                <Typography variant='h5' >
                    Đồng Giá 99K
                </Typography>
                <Typography variant='body2' >
                    Thời trang thú cưng
                </Typography>
                <div className='py-2 space-y-2'>

                    <p>{"Chi nhánh: HCM"}</p>
                    <p className='text-sm text-blue-400'> 1 tháng 6, 2024 12:00 AM</p>
                    <p className='text-sm text-red-500'> 5 tháng 6, 2024 12:00 AM</p>


                </div>
            </CardContent>
            {false && <CardActions>
                <IconButton>
                    <DeleteIcon/>

                </IconButton>
            </CardActions>}
        </Card>
    </div>
  )
}
