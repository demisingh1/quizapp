import React from 'react'
import { useQuizContext } from '../context/QuizAppContext'
import LoadingScreen from './LoadingScreen'

const QuizStartPage = () => {
 const{status,PlayQuiz} = useQuizContext()
  if(status === 'loading'){
    return (
      <div  className='loading-Screen' ><LoadingScreen /></div>
      )
  }
  
  
  if(status === 'active'){
    return (
      <div className='quiz-start-heading'>
        <h2>CLICK ON THE LOAD QUIZ BUTTON</h2> <br />
        <h2>TO START THE QUIZ</h2>
        <button className='btn btn-primary' onClick={PlayQuiz}>Load Quiz</button>

      </div>
    )
  }
}

export default QuizStartPage