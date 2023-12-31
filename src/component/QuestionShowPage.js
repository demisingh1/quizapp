import React from 'react'
import '../App.css';
import { useQuizContext } from '../context/QuizAppContext'
import { shuffelArray } from '../utils';
import ChoisesList from './ChoisesList';

const QuestionShowPage = () => {
  const{status ,question = [],nextQuestion,score,loadQuiz,index} = useQuizContext()

  if(status === 'play'){
    // const choises = ([question?.correct_answer , question?.incorrect_answers]).flat();
    // console.log(choises)
  //  const Shuffel_Choises = shuffelArray(choises);
  //   const ModifiedQuestion = {
  //     question:question.question,
  //     choises:Shuffel_Choises,
  //     answer:question.correct_answer
  //   }
console.log(question)

    return (
      <div className='container'>
      <div className='row'>
      <header className='header'>
       <span className='index-count'>{index + 1}</span> <h2>Total Questions:{loadQuiz.length}</h2>
      <h2>socer:{score}</h2>
      </header>
        <h2>{question.question}</h2>
        <div className='options'>
          {question.choises.map((item,index)=>{
            return <ChoisesList key={index} item={item} />
          })}
        </div>
        <button className='btn btn-primary' onClick={nextQuestion}>NEXT</button>
        </div>
      </div>
    )
  }
  
}

export default QuestionShowPage