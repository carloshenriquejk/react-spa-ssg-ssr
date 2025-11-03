 //É um único carregamento principal e, por isso, a tela não pisca

// Ele gera uma página estática onde todo mundo que acessa essa página em um intervalo de 5 minutos
// acessa a mesma versão da página. Isso é interessante quando os dados da requisição dificilmente mudam. 

function App({ users }) {
  return (
    <>
      <h1>Renderização SSS </h1>
      <ul style={{ fontSize: "30px" }}>
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </>
  );
}

export const getStaticProps = async () => {
  const headers = new Headers();

  headers.append('Accept', 'application/json');
  const response = await fetch('http://localhost:3333/users', { headers });
  const data = await response.json();
  return {
    props: {
      users: data.data,
    },
    revalidate: 5,
  };
};

export default App;
