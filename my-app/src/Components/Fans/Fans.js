import React from "react";
import styles from "./fans.module.css";
import userPhoto from "../../assets/images/image.png"


let Fans = (props)=>{  
    let pagesCount = Math.ceil(props.totalFansCount/props.pageSize);
    let pages = []
    for(let i = 1; i<=pagesCount;i++){
        pages.push(i)
    }
    return <div>
    <div>
        {pages.map(p=>{
          return <span className={props.currentPage === p && styles.activePage}
          onClick={(e)=>{props.onPageChanged(p)}}>{p}</span> 
        })}               
        
    </div>
{
    props.fans.map(f=> <div key={f.id}>
        <span>
            <div>
                <img src={f.photos.small !=null?f.photos.small:userPhoto} className={styles.fanPhoto}/>
            </div>
            <div>
                {f.followed?
                <button onClick={()=>{props.unfollow(f.id)}}>Unfollow</button>:
                <button onClick={()=>{props.follow(f.id)}}>Follow</button>}
                
            </div>
        </span>
        <span>
            <span>
                <div>{f.name}</div>
                <div>{f.status}</div>
            </span>
            <span>                        
                <div>{"f.location.country"}</div>
                <div>{"f.location.city"}</div>
            </span>
        </span>
    </div>)
}
</div>
}



export default Fans;