import Cards from "./components/Cards";
function App() {
  return (
    <>
      <div className="memory">
        <h1>Memory-Game</h1>
        <p>Click on the images without repeating to start the game!</p>
        <Cards />
      </div>
    </>
  );
}

export default App;
