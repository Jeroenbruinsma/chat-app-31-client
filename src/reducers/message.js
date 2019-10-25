import { ADD_MESSAGES } from "../actions"

export default function message (state = [], action ={}){
    console.log("reducer", state, "action ", action.type , "PL", action.payload)
    switch(action.type){
        case ADD_MESSAGES:
            return action.payload

        default:
            return state
    }

}