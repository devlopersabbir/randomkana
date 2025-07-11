import { Footer } from "./components/shared/footer";
import { Header } from "./components/shared/header";
import { RandomKana } from "./components";

export default function App() {
  return (
    <div className="App">
      <header className="w-full py-4 border-b flex items-center justify-center shadow-md bg-white">
        <Header />
      </header>

      <RandomKana />

      <footer className="bg-white w-full">
        <Footer />
      </footer>
    </div>
  );
}
