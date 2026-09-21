import React, { useState } from 'react';
import { questions } from './data/questions';
import StartScreen from './components/StartScreen';
import Quiz from './components/Quiz';
import Results from './components/Results';
import './App.css';

export default function App() {
  const [gameState, setGameState] = useState('start');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const startQuiz = () => {
    setGameState('quiz');
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
  };

  const handleSelectAnswer = (index) => {
    setSelectedAnswer(index);

    if (index === questions[currentQuestion].correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedAnswer(null);
    } else {
      const currentHighScore = localStorage.getItem('quiz_high_score') || 0;
      const finalScore = selectedAnswer === questions[currentQuestion].correctAnswer ? score : score;

      if (finalScore > currentHighScore) {
        localStorage.setItem('quiz_high_score', finalScore);
      }

      setGameState('results');
    }
  };

  return (
    <div className="app-container">
      {gameState === 'start' && <StartScreen onStart={startQuiz} />}

      {gameState === 'quiz' && (
        <Quiz
          questionData={questions[currentQuestion]}
          currentQuestion={currentQuestion}
          totalQuestions={questions.length}
          selectedAnswer={selectedAnswer}
          onSelectAnswer={handleSelectAnswer}
          onNextQuestion={handleNextQuestion}
        />
      )}

      {gameState === 'results' && (
        <Results
          score={score}
          totalQuestions={questions.length}
          onRestart={startQuiz}
        />
      )}
    </div>
  );
}