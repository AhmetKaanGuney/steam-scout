import React from 'react'
import mockDetails from '../mock-data/mock-details.js'

export default function AppDetails({appid}) {
  
  const appDetails = mockDetails();
  console.log(appDetails);

  return (
    <div>app-details for : {appid}</div>
  )
}
