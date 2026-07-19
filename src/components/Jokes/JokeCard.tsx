import React from 'react';
import { ChuckJoke } from '../../api/chuckApi';

interface JokeCardProps {
  joke: ChuckJoke;
}

export const JokeCard: React.FC<JokeCardProps> = ({ joke }) => {
  return (
    <article
      style={{
        background: '#121212',
        borderRadius: 16,
        padding: '16px 18px',
        color: '#ffffff',
        boxShadow: '0 12px 30px rgba(0, 0, 0, 0.6)',
        fontSize: 16,
        lineHeight: 1.5,
        marginTop: 16
      }}
    >
      <p>{joke.value}</p>
      {joke.categories?.[0] && (
        <span
          style={{
            display: 'inline-block',
            marginTop: 12,
            padding: '4px 10px',
            borderRadius: 999,
            background: '#ff9800',
            color: '#000',
            fontSize: 12,
            fontWeight: 600
          }}
        >
          Категория: {joke.categories[0]}
        </span>
      )}
    </article>
  );
};
