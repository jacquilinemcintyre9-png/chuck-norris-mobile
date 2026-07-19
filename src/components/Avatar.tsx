import { useEffect, useState } from "react";

const chuckImages = [
  "/assets/chuck1.jpg",
  "/assets/chuck2.jpg",
  "/assets/chuck3.jpg",
  "/assets/chuck4.jpg",
  "/assets/chuck5.jpg",
  "/assets/chuck6.jpg",
  "/assets/chuck7.jpg",
  "/assets/chuck8.jpg",
  "/assets/chuck9.jpg",
  "/assets/chuck10.jpg",
];
;
export function Avatar() {
  const [current, setCurrent] = useState(0);
  const [anim, setAnim] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnim(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % chuckImages.length);
        setAnim(false);
      }, 400);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <img
      src={chuckImages[current]}
      alt="Chuck Norris"
      className={`w-40 h-40 rounded-full object-cover shadow-xl transition-all duration-500 ${
        anim ? "opacity-0 blur-md -translate-y-2" : "opacity-100 blur-0 translate-y-0"
      }`}
    />
  );
}
