import { Box, Button, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import './logo.css'
import { useNavigate } from 'react-router-dom'
export const Logform = () => {
  const navigate=useNavigate()
      // const [state,setState]=useState(false)  
      const [email,setEmail]=useState()
      const [password,setpassword]=useState()
  const [HospitalName,setHospitalName]=useState()
  const [phone,setphonenum]=useState()


      const payload={email,password}
      const submitdata=()=>{
          fetch("http://localhost:8000/rout/login",{
              method:"POST",
              body:JSON.stringify(payload),
              headers:{
                  "Content-type":"application/json"
              }
          }).then(res=>res.json())
          .then(re=>{console.log(re)
            navigate('webcam')
          localStorage.setItem("token",re.token)})
          .catch(er=>console.log(er))
      }
      // const setStatedata=()=>{
      //   setState(true)
      //   console.log(state)
      //   navigate('webcam')
      // }
  return (
    <div>
    {/* <div className='logf1'> */}
    <Box className='logf1' boxShadow='base' p='6' rounded='md' bg='white'>
      
      <h1>Welcome to Sicu-aura</h1>
      <p style={{fontSize:"10px",fontFamily:"inherit",fontVariant:"all-petite-caps"}} >Your one stop safety solutions using innovative technology </p>
      <div className='inpu'>
      {/* <Box className='inpu' boxShadow='lg' p='6' rounded='md' bg='white'> */}
    
      <Input onChange={(e)=>setHospitalName(e.target.value)} value={HospitalName} variant='flushed' placeholder='Hospital Name' />
      <Input onChange={(e)=>setEmail(e.target.value)} value={email} variant='flushed' placeholder='Email ID' type='mail' />
      <Input onChange={(e)=>setphonenum(e.target.value)} value={phone}  variant='flushed' placeholder='Phone Number' type='number' />
      <Input onChange={(e)=>setpassword(e.target.value)} value={password} variant='flushed' placeholder='Create password' type='password' />
          <Input variant='flushed' placeholder='Special Access Code ' />
          {/* <input type="file" accept="image/*" capture></input> */}
      </div>
  </Box>

        
    {/* </div> */}
          <Button onClick={submitdata}  display='flex' margin='30px auto' backgroundColor='black' color='white'>Login</Button>
    </div>
  )
}
