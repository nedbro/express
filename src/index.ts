import * as express from 'express'
import { Express, NextFunction, Request, Response } from 'express';
import { param, Result, ValidationChain, ValidationError, validationResult } from 'express-validator';

const app: Express = express();
app.use(express.json());

const port = 4000;
const basePath = "/api";

class AppError extends Error {
  statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
  }
}

const idValidator: ValidationChain = param('id').exists().toInt().custom(value => !isNaN(value));

app.get(`${basePath}/posts/:id`, idValidator, (req: Request, res: Response) => {
  validateInput(req, res);
  res.send('Express + TypeScript Server asdasdasd');
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

const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
  console.error("An error occurred", error.message)
  return res.status(400).json({ errorMessage: error.message });
}

app.use(errorHandler);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});


const validateInput = (req: Request, res: Response): void => {
  const errors: Result<ValidationError> = validationResult(req);

  if (!errors.isEmpty()) {
    const errorMessage: string = Object.entries(errors.mapped()).map(entrySet => `${entrySet[0]}: ${entrySet[1].msg}`).join(",");
    throw new AppError(400, errorMessage);
  }
}
