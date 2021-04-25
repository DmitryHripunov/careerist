import express from 'express';
import ReactDOM from 'react-dom/server';

import { App } from '../App';
import { indexTemplate } from './indexTemplate';
import axios from 'axios';

const app = express();
const PORT = process.env.PORT || 5000;

// app.use('/static', express.static('./dist/client'));

app.get('/', (req, res) => {
  res.send(indexTemplate(ReactDOM.renderToString(App())));
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
