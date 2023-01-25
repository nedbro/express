import { Query } from 'express-serve-static-core';
import { Request } from 'express';

export interface TypedRequest<B, Q extends Query, R extends Record<string, string>> extends Request {
    body: B,
    query: Q,
    params: R
}