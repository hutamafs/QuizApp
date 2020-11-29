import {  SET_QUESTIONS , PAGE_SCORE , USER_ANSWER , SET_NAME , SET_SCORE } from '.'
import { One , Two , Three , Four , Five , Six , Seven , Eight , Nine , Ten , Eleven, Twelve} from '../../screens/';

export const setQuestions = () => {
    let questions = [<Ten/>,<Eleven/>,<Twelve/>,<One/>,<Two/>,<Three/>,<Four/>,<Five/>,<Six/>,<Seven/>,<Eight/>,<Nine/>];
    let currentIndex = questions.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
        
            temporaryValue = questions[currentIndex];
            questions[currentIndex] = questions[randomIndex];
            questions[randomIndex] = temporaryValue;
          }
    return {
        type:SET_QUESTIONS,
        payload:questions
    }
}

export const setPageScore = (score) => {
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

export const setName = (name) => {
    return {
        type:SET_NAME,
        payload:name
    }
}

export const setGameScore = (score) => {
    return {
        type:SET_SCORE,
        payload:score
    }
}