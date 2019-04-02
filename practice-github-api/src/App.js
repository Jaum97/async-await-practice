import React, { useState, useEffect } from "react";

export default function App() {
  const { log: l } = console;

  const [repositories, setRepositories] = useState([]);

  async function getRepos(user) {
    const response = await fetch(`https://api.github.com/users/${user}/repos`);
    return await response.json();
  }

  useEffect(() => {
    getRepos("jaum97").then(response => setRepositories(response));
  }, []);

  return (
    <ul>
      {repositories.map(repo => (
        <li key={repo.id}>
          <strong>{repo.name}</strong>
        </li>
      ))}
    </ul>
  );
}
