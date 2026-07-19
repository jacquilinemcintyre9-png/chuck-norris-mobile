import { useEffect, useState } from "react";
import { Avatar } from "./Avatar";
import { translateJoke } from "../utils/translateJoke";
import { addToCache, isCached } from "../utils/jokeCache";

export function Screen() {
  const [joke, setJoke] = useState("Загрузка факта...");

  async function fetchJoke() {
    const res = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await res.json();

    if (isCached(data.value)) {
      return fetchJoke(); // берём новую шутку
    }

    addToCache(data.value);

    const translated = translateJoke(data.value);
    setJoke(translated);

    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
  }

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 p-6">
      <Avatar />

      <div className="text-center max-w-md">
        <h2 className="text-2xl font-semibold text-white mb-2 drop-shadow-lg">
          Случайный факт о Чаке Норрисе
        </h2>
        <p className="text-white/90 text-lg leading-relaxed drop-shadow-md">
          {joke}
        </p>
      </div>

      <button
        onClick={fetchJoke}
        className="px-6 py-3 bg-white/10 text-white rounded-xl backdrop-blur-xl border border-white/20 shadow-lg hover:bg-white/20 transition active:scale-95"
      >
        Новый факт
      </button>
    </div>
  );
}
