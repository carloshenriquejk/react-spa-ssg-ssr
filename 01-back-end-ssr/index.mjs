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
      name: 'Max Almeida',
    },
    {
      id: 2,
      name: 'Mayke Brito',
    },
    {
      id: 3,
      name: 'Paula Fernandes',
    },
  ];

  //API Rest
  if (req.header('Accept') === 'application/json') {
    return res.json({ data: users });
  }

  return res.render('users/list');
});

app.listen(3333, () => {
  console.log('Server running on port 3333');
});