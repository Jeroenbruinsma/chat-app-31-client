import { USER_LOGIN } from "../actions"

export default function user (state = [], action ={}){
     switch(action.type){
        case USER_LOGIN:
            return action.payload

        default:
            return state
    }

}