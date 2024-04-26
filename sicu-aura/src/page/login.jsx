    import React, { useState } from 'react'
    import { Button, ButtonGroup } from '@chakra-ui/react'
import { Logos } from '../component/logos'
    import './login.css'
import { Signform } from '../component/signform'
import { Logform } from '../component/logform'
// import { WebcamCapture } from '../component/webcam'
    export const Login = () => {
        const [logn,setLogin] = useState(false)
        console.log(logn)
      return (
    
        <div className='div1'>
          <div style={{border:"solid 1px red"}}>

            <Logos/>
          </div>
            <div className='div2' style={{border:"solid 1px green",}}>
          <img className='img1' src="https://s3-alpha-sig.figma.com/img/95ba/3481/3ad994db5b5e421121cc1ef38e21523e?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aU6wM~GpqkHeciKzNgTsGJJ0lfW3d4c3ZRUOrXsr2Ftqh7YyXoD4A0CYY7n5taTUS1UGj1q5c~~szQ1yCZa0frdkHztn8Box9wqDEqzuWZ3IWVKtiKduPYvRCk-su7Gd8zAcCawJY6mNsAqHUbhCo3tkRZ9zYKOUOi2yGrAT9Ev1ijQ~bhqwbZYje1SARPDwUT9Eomawz5AMAur8kx3hLXPgykYE8B9lvfbMDeAV51PkcsfG6WBcWDY-HW1UCfUb3fnFvNXSKXQv0LQCwvhuAzyPGR9r-R8WYeO6o~RWBo-JJ7NPjhNVM5-r4W~AH~oWTglDMSqpB8U07VR3M-xbJw__" alt="img3"  />
        <div>

        <div style={{margin:"auto",display:"flex",gap:"2px",border:"solid 1px black",height:"45px",alignItems:"center",justifyContent:"center",width:"230px",}} >
        <Button onClick={()=>setLogin(false)} colorScheme='black' variant='link'>
    Sign Up
  </Button>
  <h1>/</h1>
  <Button onClick={()=>setLogin(true)} colorScheme='black' variant='link'>
    Login
  </Button>
        </div>
        {

          logn?<Logform/> :<Signform/>
        }
        
      
        </div>
        </div>

        <div>
        </div>
        </div>
   
      )
    }
    