import React,{useState} from 'react'
import ReactStars from 'react-stars'


function Card({details,setCartValue,cartValue}) {
    
    let [Toggle,SetToggle]=useState(true)
  return (
    <>  
        <div className="col mb-5">
                        <div className="card h-100">
                           
                            <img className="card-img-top" src={details.url} alt="..." />
                            
                            <div className="card-body p-4">
                                <div className="text-center">
                                    
                                    <h5 className="fw-bolder">{details.name}</h5>
                                    
                                    {details.cost}<br></br>
                                    
                                    <ReactStars className={"Ratingstar"}  count={5} size={55} color2={'#ffd700'} />
                                    
                                        
                                                                       
                                </div>
                            </div>
                            
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center">
                                   
                                   { Toggle?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                        setCartValue(value=>value+1)
                                        SetToggle(false)
                                    }} >Add To Cart </button>:<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                                        setCartValue(value=>value-1)
                                        SetToggle(true)
                                    }} >Remove {cartValue} </button>
                                }
                                </div>
                                
                            </div>
                        </div>
                    </div>
    </> 
  )
}

export default Card