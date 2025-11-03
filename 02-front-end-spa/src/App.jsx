import { useEffect, useState } from 'react';

 // A responsabilidade visual é desacoplada para o front-end e as regras de negócio para o back-end.
 // SPA - Toda interface da aplicação é construída pelo JavaScript durante o tempo de execução

 //É um único carregamento principal e, por isso, a tela não pisca

 //Problema de SEO (indexação): não há tempo de espera para carregar todas as informações.

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
