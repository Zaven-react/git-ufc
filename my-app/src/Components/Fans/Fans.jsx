import axios from "axios";
import React from "react";
import styles from "./fans.module.css";
import userPhoto from "../../assets/images/image.png"

class Fans extends React.Component {
  
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response=>{           
            this.props.setFans(response.data.items)           
            this.props.setTotalFansCount(response.data.totalCount)           
        })         
    }
    onPageChanged=(pageNumber)=>{
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response=>{           
            this.props.setFans(response.data.items)           
        })   
    }

    render(){
        let pagesCount = Math.ceil(this.props.totalFansCount/this.props.pageSize);
        let pages = []
        for(let i = 1; i<=pagesCount;i++){
            pages.push(i)
        }
        return <div>
            <div>
                {pages.map(p=>{
                  return <span className={this.props.currentPage === p && styles.activePage}
                  onClick={(e)=>{this.onPageChanged(p)}}>{p}</span> 
                })}               
                
            </div>
        {
            this.props.fans.map(f=> <div key={f.id}>
                <span>
                    <div>
                        <img src={f.photos.small !=null?f.photos.small:userPhoto} className={styles.fanPhoto}/>
                    </div>
                    <div>
                        {f.followed?
                        <button onClick={()=>{this.props.unfollow(f.id)}}>Unfollow</button>:
                        <button onClick={()=>{this.props.follow(f.id)}}>Follow</button>}
                        
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
}

export default Fans;