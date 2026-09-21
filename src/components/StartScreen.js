import React from 'react';

export default function StartScreen({ onStart }) {
    const highScore = localStorage.getItem('quiz_high_score') || 0;

    return (
        <div className="card text-center">
            <h1>Quiz da Lombrada</h1>
            <p>Teste seus conhecimentos sobre a Lombrada!</p>
            {highScore > 0 && (
                <div className="high-score">
                    Melhor Pontuação: <strong>{highScore}</strong> de 5 acertos
                </div>
            )}
            <button className="btn" onClick={onStart}>Começar Quiz</button>
        </div>
    );
}