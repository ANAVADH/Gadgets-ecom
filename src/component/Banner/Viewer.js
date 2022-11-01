import React from 'react'
import Card from 'react-bootstrap/Card';
import './Banner.css'

function Viewer({data}) {
  return (
    <div className='view'>
       <Card className="p-0 m-5 rounded-5 float-start ">
      <Card.Img src={data.image} alt="Card image" className='rounded-5' />
    </Card>
    </div>
  )
}

export default Viewer
