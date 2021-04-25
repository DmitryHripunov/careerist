import express from 'express';
import ReactDOM from 'react-dom/server';
import comression from 'compression';
import helmet from 'helmet';

import { App } from '../App';
import { indexTemplate } from './indexTemplate';

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

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
