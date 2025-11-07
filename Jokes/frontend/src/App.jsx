import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchJokes = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("/api/jokes");
      setJokes(response.data);
    } catch (err) {
      setError(err.message || "Failed to fetch jokes");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchJokes();
  }, [fetchJokes]);

  return (
    <div className="app">
      <header className="header">
        <h1 className="title">😂 Joke Generator</h1>
        <p className="subtitle">Your daily dose of humor!</p>

        <button
          onClick={fetchJokes}
          disabled={loading}
          className={`refresh-btn ${loading ? "disabled" : ""}`}
        >
          {loading ? "Refreshing..." : "Get New Jokes"}
        </button>
      </header>

      {error && <p className="error-msg">⚠️ {error}</p>}

      {loading && jokes.length === 0 ? (
        <p className="loading">Loading jokes...</p>
      ) : jokes.length === 0 ? (
        <p className="empty-msg">No jokes found 😔</p>
      ) : (
        <div className="jokes-grid">
          {jokes.map((joke) => (
            <div key={joke.id} className="joke-card">
              <div className="joke-header">
                <h2>{joke.type?.toUpperCase() || "General"}</h2>
                <span className="joke-id">#{joke.id}</span>
              </div>
              <p className="setup">🗣️ {joke.setup}</p>
              <p className="punchline">😂 {joke.punchline}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
