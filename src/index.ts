import * as express from 'express'
import {Express, Request, Response} from 'express';

const app: Express = express();
app.use(express.json());


const port = 4000;
const basePath = "/api";

app.get(`${basePath}/posts/:id`, (req: Request, res: Response) => {
  res.send('Express + TypeScript Server asdasdasd');
});

app.post(`${basePath}/posts`, (req: Request, res: Response) => {
  res.send('Express + TypeScript Server asdasdasd');
});

app.put(`${basePath}/posts/:id`, (req: Request, res: Response) => {
  res.send('Express + TypeScript Server asdasdasd');
});

app.delete(`${basePath}/posts/:id`, (req: Request, res: Response) => {
  res.send('Express + TypeScript Server asdasdasd');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});