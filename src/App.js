import "./App.css";
import About from "./Components/About";

function App() {
  return (
    <div className="App">
      <main>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </main>
      <About />
    </div>
  );
}

export default App;
