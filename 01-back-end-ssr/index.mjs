import express from 'express';
import cors from 'cors';

const app = express();
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

app.set('view engine', 'ejs');

app.get('/users', (req, res) => {
  const users = [
    {
      id: 1,
      name: 'Max almeida',
    },
    {
      id: 2,
      name: 'Mayke brito',
    },
    {
      id: 3,
      name: 'Paula Fernandes',
    },
  ];

  // Check if client wants JSON response
  if (req.header('Accept') === 'application/json') {
    return res.json({ data: users });
  }

  // Render EJS template with users data
  return res.render('users/list', { users });
});

app.listen(3333, () => {
  console.log('Server running on port 3333');
});