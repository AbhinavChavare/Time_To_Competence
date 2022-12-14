import React, { useState } from 'react'
import "./Content.css"
import Airdryer from './Products/Airdryer'
import Centrifugal from './Products/Centrifugal'
import Lowpress from './Products/Lowpress'
import Oilfree from './Products/Oilfree'
import Oilinjected from './Products/Oilinjected'
import Piston from './Products/Piston'


const Content = () => {
const [title,setTitle]=useState("Oil-injected")
// alert (title)
  return (
    <div className='cont-center' >
<h2 className='textstart'>Products</h2>
    <div className='cont-margin disp-grid'>
      <div className='cont-head'>
    <h5 className='title-cont' onClick={()=>setTitle("Oil-injected")}> Day 1: Oil-injected compressors</h5>
    <h5 className='title-cont' onClick={()=>setTitle("Oil-free")}>Day 2: Oil-free compressors</h5>
    <h5 className='title-cont' onClick={()=>setTitle("Low pressure")}>Day 3: Low pressure screw blowers</h5>
    <h5 className='title-cont' onClick={()=>setTitle("Piston")}>Day 4: Piston compressors</h5>
    <h5 className='title-cont' onClick={()=>setTitle("Centrifugal air")}>Day 5: Centrifugal air compressors</h5>
    <h5 className='title-cont' onClick={()=>setTitle("Air Dryers")}>Day 6: Air Dryers</h5>
      </div>
      {/* <h1 className='cont-data'>Content Pages</h1> */}
<div className='cont-data'>

{  title==="Oil-injected"&& <Oilinjected/>}
 { title==="Oil-free"&& <Oilfree/>}
 { title==="Low pressure"&& <Lowpress/>}
 { title==="Piston"&& <Piston/>}
 { title==="Centrifugal air"&& <Centrifugal/>}
 { title==="Air Dryers"&& <Airdryer/>}

</div>
    </div>

    </div>
  )
}

export default Content
