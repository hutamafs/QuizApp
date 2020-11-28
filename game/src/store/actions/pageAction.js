import { SET_SCORE , PAGE_SCORE , USER_ANSWER } from '.'

// export const setScore = (score) => {
//     return {
//         type:SET_SCORE,
//         payload:score
//     }
// }

export const setPageScore = (score) => { // boolean jawaban nya , bener ato gak , dari tiap page
    return {
        type:PAGE_SCORE,
        payload:score
    }
}

export const setUserAnswer = (answer) => {
    return {
        type:USER_ANSWER,
        payload:answer
    }
}