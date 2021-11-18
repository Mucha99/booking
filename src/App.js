import Header from "./components/layout/Header/Header";
import Menu from "./components/layout/Menu/Menu";
import Hotels from "./components/views/Hotels/Hotels";

function App() {
  return (
    <div className="App">
      <Menu />
      <Header />
      <Hotels />
    </div>
  );
}

export default App;
