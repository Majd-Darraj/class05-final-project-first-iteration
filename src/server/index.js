import express from "express";
import path from 'path';
import bodyParser from 'body-parser';

import apiRoutes from './routes';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', apiRoutes);

app.use(express.static(path.resolve(__dirname, '..', 'client')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'client', 'index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
