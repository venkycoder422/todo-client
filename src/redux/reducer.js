import { LOGIN, LOGOUT ,SIGNUP} from "./actionTypes";

const initialState = {
    userData : false,
    signUp : false
}
export const reducer = (state = initialState , action) => {
    switch (action.type) {
        case LOGIN: return{
            ...state,
            userData: action.payload,
           
        }
        case LOGOUT : return{
            ...state,
            userData: initialState
        }
    
       default: return state
    }
}