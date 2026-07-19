import React from 'react';
import { ChuckJoke } from '../../api/chuckApi';

interface JokeCardProps {
  joke: ChuckJoke;
}

export const JokeCard: React.FC<JokeCardProps> = ({ joke }) => (
  <article
    style={{
      marginTop: 12,
      padding: '16px 18px',
      borderRadius: 18,
      background: 'rgba(18, 18, 18, 0.95)',
      boxShadow: '0 14px 32px rgba(0, 0, 0, 0.8)',
      border: '1px solid rgba(255, 255, 255, 0.06)',
      fontSize: 15,
      lineHeight: 1.6
    }}
  >
    <div style={{ fontSize: 22, marginBottom: 8 }}>❝</div>
    <p style={{ margin: 0 }}>{joke.value}</p>
    <div style={{ fontSize: 22, marginTop: 8, textAlign: 'right' }}>❞</div>

    <div
      style={{
        marginTop: 10,
        fontSize: 11,
        color: '#b0bec5',
        borderTop: '1px solid rgba(176, 190, 197, 0.3)',
        paddingTop: 6,
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <span>ФАКТ</span>
      <span>#ЧАКНОРРИС</span>
    </div>
  </article>
);
