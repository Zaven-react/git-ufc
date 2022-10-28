const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_FANS = "SET_FANS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_FANS_COUNT = "SET_TOTAL_FANS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
  fans: [
  
   
  ],
  pageSize:10,
  totalFansCount:0,
  currentPage:1,
  isFetching:false,
 
};

const fansReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
        return  {
            ...state,
            fans:state.fans.map(f=>{
                if(f.id === action.fanId){
                    return{...f,followed:true}
                }
                return f
            })
        }
    case UNFOLLOW:
        return  {
            ...state,
            fans:state.fans.map(f=>{
                if(f.id === action.fanId){
                    return{...f,followed:false}
                }
                return f
            })
        }
    case SET_FANS:{
        return {...state,fans:action.fans}
    }
    case SET_CURRENT_PAGE:{
      return {...state,currentPage:action.currentPage}
    }
    case SET_TOTAL_FANS_COUNT:{
      return {...state,totalFansCount:action.count}
    }
    case TOGGLE_IS_FETCHING:{
      return {...state,isFetching:action.isFetching}
    }
   
    default:
      return state;
  }
};

export const followAC = (fanId) => ({
  type: FOLLOW,
  fanId
});
export const unfollowAC = (fanId) => ({
  type: UNFOLLOW, 
  fanId
});
export const setFansAC = (fans) => ({
    type: SET_FANS, 
    fans
  });
  export const setCurrentPageAC = (currentPage) => ({
    type: SET_CURRENT_PAGE, 
    currentPage
  });
  export const setTotalFansCountAC = (totalFansCount) => ({
    type: SET_TOTAL_FANS_COUNT, 
    count:totalFansCount
  });
  export const toggleIsFetchingAC = (isFetching) => ({
    type: TOGGLE_IS_FETCHING, 
    isFetching
  });

export default fansReducer;
