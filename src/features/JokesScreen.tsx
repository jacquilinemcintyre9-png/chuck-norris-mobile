import React, { useEffect, useState } from 'react';
import { useChuckCategories } from '../hooks/useChuckCategories';
import { useChuckRandomJoke } from '../hooks/useChuckRandomJoke';
import { JokeCard } from '../components/Jokes/JokeCard';
import { CategoryList } from '../components/Jokes/CategoryList';
import { Loader } from '../components/Common/Loader';
import { ErrorMessage } from '../components/Common/ErrorMessage';
import { ChuckCategory } from '../api/chuckApi';

export const JokesScreen: React.FC = () => {
  const { categories, loading: catLoading, error: catError } =
    useChuckCategories();
  const {
    joke,
    loading: jokeLoading,
    error: jokeError,
    fetchJoke
  } = useChuckRandomJoke();

  const [activeCategory, setActiveCategory] = useState<ChuckCategory | null>(
    null
  );

  useEffect(() => {
    fetchJoke();
  }, [fetchJoke]);

  const handleSelectCategory = (category: ChuckCategory) => {
    setActiveCategory(category);
    fetchJoke(category);
  };

  return (
    <main
      style={{
        minHeight: '100vh',
        padding: 16,
        color: '#ffffff',
        maxWidth: 480,
        margin: '0 auto'
      }}
    >
      <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>
        Chuck Norris: шутки на каждый день
      </h1>

      <p style={{ fontSize: 14, color: '#b0bec5', marginBottom: 16 }}>
        Выберите категорию или нажмите «Случайная шутка».
      </p>

      {catLoading && <Loader text="Загружаем категории..." />}
      {catError && <ErrorMessage message={catError} />}

      {categories.length > 0 && (
        <CategoryList
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={handleSelectCategory}
        />
      )}

      <button
        onClick={() => fetchJoke(activeCategory ?? undefined)}
        disabled={jokeLoading}
        style={{
          width: '100%',
          border: 'none',
          outline: 'none',
          borderRadius: 12,
          padding: '12px 16px',
          fontSize: 16,
          fontWeight: 600,
          cursor: 'pointer',
          background: 'linear-gradient(135deg, #ff9800, #ff5722)',
          color: '#000',
          boxShadow: '0 10px 24px rgba(255, 152, 0, 0.4)',
          marginBottom: 16
        }}
      >
        {jokeLoading ? 'Загружаем...' : 'Случайная шутка'}
      </button>

      {jokeError && <ErrorMessage message={jokeError} />}

      {joke && <JokeCard joke={joke} />}
    </main>
  );
};
