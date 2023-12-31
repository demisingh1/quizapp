import { LOAD_QUIZ, PLAY_QUIZ,LOADING, NEXT_QUESTION, CHOOSE_ANSWER } from "../actions"

const reducer = (state , action) =>{
    if(action.type === LOADING){
        return{...state , status:"loading"}
    }
if(action.type === LOAD_QUIZ){
    return {...state , quiz:action.payload, status:'active'}
}
if(action.type === PLAY_QUIZ){
    return {...state,loadQuiz:action.payload ,status:"play"}
}
if(action.type === NEXT_QUESTION){
    return{...state, index:action.payload + 1,choosedAnswer:null }
}
if(action.type === CHOOSE_ANSWER){
    const {question ,ans,score} = action.payload
    if(ans === question.answer){

    return {...state, choosedAnswer:ans, score:score + 1}
    }
    return {...state, choosedAnswer:ans}
}
}

export default reducer