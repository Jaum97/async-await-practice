import React, { useState, useEffect } from "react";

export default function App() {
  const { log: l, table: t } = console;

  const [repositories, setRepositories] = useState([]);

  async function getRepos(fetch, user) {
    l(fetch);
    if (!fetch) return;
    const response = await fetch(`https://api.github.com/users/${user}/repos`);
    t(await response);
    return await response.json();
  }

  useEffect(() => {
    getRepos(window.fetch, "jaum97").then(response => {
      t(response);
      setRepositories(response);
    });
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
