import React, { useState, useEffect } from "react";

import ApiClient from "../services/api-file";

interface Game {
  id: number;
  name: string;
}
interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setgames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    ApiClient.get<FetchGamesResponse>("./games")
      .then((res) => setgames(res.data.results))
      .catch((err) => setError(err.message));
  });
  return (
    <>
      {error && <Text>{error}</Text>}{" "}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
