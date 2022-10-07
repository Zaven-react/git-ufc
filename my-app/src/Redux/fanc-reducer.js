const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_FANS = "SET_FANS";

let initialState = {
  fans: [
  
   
  ],
 
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
        return {...state,fans:[...state.fans, ...action.fans]}
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

export default fansReducer;
