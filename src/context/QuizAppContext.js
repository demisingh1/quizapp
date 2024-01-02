import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/QuizReducer";
import { CHOOSE_ANSWER, LOADING, LOAD_QUIZ, NEXT_QUESTION, PLAY_QUIZ } from "../actions";
import { shuffelArray } from "../utils";
const QuizContext = createContext();
const initialState = {
quiz:[],
loadQuiz:[],
status: 'loading',// loading, active, play,error, finished
index:0,
choosedAnswer:null,
score:0,
}


export const QuizProvider = ({children})=>{
    const[state , dispatch] = useReducer(reducer , initialState);
    const {quiz,index,loadQuiz,score} = state;
    const question = loadQuiz[index];

    useEffect(()=>{
        dispatch({type:LOADING})
       fetch("https://opentdb.com/api.php?amount=50&type=multiple")
       .then((res)=> res.json())
       .then((data)=> dispatch({type:LOAD_QUIZ , payload:data.results}))
       .catch();
    },[]);
const PlayQuiz = ()=>{
  const QuizMod = quiz.map((item)=> {
    const choises = ([item?.correct_answer , item?.incorrect_answers]).flat();
      // console.log(choises)
     const Shuffel_Choises = shuffelArray(choises);
    return {question:item.question, choises:Shuffel_Choises, answer:item.correct_answer}
  } )
  dispatch({type:PLAY_QUIZ , payload:QuizMod})
}
const nextQuestion = ()=>{
  dispatch({type:NEXT_QUESTION, payload:index})
}
const selectAnswer = (e)=>{
  e.preventDefault();
  let ans = e.target.innerText
  dispatch({type:CHOOSE_ANSWER, payload:{ans, question, score}})
  // console.log(e.target.innerText)
}

     return <QuizContext.Provider value = {{...state,question,PlayQuiz,nextQuestion,selectAnswer,dispatch }}>
        {children}
     </QuizContext.Provider>
}

export const useQuizContext = () =>{
    return useContext(QuizContext);
}