import { Button, TextField, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const initialValues={
    email:"",
    password:""
}
export const LoginForm = () => {
  const navigate=useNavigate()

  const handleSubmit=()=>{

  }
  return (
    <div>

        <Typography variant='h5' className='text-center'>
            Login
        </Typography>

        <Formik onSubmit={handleSubmit} initialValues={initialValues}>

          <Form>
              <Field
                  as={TextField}
                  name="email"
                  label="email"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                />
                <Field
                  as={TextField}
                  name="password"
                  label="password"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                />
                <Button sx={{mt: 2, padding:"1rem"}} className='mt-5' fullWidth type='submit' variant='contained'>Đăng Nhập</Button>
          </Form>

        </Formik>
        <Typography variant='body2' align='center' sx={{mt:3}}>
          Chưa có tài khoản?
          <Button size='small' onClick={()=>navigate("/account/register")}>
            Đăng Ký
          </Button>
        </Typography>

    </div>
  )
}
