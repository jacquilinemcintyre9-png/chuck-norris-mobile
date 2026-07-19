import React from 'react';
import { ChuckJoke } from '../../api/chuckApi';

export const JokeCard: React.FC<{ joke: ChuckJoke }> = ({ joke }) => (
  <article
    style={{
      marginTop: 20,
      padding: '20px 22px',
      borderRadius: 22,
      background:
        'linear-gradient(145deg, rgba(255,255,255,0.08), rgba(0,0,0,0.6))',
      backdropFilter: 'blur(14px)',
      boxShadow:
        '0 0 30px rgba(255, 152, 0, 0.45), 0 0 80px rgba(0, 0, 0, 0.9)',
      border: '1px solid rgba(255, 255, 255, 0.12)',
      fontSize: 16,
      lineHeight: 1.6,
      color: '#ffffff'
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
        marginTop: 12,
        fontSize: 12,
        color: '#ffcc80',
        borderTop: '1px solid rgba(255, 152, 0, 0.4)',
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
