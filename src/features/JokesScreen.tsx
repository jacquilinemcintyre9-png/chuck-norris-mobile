import React, { useEffect, useState } from 'react';
import { useChuckCategories } from '../hooks/useChuckCategories';
import { useChuckRandomJoke } from '../hooks/useChuckRandomJoke';
import { JokeCard } from '../components/Jokes/JokeCard';
import { CategoryList } from '../components/Jokes/CategoryList';
import { Loader } from '../components/Common/Loader';
import { ErrorMessage } from '../components/Common/ErrorMessage';
import { ChuckCategory } from '../api/chuckApi';
import { StatusBar } from '../components/Layout/StatusBar';
import { HeroHeader } from '../components/Layout/HeroHeader';
import { ChuckAvatar } from '../components/Jokes/ChuckAvatar';
import { PrimaryActionBar } from '../components/Actions/PrimaryActionBar';
import { BottomNav } from '../components/Layout/BottomNav';

type TabKey = 'jokes' | 'categories' | 'favorites';

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
  const [activeTab, setActiveTab] = useState<TabKey>('jokes');

  useEffect(() => {
    fetchJoke();
  }, [fetchJoke]);

  const handleNewJoke = () => {
    fetchJoke(activeCategory ?? undefined);
  };

  const handleSelectCategory = (category: ChuckCategory) => {
    setActiveCategory(category);
    fetchJoke(category);
    setActiveTab('categories');
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'radial-gradient(circle at top, #1f2933 0, #000000 55%)',
        color: '#ffffff'
      }}
    >
      <StatusBar />
      <main
        style={{
          padding: 12,
          maxWidth: 480,
          margin: '0 auto',
          paddingBottom: 24
        }}
      >
        <HeroHeader />
        <ChuckAvatar />

        {catLoading && <Loader text="Загружаем категории..." />}
        {catError && <ErrorMessage message={catError} />}

        {categories.length > 0 && (
          <CategoryList
            categories={categories}
            activeCategory={activeCategory}
            onSelectCategory={handleSelectCategory}
          />
        )}

        {jokeError && <ErrorMessage message={jokeError} />}
        {joke && <JokeCard joke={joke} />}

        <PrimaryActionBar loading={jokeLoading} onNewJoke={handleNewJoke} />

        <BottomNav active={activeTab} onChange={setActiveTab} />
      </main>
    </div>
  );
};
