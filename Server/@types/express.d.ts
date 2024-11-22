import * as express from "express";

declare global {
  namespace Express {
    interface Request {
      userId?: string; // Adiciona a propriedade `userId` ao tipo Request
    }
  }
}