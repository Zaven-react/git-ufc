import React from "react";
import { connect } from "react-redux";
import { followAC, setFansAC, unfollowAC } from "../../Redux/fanc-reducer";
import Fans from "./Fans";

let mapStateToProps = (state)=>{
    return{
        fans:state.fansPage.fans
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
        }
    }
}

const FansContainer = connect(mapStateToProps,mapDispatchToProps)(Fans)
export default FansContainer;