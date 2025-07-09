import React, { Component, useEffect, useState } from "react";

export default function RicknMoty() {
  const api = "https://rickandmortyapi.com/api/character";
  const [characterCount, setCharacterCount] = useState(0);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(api);
        const data = await response.json();
        setCharacterCount(data.info.count);
        setCharacters(data.results);
      } catch (error) {
        console.error("Failed to fetch characters:", error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>Rick and Morty Characters</h1>
        Total Characters: {characterCount}
      </div>
      <section
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {characters.map((character) => (
          <div
            key={character.id}
            style={{ margin: "20px 2px", textAlign: "center" }}
          >
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
            <h3>
              {character.gender}{" "}
              <span
                style={{
                  backgroundColor:
                    character.status === "Alive" ? "green" : "red",
                  padding: "5px",
                  borderRadius: "5px",
                }}
              >
                {character.status}
              </span>
              {""} {character.species}
            </h3>
          </div>
        ))}
      </section>
    </div>
  );
}
