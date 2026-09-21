import React from 'react';

export default function Quiz({
    questionData,
    currentQuestion,
    totalQuestions,
    selectedAnswer,
    onSelectAnswer,
    onNextQuestion
}) {

    const progressPercent = ((currentQuestion + 1) / totalQuestions) * 100;

    return (
        <div className="card">
            <div className="progress-container">
                <div className="progress-bar" style={{ width: `${progressPercent}%` }}></div>
            </div>

            <span className="quiz-status">Pergunta {currentQuestion + 1} de {totalQuestions}</span>
            <h2>{questionData.question}</h2>

            <div className="options-list">
                {questionData.options.map((option, index) => {
                    let optionClass = "option-btn";

                    if (selectedAnswer !== null) {
                        if (index === questionData.correctAnswer) {
                            optionClass += " correct";
                        } else if (index === selectedAnswer) {
                            optionClass += " incorrect";
                        } else {
                            optionClass += " disabled";
                        }
                    }

                    return (
                        <button
                            key={index}
                            className={optionClass}
                            onClick={() => onSelectAnswer(index)}
                            disabled={selectedAnswer !== null}
                        >
                            {option}
                        </button>
                    );
                })}
            </div>

            {selectedAnswer !== null && (
                <button className="btn next-btn" onClick={onNextQuestion}>
                    {currentQuestion + 1 === totalQuestions ? "Ver Resultado" : "Próxima Pergunta"}
                </button>
            )}
        </div>
    );
}