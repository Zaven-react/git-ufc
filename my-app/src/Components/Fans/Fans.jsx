import React from "react";
import styles from "./fans.module.css"

let Fans =(props)=>{
    if(props.fans.length ===0){
    
    props.setFans( [ {id: 1,photoUrl:"https://www.cleveland.com/resizer/vOVEth4p7xAj1zTpWFb2nq0CERU=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SAFGJ36V3VFJTOANC25TCCT4SU.jpg", followed:false,  fullName: "John", status:"lets go",location:{city:"Las Vegas",country:"USA"}},
                     {id: 2,photoUrl:"https://www.cleveland.com/resizer/vOVEth4p7xAj1zTpWFb2nq0CERU=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SAFGJ36V3VFJTOANC25TCCT4SU.jpg", followed:true, fullName: "Michael", status:"Kill him",location:{city:"London",country:"UK"}},
                     {id: 3,photoUrl:"https://www.cleveland.com/resizer/vOVEth4p7xAj1zTpWFb2nq0CERU=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SAFGJ36V3VFJTOANC25TCCT4SU.jpg", followed:false, fullName: "Edgar", status:"fuck them",location:{city:"Moscow",country:"Russia"}}])
                    }
    return <div>
        {
            props.fans.map(f=> <div key={f.id}>
                <span>
                    <div>
                        <img src={f.photoUrl} className={styles.fanPhoto}/>
                    </div>
                    <div>
                        {f.followed?
                        <button onClick={()=>{props.unfollow(f.id)}}>Unfollow</button>:
                        <button onClick={()=>{props.follow(f.id)}}>Follow</button>}
                        
                    </div>
                </span>
                <span>
                    <span>
                        <div>{f.fullName}</div>
                        <div>{f.status}</div>
                    </span>
                    <span>                        
                        <div>{f.location.country}</div>
                        <div>{f.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Fans;