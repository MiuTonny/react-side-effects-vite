// Step 1: Accept `joke` and `loading` as props
const JokeDisplay = ({ joke, loading }) => {
  // Step 2: If `loading` is true, display "Loading..."
  if (loading) {
    return (
      <div className="joke-container">
        <p>Loading...</p>
      </div>
    );
  }

  // Step 3: Otherwise, display the joke
  return (
    <div className="joke-container">
      <p>{joke || "No joke yet."}</p>
    </div>
  );
};

export default JokeDisplay;
