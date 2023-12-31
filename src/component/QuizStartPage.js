import React from 'react'
import { useQuizContext } from '../context/QuizAppContext'

const QuizStartPage = () => {
 const{status,PlayQuiz} = useQuizContext()
  if(status === 'loading'){
    return (
      <div>loading...</div>
      )
  }
  
  
  if(status === 'active'){
    return (
      <button onClick={PlayQuiz}>Load Quiz</button>
    )
  }
}

export default QuizStartPage