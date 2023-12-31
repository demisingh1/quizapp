import React from 'react'
import { useQuizContext } from '../context/QuizAppContext'


const ChoisesList = ({item }) => {
  
const {choosedAnswer,selectAnswer, question} = useQuizContext()
// console.log(question)
  return (
    <div>
     
    <button className = {`btn btn-choise ${choosedAnswer === item ?"active" : "" }`} disabled = {choosedAnswer && true} onClick={selectAnswer} >{item}</button>
    {choosedAnswer === null ? "" : item === question.answer ? <h2 className='true'>RIGHT</h2> : <h2 className='false'>WRONG</h2>}
    </div>
  )
}

export default ChoisesList