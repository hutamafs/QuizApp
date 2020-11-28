import { PAGE_SCORE , USER_ANSWER } from '../actions'

const initialState = {
    pageScore:null,
    userAnswer:null
}

function reducers( state = initialState , action) {
    switch(action.type) {
        case PAGE_SCORE:
            return {...state,pageScore:action.payload}

        case USER_ANSWER:
            return {...state,userAnswer:action.payload}

        default:
            return state
    }
}

export default reducers;