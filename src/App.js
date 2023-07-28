import React, { useState } from "react";
import Card from "./components/Card"
import Headder from "./components/Headder";
import NavBar from "./components/NavBar";
function App(){
  let [cartValue,setCartValue]=useState(0) 

  let data=[
    {
      name:"Lamborghini",
      url:"https://imgd.aeplcdn.com/370x208/n/cw/ec/146547/urus-s-exterior-right-front-three-quarter.jpeg?isig=0&q=75",
      cost:"$199999"
    },
    {
     name:"Shift",
      url:"https://imgd.aeplcdn.com/370x208/n/cw/ec/54399/exterior-right-front-three-quarter-10.jpeg?q=75",
      cost:"$15999"
    },
    {
    name:"Hundai",
      url:"https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Hyundai-Grand-i10-Nios-200120231541.jpg&w=872&h=578&q=75&c=1",
      cost:"$25000"
    },
    {
      name:"Tata punch",
      url:"https://imgd.aeplcdn.com/370x208/n/cw/ec/41645/tata-nexon-right-front-three-quarter3.jpeg?q=75",
      cost:"$199999" 
    },
    {
      name:"Nossan Magnite",
      url:"https://imgd.aeplcdn.com/370x208/n/cw/ec/45795/magnite-exterior-right-front-three-quarter-9.jpeg?isig=0&q=75",
      cost:"$30000"
    },
    {
      name:"Innova",
      url:"https://imgd.aeplcdn.com/370x208/n/cw/ec/147201/invicto-exterior-right-front-three-quarter-2.jpeg?isig=0&q=75",
      cost:"$19999"
    },
    {
      name:"Benleno",
      url:"https://imgd.aeplcdn.com/370x208/n/cw/ec/147201/invicto-exterior-right-front-three-quarter-2.jpeg?isig=0&q=75",
      cost:"$20000"
    },
    {
      name:"Maruthi XUV700",
      url:"https://imgd.aeplcdn.com/370x208/n/cw/ec/42355/xuv700-exterior-right-front-three-quarter.jpeg?isig=0&q=75",
      cost:"$50000"
    },
    
  ]
  
  return <>
  <NavBar cartValue={cartValue}/>
  <Headder/>
  <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
  {
    data.map((e,i)=>{
      return <Card setCartValue={setCartValue} details={e} key={i} />
    })
  }
  
  
  </div>
  </div>
  </section>
  </>
}

export default App;
