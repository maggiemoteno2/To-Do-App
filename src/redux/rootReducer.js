const initialState = {
  allDetails: []
}

function rootReducer (state = initialState, action) {
  switch (action.payload) {
    case "ADD_DETAILS": {

      return {
        ...state,
        allDetails: [...state.allDetails, action.payload]
       
      }

    }
    default: {
      return state
    }
  }

}

export default rootReducer;