import { Header } from "./components/Header";
import { Screen } from "./components/Screen";
import { Navigation } from "./components/Navigation";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex flex-col gap-6">
      <Header />
      <Screen />
      <Navigation />
    </div>
  );
}
