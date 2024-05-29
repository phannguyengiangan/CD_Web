import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'


const initialValues={
  fullName:"",
  email:"",
  password:"",
  role: "ROLE_CUSTOMER",
}
export default function RegisterForm() {
  const navigate=useNavigate()

  const handleSubmit=(values)=>{
    console.log("form values", values)

  }
  return (
    <div>

        <Typography variant='h5' className='text-center'>
            Register
        </Typography>

        <Formik onSubmit={handleSubmit} initialValues={initialValues}>

          <Form>
              <Field
                  as={TextField}
                  name="fullName"
                  label="Họ Tên"
                  fullWidth
                  variant="outlined"
                  margin="normal"
              />
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
                  type="password"
                />
                
                    <Field
                    fullWidth
                    margin="normal"
                      as={Select}
                        labelId="role-simple-select-label"
                        id="demo-simple-select"
                        name="role"
                        // value={age}
                        
                        // onChange={handleChange}
  >
                        <MenuItem value={"ROLE_CUSTOMER"}>Khách Hàng</MenuItem>
                        <MenuItem value={"ROLE_SHOP_OWNER"}>Nhà Phân Phối</MenuItem>
                    </Field>
                
                <Button sx={{mt: 2, padding:"1rem"}} className='mt-5' fullWidth type='submit' variant='contained'>Đăng Ký</Button>
          </Form>

        </Formik>
        <Typography variant='body2' align='center' sx={{mt:3}}>
          Bạn đã có tài khoản?
          <Button size='small' onClick={()=>navigate("/account/login")}>
            Đăng Nhập
          </Button>
        </Typography>

    </div>
  )
}
