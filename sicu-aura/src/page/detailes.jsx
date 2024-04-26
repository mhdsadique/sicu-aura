import React, { useEffect, useState } from 'react'
import { Table } from '../component/table'

export const Detailes = () => {
  const [data,setdata]=useState()

 useEffect(()=>{
    fetch("http://localhost:8000/rout/get").then(res=>res.json())
    .then(re=>setdata(re) )
    .catch(er=> console.log(er))
  },[])

  return (
    <div>
      <h1 style={{fontWeight:"bold"}}>Hospital Registrations</h1>

      <table className='table'>
        <tr>
            <th>No</th>
            <th>Date & Time</th>
            <th>Hospital Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone No</th>
            <th>Pincode</th>
            <th>Registration Date</th>
            <th>Registration Number</th>
            <th>Registration Photo</th>
            <th>Emergency Ward Number</th>
            <th> Number of Ambulance</th>

        </tr>
        {
          data?.map((el,i)=> <Table data={el} i={i}/>)
        }
  
    </table>
    </div>
  )
}
