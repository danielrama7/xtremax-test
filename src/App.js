import "./App.css";
import MainPage from "./pages/MainPage";
import SelectedProvider from "./context/context";

function App() {
  return (
    <div className="App">
      <SelectedProvider>
        <MainPage />
      </SelectedProvider>
    </div>
  );
}

export default App;
