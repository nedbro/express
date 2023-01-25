import * as express from 'express';
import { Express, NextFunction, Request, Response } from 'express';
import { body } from 'express-validator';
import { AppError } from './AppError';
import { MockService } from './MockService';
import { Post } from './Post';
import { idValidator, textValidator, validateInput } from './validators';
import { TypedRequest } from './TypedRequest';

const app: Express = express();
app.use(express.json());

const port = 4000;
const basePath = "/api";

// dependency injection
const service: MockService = new MockService();

app.get(`${basePath}/posts/:id`, idValidator, (req: TypedRequest<never, never, { id: string }>, res: Response<Post>) => {
  validateInput(req, res);
  const post: Post | undefined = service.getPost(parseInt(req.params.id));

  if (post) {
    res.send(post);
  } else {
    throw new AppError(404, `Post not found with id ${parseInt(req.params.id)}`);
  }
});

app.post(`${basePath}/posts`,
  textValidator,
  body('id').not().exists(),
  (req: TypedRequest<Omit<Post, "id">, never, never>, res: Response<Post>) => {
    validateInput(req, res);

    const post = new Post(req.body.text);
    service.addPost(post);
    res.send(post);
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


