export function translateJoke(joke: string) {
  let text = joke;

  text = text.replace(/Chuck Norris/gi, "Чак Норрис");

  const dictionary = [
    ["roundhouse kick", "удар ногой с разворота"],
    ["can’t", "не может"],
    ["can", "может"],
    ["the universe", "всю вселенную"],
    ["fear", "страх"],
    ["death", "смерть"],
    ["fact", "факт"],
    ["truth", "правду"],
    ["joke", "шутку"],
    ["power", "силу"],
    ["strength", "мощь"],
    ["legend", "легенду"],
    ["destroy", "уничтожить"],
    ["create", "создать"],
  ];

  dictionary.forEach(([en, ru]) => {
    text = text.replace(new RegExp(en, "gi"), ru);
  });

  return text;
}
