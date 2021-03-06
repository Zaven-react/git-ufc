const ADD_NEXT = "ADD-NEXT";
const UPDATER = "UPDATER";

let initialState = {
  fighters: [
    { name: "Mcgregor", id: 1 },
    { name: "Khabib", id: 2 },
    { name: "Diaz", id: 3 },
    { name: "Masvidal", id: 4 },
    { name: "Usman", id: 5 },
  ],
  country: [
    { name: "Ireland", id: 1 },
    { name: "Dagestan", id: 2 },
    { name: "Mexica", id: 3 },
    { name: "Cuba/Usa", id: 4 },
    { name: "Nigeria", id: 5 },
  ],
  newName: "",
};

const rankingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEXT:
      let newFighter = {
        name: state.newName,
        id: 6,
      };
      state.fighters.push(newFighter);
      state.newName = "";
      return state;
    case UPDATER:
      state.newName = action.newNew;
      return state;
    default:
      return state;
  }
};

export const addNextAC = () => ({
  type: ADD_NEXT,
});
export const updaterAC = (text) => ({
  type: UPDATER,
  newNew: text,
});

export default rankingsReducer;
