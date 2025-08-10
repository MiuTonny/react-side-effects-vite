import { useState, useEffect } from "react";
import JokeDisplay from "./components/JokeDisplay";
import FetchButton from "./components/FetchButton";

function App() {
  // Step 1: Create state variables for `joke` and `loading`
  const [joke, setJoke] = useState("");       // store the joke text
  const [loading, setLoading] = useState(false); // shows "Loading..."
  const [error, setError] = useState(null);   // optional: holds any error message

  // Step 3: Define a function that fetches a programming joke from an API
  const fetchJoke = () => {
    setLoading(true);
    setError(null);
    fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
      .then((res) => res.json())
      .then((data) => {
        setJoke(data.joke);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching joke:", err);
        setError("Failed to fetch a joke.");
        setLoading(false);
      });
  };

  // Step 2: Fetch a joke when the component mounts
  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="app" style={{ fontFamily: "sans-serif", padding: 20 }}>
      <h1>Programming Jokes</h1>

      {/* Step 4: Pass the necessary props to JokeDisplay */}
      <JokeDisplay loading={loading} joke={joke} />

      {/* Step 5: Pass the function to FetchButton so it can fetch a new joke on click */}
      <FetchButton fetchJoke={fetchJoke} />

      {error && <p style={{ color: "crimson" }}>{error}</p>}
    </div>
  );
}

export default App;

