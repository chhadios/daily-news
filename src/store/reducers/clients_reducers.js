import {GET_CLIENTS} from '../types';


export default function userReducer(state={},action){
    switch(action.type){
        case GET_CLIENTS:
            return {...state,...action.payload}
        default:
            return state
    }
}