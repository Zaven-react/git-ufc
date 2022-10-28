import React from "react"
import preloader from "./../../../assets/images/load.svg"


let Preloader = (props)=>{
    return  <div  style={{backgroundColor:"blue"}}>
    <img src={preloader}/>
</div>
}

export default Preloader