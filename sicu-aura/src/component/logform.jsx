import { Box, Button, Input,useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import './logo.css'
import { useNavigate } from 'react-router-dom'
export const Logform = () => {
  const toast = useToast()
  const navigate=useNavigate()
      const [state,setState]=useState()  
      const [email,setEmail]=useState()
      const [password,setpassword]=useState()
  const [hospitalName,sethospitalName]=useState()
  const [mobilenum,setmobilenumnum]=useState()


      const payload={email,password,hospitalName,mobilenum}
      const submitdata=()=>{
          fetch("http://localhost:8000/rout/login",{
              method:"POST",
              body:JSON.stringify(payload),
              headers:{
                  "Content-type":"application/json"
              }
          }).then(res=>res.json())
          .then(re=>{console.log(re)
            setState(re.token)
          localStorage.setItem("token",re.token)})
          .catch(er=>console.log(er))

          if(state){
            navigate('webcam')
            console.log(state)
          }else{
            toast({
              title: 'Create an Account.',
              description: "You have to create your account. something went wrong",
              status: 'error',
              duration: 9000,
              isClosable: true,
            })
          }
      }
  

      
  return (
    <div>
  
    <Box className='logf1' boxShadow='base' p='6' rounded='md' bg='white'>
      
      <h1>Welcome to Sicu-aura</h1>
      <p style={{fontSize:"10px",fontFamily:"inherit",fontVariant:"all-petite-caps"}} >Your one stop safety solutions using innovative technology </p>
      <div className='inpu'>    
      <Input onChange={(e)=>sethospitalName(e.target.value)} value={hospitalName} variant='flushed' placeholder='Hospital Name' />
      <Input onChange={(e)=>setEmail(e.target.value)} value={email} variant='flushed' placeholder='Email ID' type='mail' />
      <Input onChange={(e)=>setmobilenumnum(e.target.value)} value={mobilenum}  variant='flushed' placeholder='Phone Number' type='number' />
      <Input onChange={(e)=>setpassword(e.target.value)} value={password} variant='flushed' placeholder='Create password' type='password' />
          <Input variant='flushed' placeholder='Special Access Code ' />
      </div>
  </Box>

        
          <Button onClick={submitdata}  display='flex' margin='30px auto' backgroundColor='black' color='white'>Login</Button>
    </div>
  )
}
