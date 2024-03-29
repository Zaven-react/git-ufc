const UPDATER_NEW_NAME = "UPDATER-NEW-NAME";
const UPDATER_NEW_NAME_TWO = "UPDATER-NEW-NAME-TWO";
const ADD_NEW_NAME = "ADD-NEW-NAME";

let initialState = {
  first: [{ name: "Diaz" }, { name: "Chimaev" }, { name: "Masvidal" }],
  second: [{ name: "Ferguson" }, { name: "Holland" }, { name: "Usman" }],
  newName: "",
  newName1: "",
};

const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATER_NEW_NAME:
      return{
        ...state,
        newName:action.headlinerOne
      }      
    case UPDATER_NEW_NAME_TWO:
      return{
        ...state,
        newName1:action.headlinerTwo
      }
  
    case ADD_NEW_NAME:
      let nName = state.newName;
      state.newName = "";
      let nName1 = state.newName1;
      state.newName1 = "";
      if (nName === "") {
        state.first.push({ name: "TBA" });
      } else {
        state.first.push({ name: nName });
      }

      if (nName1 === "") {
        state.second.push({ name: "TBA" });
      } else {
        state.second.push({ name: nName1 });
      }
      return {...state};
    default:
      return state;
  }
};

export const addheadlinerAC = () => ({
  type: ADD_NEW_NAME,
});
export const updaterNNAC = (headlinerOne) => ({
  type: UPDATER_NEW_NAME,
  headlinerOne: headlinerOne,
});
export const updaterNNTWOAC = (headlinerTwo) => ({
  type: UPDATER_NEW_NAME_TWO,
  headlinerTwo: headlinerTwo,
});

export default eventsReducer;
