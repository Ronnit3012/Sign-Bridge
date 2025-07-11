import "./App.css";
import Container from "./components/container.jsx";

function App() {
  return (
    <div className="app-layout">
      <aside className="app-sidebar">
        <div className="app-title">Sign-Bridge</div>
      </aside>
      <main className="app-main">
        <Container />
      </main>
    </div>
  );
}

export default App;
