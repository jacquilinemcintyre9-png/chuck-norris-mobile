import React from 'react';
import { ChuckJoke } from '../../api/chuckApi';

export const JokeCard: React.FC<{ joke: ChuckJoke }> = ({ joke }) => (
  <article
    style={{
      marginTop: 20,
      padding: '20px 22px',
      borderRadius: 20,
      background:
        'linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 0 24px rgba(255, 152, 0, 0.3)',
      fontSize: 16,
      lineHeight: 1.6,
      color: '#fff'
    }}
  >
    <div style={{ fontSize: 26, color: '#ff9800', marginBottom: 8 }}>❝</div>
    <p style={{ margin: 0 }}>{joke.value}</p>
    <div
      style={{
        fontSize: 26,
        color: '#ff9800',
        marginTop: 8,
        textAlign: 'right'
      }}
    >
      ❞
    </div>

    <div
      style={{
        marginTop: 10,
        fontSize: 12,
        color: '#ffcc80',
        borderTop: '1px solid rgba(255, 152, 0, 0.3)',
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
