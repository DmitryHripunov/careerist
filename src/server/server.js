import express from 'express';
import ReactDOM from 'react-dom/server';
import comression from 'compression';
import helmet from 'helmet';

import { App } from '../App';
import { indexTemplate } from './indexTemplate';
import axios from "axios";

const PORT = process.env.PORT || 5000;
const IS_DEV = process.env.NODE_ENV !== 'production';

const app = express();
app.use('/static', express.static('./dist/client'));

if (!IS_DEV) {
  app.use(comression());
  app.use(helmet({
    contentSecurityPolicy: false,
  }));
}

app.get('/', (req, res) => {
  res.send(indexTemplate(ReactDOM.renderToString(App())));
});

app.get('/', (req, res) => {
  axios
    .post(
      `http://localhost:${PORT}`,
      {
        headers: { 'Content-type': 'application/json' },
      }
    )
    .then(({ data }) => {
      res.send(
        console.log(data)
      //   indexTemplate(ReactDOM.renderToString(App()), data["access_token"])
      );
    })
    .catch(console.log);
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
