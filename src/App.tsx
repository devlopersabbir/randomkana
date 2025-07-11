import { Footer } from "./components/shared/footer";
import { Header } from "./components/shared/header";
import { RandomKana } from "./components";
import GithubRepo from "./components/shared/github-repo";

export default function App() {
  return (
    <div className="App">
      <header className="w-full py-4 border-b flex items-center justify-center shadow-md bg-white">
        <Header />
        <GithubRepo className={"ml-5"} />
      </header>

      <RandomKana />

      <Footer />
    </div>
  );
}
