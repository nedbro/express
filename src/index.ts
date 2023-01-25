import * as express from 'express'
import {Express, Request, Response} from 'express';


const app: Express = express();

const port = 4000;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server asdasdasd');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});