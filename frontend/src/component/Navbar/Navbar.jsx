import { Avatar, Badge, Box, IconButton } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { green } from '@mui/material/colors';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Navbar.css"
import { Person } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const navigate=useNavigate()
  return (
    <Box 
        
        className='px-5 sticky top-0 z-50 py-[.8rem] bg-[#7AB730] lg:px-20 flex 
        justify-between'
    >

        
            <div className='lg:mr-10 cursor-pointer flex items-center space-x-4'>
                <li className='logo font-semibold tracking-wide uppercase italic text-2xl' style={{ textShadow: '0 0 2px black', color:'#f03429' }}>
                    My pet
                </li>

            </div>

        
        <div className='flex items-center space-x-2 lg:space-x-10'>

            <div className=''>
                <IconButton>
                    <SearchIcon sx={{fontSize:"1.5rem"}}/>
                </IconButton>

            </div>
            <div className=''>

                {false?<Avatar sx={{bgcolor:"white",color:"#1b5e20"}}>C</Avatar>:
                <IconButton onClick={()=>navigate("/account/login")}>
                    <Person/>
                </IconButton>}

            </div>

            <div className=''>

            <IconButton>
                <Badge color="primary" badgeContent={3}>
                    <ShoppingCartIcon sx={{fontSize:"1.5rem"}}/>
                </Badge>


            </IconButton>

            </div>

        </div>
        
    </Box>
  )
}
