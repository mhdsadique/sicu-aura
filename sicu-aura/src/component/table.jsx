import React from 'react'

export const Table = ({data,i}) => {

  return (
    
    <tr>
        <td>{i+1}</td>
          <td>{data.regdate}</td>
        <td>{data.hospitalName}</td>
        <td>{data.email}</td>
        <td>{data.address}</td>
        <td>{data.mobilenum}</td>
        <td>{data.pincode}</td>
        <td>{data.regdate}</td>
        <td>{data.regnumber}</td>
        <td>{data.regsertificate}</td>
        <td>{data.emergward}</td>
        <td>{data.ambulanceavail}</td>
    </tr>
  )
}
