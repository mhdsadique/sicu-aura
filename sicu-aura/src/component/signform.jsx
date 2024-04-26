import React, { useState } from 'react'
import { Button, Input ,useToast} from '@chakra-ui/react'
import './logo.css'
export const Signform = () => {
  const toast = useToast()
  const [data,setdata]=useState()
  const [email,setEmail]=useState()
  const [password,setpassword]=useState()
  const [hospitalName,setHospitalName]=useState()

  const [address,setAddress]=useState()
  const [city,setcity]=useState()
  const [state,setState]=useState()
  const [pincode,setPincode]=useState()
  const [regdate,setregdate]=useState()
  const [ambulanceavail,setambulanceavail]=useState()
  const [mobilenum,setmobilenumnum]=useState()
  const [regnumber,setregnumber]=useState()
  const [emergward,setemergward]=useState()
  const [regsertificate,setregregsertificate]=useState()
  const payload={email,password,hospitalName,address,city,state,pincode,regdate,ambulanceavail,mobilenum,regnumber,emergward,regsertificate}
  const submitdata=()=>{
      fetch("http://localhost:8000/rout/register",{
          method:"POST",
          body:JSON.stringify(payload),
          headers:{
              "Content-type":"application/json"
          }
      }).then(res=>res.json())
      .then(re=>{console.log(re);
        toast({
          title: 'Account created.',
          description: "We've created your account for you.",
          status: 'success',
          duration: 9000,
          isClosable: true,

        })} )
      .catch(er=> console.log(er))
  }
  console.log(data)
  return (
    <div className='sigf1'>
        <div>
          <Input onChange={(e)=>setHospitalName(e.target.value)} value={hospitalName} variant='flushed' placeholder='Hospital Name' />
          <Input onChange={(e)=>setAddress(e.target.value)} value={address} variant='flushed' placeholder='Address' />
          <Input onChange={(e)=>setcity(e.target.value)} value={city} variant='flushed' placeholder='City' />
          <Input onChange={(e)=>setState(e.target.value)} value={state} variant='flushed' placeholder='State' />
          <Input onChange={(e)=>setPincode(e.target.value)} value={pincode} variant='flushed' placeholder='Pincode' type='number' />
          <Input onChange={(e)=>setregdate(e.target.value)} value={regdate} variant='flushed' placeholder='Hospital Registration Date' type='date'/>
          <Input onChange={(e)=>setambulanceavail(e.target.value)} value={ambulanceavail}  variant='flushed' placeholder='Number of Ambulance Available' />
          </div>
          <div>
          <Input onChange={(e)=>setEmail(e.target.value)} value={email} variant='flushed' placeholder='Email ID' type='mail' />
          <Input onChange={(e)=>setmobilenumnum(e.target.value)} value={mobilenum}  variant='flushed' placeholder='Phone Number' type='number' />
          <Input onChange={(e)=>setregnumber(e.target.value)} value={regnumber} variant='flushed' placeholder='Hospital Registration Number' />
          <Input onChange={(e)=>setemergward(e.target.value)} value={emergward} variant='flushed' placeholder='Emergency Ward Number' />
          <Input onChange={(e)=>setregregsertificate(e.target.value)} value={regsertificate} variant='flushed' placeholder='Registration Certificate Upload' type='file' />
          <Input onChange={(e)=>setpassword(e.target.value)} value={password} variant='flushed' placeholder='Create password' type='password' />
          <Input variant='flushed' placeholder='Conform Password' type='password' />
        
          <Button onClick={submitdata}  display='flex' margin='10px ' backgroundColor='black' color='white'>Sign Up</Button>
          </div>

    </div>
  )
}
