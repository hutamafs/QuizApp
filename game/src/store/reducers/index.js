import { SET_QUESTIONS, PAGE_SCORE , USER_ANSWER , SET_NAME , SET_SCORE } from '../actions'

const initialState = {
    name:'',
    score:0,
    questions:[],
    pageScore:null,
    userAnswer:null
}

function reducers( state = initialState , action) {
    switch(action.type) {
        case SET_NAME:
            return {...state,name:action.payload};

        case SET_SCORE:
            return {...state,score:action.payload};

        case SET_QUESTIONS:
            return {...state,questions:action.payload};

        case PAGE_SCORE:
            return {...state,pageScore:action.payload};

        case USER_ANSWER:
            return {...state,userAnswer:action.payload};

        default:
            return state
    }
}

export default reducers;