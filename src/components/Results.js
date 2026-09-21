import React from 'react';

export default function Results({ score, totalQuestions, onRestart }) {
    const percentage = Math.round((score / totalQuestions) * 100);

    return (
        <div className="card text-center">
            <h2>Quiz Concluído!</h2>
            <div className="result-score">
                <span>Você acertou</span>
                <strong>{score} / {totalQuestions}</strong>
                <span>perguntas ({percentage}%)</span>
            </div>
            <button className="btn" onClick={onRestart}>Refazer Quiz</button>
        </div>
    );
}