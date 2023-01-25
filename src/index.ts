import * as express from 'express';
import { Express, NextFunction, Request, Response } from 'express';
import { AppError } from './AppError';
import { MockService } from './MockService';
import { idValidator, validateInput } from './validators';

const app: Express = express();
app.use(express.json());

const port = 4000;
const basePath = "/api";


// dependency injection
const service: MockService = new MockService();

app.get(`${basePath}/posts/:id`, idValidator, (req: Request, res: Response) => {
  validateInput(req, res);
  const post: Post | undefined = service.getPost(parseInt(req.params['id']));

  if (post) {
    res.send(post);
  } else {
    throw new AppError(404, `Post not found with id ${parseInt(req.params['id'])}`);
  }
});

app.post(`${basePath}/posts`, (req: Request, res: Response) => {
  res.send('Express + TypeScript Server asdasdasd');
});

app.put(`${basePath}/posts/:id`, idValidator, (req: Request, res: Response) => {
  validateInput(req, res);
  res.send('Express + TypeScript Server asdasdasd');
});

app.delete(`${basePath}/posts/:id`, idValidator, (req: Request, res: Response) => {
  validateInput(req, res);
  res.send('Express + TypeScript Server asdasdasd');
});

const errorHandler = (error: AppError | Error, req: Request, res: Response, next: NextFunction) => {
  console.error("An error occurred", error.message)
  const statusCode = error instanceof AppError ? error.statusCode : 500;
  return res.status(statusCode).json({ errorMessage: error.message });
}

app.use(errorHandler);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});


