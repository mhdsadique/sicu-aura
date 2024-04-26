import { Button } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Webcam from 'react-webcam'

// export const WebcamCapture = () => {
//     const webcamRef = useRef(null);
//     const capture = React.useCallback(() => {
//         const imageSrc = webcamRef.current.getScreenshot();
//         console.log(imageSrc)
//         // You can now use the imageSrc for displaying the captured image or further processing
//       }, [webcamRef]);

//   return (
//     <>
//     <Webcam
//     //   audio={false}
//     //   ref={webcamRef}
//     //   screenshotFormat="image/jpeg"
//       // You can specify other video constraints here
//     />
//     <button onClick={capture}>Capture photo</button>
//   </>
//   )
// }


// import React, { useState } from 'react'
// import Webcam from 'react-webcam'
// const WebcamComponent = () => <Webcam />
const videoConstraints = {
  width: 400,
  height: 400,
  margin:"auto",
  facingMode: 'user',
}
export const WebcamCapture = () => {
  const [picture, setPicture] = useState('')
  const webcamRef = React.useRef(null)
  const navigate=useNavigate()
  const capture = React.useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot()
    setPicture(pictureSrc)
  },[webcamRef])

  const todetailes=()=>{
     navigate('/detailes')  
  }
  return (
    <div style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
      <h2 >
      Please Capture our face to continue
      </h2>
      <div>
        {picture === '' ? (
          <Webcam
            audio={false}
            height={400}
            ref={webcamRef}
            width={400}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
        ) : (
          <img src={picture} alt='profile' />
        )}
      </div>
      <div>
        {picture !== '' ? (
          <button
            onClick={(e) => {
              e.preventDefault()
          
              setPicture("")
            }}
      
          >
            Retake
          </button>
        ) : (
          <Button
            onClick={(e) => {
              e.preventDefault()
              capture()
            }}
          
          >
            Capture
          </Button>
        )}



         {picture !== '' ? (
          <Button onClick={todetailes}>
            Continue
          </Button>
        ) : ""}
      </div>
    </div>
  )
}



