import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const headers = new Headers();

   headers.append('Accept', 'application/json');

    fetch('http://localhost:3333/users' , {headers})
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.data);
      });
  },[]);

  return (
    <>
      <h1>Renderização SPA </h1>
      <ul style={{ fontSize: "30px" }}>
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
