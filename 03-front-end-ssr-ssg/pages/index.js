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
