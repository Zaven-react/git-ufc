import React from "react";
import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setFansAC, unfollowAC,setTotalFansCountAC } from "../../Redux/fanc-reducer";
import Fans from "./Fans";

let mapStateToProps = (state)=>{
    
    return{
        fans:state.fansPage.fans,
        pageSize:state.fansPage.pageSize,
        totalFansCount:state.fansPage.totalFansCount,
        currentPage:state.fansPage.currentPage,
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
        }
    }
}

const FansContainer = connect(mapStateToProps,mapDispatchToProps)(Fans)
export default FansContainer;