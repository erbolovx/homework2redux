import {types} from "../types";
const initialState = {
    title:''
}
export default function titleReducer(state = initialState,action){
    switch (action.type){
        case types.CHANG_TITLE:
            return{...state, title: 'hello'}
        default: return state
    }
}