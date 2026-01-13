//This file contains an array which has data regarding the images like image source, name and individual address it gets imported by GameBoard.js.

export default function Data({ score, bestScore }) {
  return (
    <div className="spread">
      <>
        Best-Score:<span id="bestScore">{bestScore}</span>
      </>
      <>
        {" "}
        Score:
        <span id="score">{score}</span>
      </>
    </div>
  );
}
