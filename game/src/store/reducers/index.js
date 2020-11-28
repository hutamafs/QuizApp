import { SET_SCORE , PAGE_SCORE , USER_ANSWER } from '../actions'

const initialState = {
    score:0,
    pageScore:null,
    userAnswer:null
}

function reducers( state = initialState , action) {
    switch(action.type) {
        case SET_SCORE:
            return {...state,score:action.payload}

        case PAGE_SCORE:
            return {...state,pageScore:action.payload}

        case USER_ANSWER:
            return {...state,userAnswer:action.payload}

        default:
            return state
    }
}

export default reducers;