import { useEffect, useState } from "react";
import './App.css'
import question from "./assets/question.json";
import Question from "./components/question";
import Scorescreen from "./components/scorescreen";

function App() {
  const [questions, setQuestions] = useState(question);
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [allAnswers, setallAnswers] = useState(question);
  const [score, setScore] = useState(0);
  useEffect(() => {
    console.log(allAnswers);
    let sc = 0;
    allAnswers.forEach((element) => {
      console.log(element.ans);
      if (element.answer === element.ans) {
        sc++;
      }
    });
    setScore(sc);
  }, [allAnswers]);
  useEffect(() => {
    if (currentQuestion >= questions.length) {
    }
  }, [currentQuestion]);

  return (
    <div style={{backgroundColor:'#904586',
    width:'100dvw',
    height:'100dvh',
    display:'grid',
    placeItems:'center',


    }}>
    <div>
    <div
        style={{
          backgroundColor:'white',
          borderRadius:'12px',
          padding:'16px',
          overflow:'hidden',
          minWidth: "600px",
          minHeight: "500px",
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
        }}
      >
        {currentQuestion < questions.length ? (
          <Question
            data={questions[currentQuestion]}
            selectedAnswers={allAnswers}
            callback={(sa) => {
              setallAnswers((Answers) => {
                return Answers.map((ans) => {
                  return sa.question === ans.question
                    ? { ...ans, ans: sa.ans }
                    : { ...ans };
                });
              });
            }}
          />
        ) : (
          <Scorescreen score={score} total={questions.length} />
        )}
      </div>
      <div style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        padding:'16px',
        gap:'32px',
      }}>
        {currentQuestion === question.length ? (
          <button 
            style={{
              maxWidth:'250px',
              flex:'1',
            }}
            onClick={() => {
              setcurrentQuestion(0);
              setallAnswers(questions)
              setScore(0)
            }}
          >
            Play Again
          </button>
        ) : (
          <>
            <button
              style={{
              maxWidth:'250px',
              flex:'1',
            }}
              disabled={!currentQuestion}
              onClick={() => {
                setcurrentQuestion((previous) => previous - 1);
              }}
            >
              Previous
            </button>
            <button
              style={{
              maxWidth:'250px',
              flex:'1',
            }}
              onClick={() => {
                setcurrentQuestion((previous) => previous + 1);
              }}
            >
              {currentQuestion === questions.length - 1 ? "Submit" : "Next"}
            </button>
          </>
        )}
      </div>

    </div>
      {/* {
        questions.map((data, index)=>{
          return <Question data={data} key={index}/>
        }) 
      } */}
    </div>
  );
}

export default App;
