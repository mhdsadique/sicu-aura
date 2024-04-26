import React, { useState } from 'react'
import { Button, Input } from '@chakra-ui/react'
import './logo.css'
export const Signform = () => {
  const [email,setEmail]=useState()
  const [password,setpassword]=useState()
  const [HospitalName,setHospitalName]=useState()

  const [Address,setAddress]=useState()
  const [City,setCity]=useState()
  const [State,setState]=useState()
  const [Pincode,setPincode]=useState()
  const [regdate,setregDate]=useState()
  const [amnulance,setambulance]=useState()
  const [phone,setphonenum]=useState()
  const [regNumber,setregNumber]=useState()
  const [emgyWrdNum,setemgyWrdNum]=useState()
  const [regsertifi,setregregsertifi]=useState()
  const payload={email,password}
  const submitdata=()=>{
      fetch("http://localhost:8000/rout/register",{
          method:"POST",
          body:JSON.stringify(payload),
          headers:{
              "Content-type":"application/json"
          }
      }).then(res=>res.json())
      .then(re=>console.log(re)  )
      .catch(er=> console.log(er))
  }
  return (
    <div className='sigf1'>
        <div>
          <Input onChange={(e)=>setHospitalName(e.target.value)} value={HospitalName} variant='flushed' placeholder='Hospital Name' />
          <Input onChange={(e)=>setAddress(e.target.value)} value={Address} variant='flushed' placeholder='Address' />
          <Input onChange={(e)=>setCity(e.target.value)} value={City} variant='flushed' placeholder='City' />
          <Input onChange={(e)=>setState(e.target.value)} value={State} variant='flushed' placeholder='State' />
          <Input onChange={(e)=>setPincode(e.target.value)} value={Pincode} variant='flushed' placeholder='Pincode' type='number' />
          <Input onChange={(e)=>setregDate(e.target.value)} value={regdate} variant='flushed' placeholder='Hospital Registration Date' />
          <Input onChange={(e)=>setambulance(e.target.value)} value={amnulance}  variant='flushed' placeholder='Number of Ambulance Available' />
          </div>
          <div>
          <Input onChange={(e)=>setEmail(e.target.value)} value={email} variant='flushed' placeholder='Email ID' type='mail' />
          <Input onChange={(e)=>setphonenum(e.target.value)} value={phone}  variant='flushed' placeholder='Phone Number' type='number' />
          <Input onChange={(e)=>setregNumber(e.target.value)} value={regNumber} variant='flushed' placeholder='Hospital Registration Number' />
          <Input onChange={(e)=>setemgyWrdNum(e.target.value)} value={emgyWrdNum} variant='flushed' placeholder='Emergency Ward Number' />
          <Input onChange={(e)=>setregregsertifi(e.target.value)} value={regsertifi} variant='flushed' placeholder='Registration Certificate Upload' type='file' />
          <Input onChange={(e)=>setpassword(e.target.value)} value={password} variant='flushed' placeholder='Create password' type='password' />
          <Input variant='flushed' placeholder='Conform Password' type='password' />
        
          <Button onClick={submitdata}  display='flex' margin='10px ' backgroundColor='black' color='white'>Sign Up</Button>
          </div>

    </div>
  )
}
