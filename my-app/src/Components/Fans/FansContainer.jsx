import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setFansAC, unfollowAC,setTotalFansCountAC, toggleIsFetchingAC } from "../../Redux/fanc-reducer";
import Preloader from "../common/preloader/Preloader";
import Fans from "./Fans";



class FansContainer extends React.Component {
    
  
    componentDidMount(){
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response=>{           
            this.props.toggleIsFetching(false)
            this.props.setFans(response.data.items)           
            this.props.setTotalFansCount(response.data.totalCount)           
        })         
    }
    onPageChanged=(pageNumber)=>{
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response=>{           
            this.props.toggleIsFetching(false)
             this.props.setFans(response.data.items)           
        })   
    }

    render(){       
        return<>      
        {this.props.isFetching ?  <Preloader/>:null} 
               
         <Fans 
                     totalFansCount={this.props.totalFansCount}
                     pageSize={this.props.pageSize}
                     currentPage={this.props.currentPage}
                     onPageChanged={this.onPageChanged}
                     fans={this.props.fans}
                     follow={this.props.follow}
                     unfollow={this.props.unfollow}
                     />
            </>
    }
}


let mapStateToProps = (state)=>{
    
    return{
        fans:state.fansPage.fans,
        pageSize:state.fansPage.pageSize,
        totalFansCount:state.fansPage.totalFansCount,
        currentPage:state.fansPage.currentPage,
        isFetching:state.fansPage.isFetching,
    }
}

let mapDispatchToProps = (dispatch)=>{
    return{
        follow:(fanId)=>{
            dispatch(followAC(fanId))
        },
        unfollow:(fanId)=>{
            dispatch(unfollowAC(fanId))
        },
        setFans:(fans)=>{
            dispatch(setFansAC(fans))
        },
        setCurrentPage:(pageNumber)=>{
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalFansCount:(totalCount)=>{
            dispatch(setTotalFansCountAC(totalCount))
        },
        toggleIsFetching:(isFetching)=>{
            dispatch(toggleIsFetchingAC(isFetching))
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(FansContainer)