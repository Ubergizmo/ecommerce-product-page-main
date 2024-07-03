import "./App.css";
import NavBar from "./components/NavBar";
import TheMain from "./components/TheMain";
import { CounterProvider } from "./contexts/CounterContext";

function App() {
  return (
    <CounterProvider>

    <>
      <NavBar />
      <div className="mx-20 h-px bg-Dark-grayish-blue lg:hidden"></div>
      <TheMain />
    </>
    </CounterProvider>
  );
}

export default App;
