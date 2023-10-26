import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.header('auth-user');
    console.log(authHeader);
    
    if (!authHeader) {
      return res.status(401).json({ message: 'Accès non autorisé. Token manquant.' });
    }

    try {
      const decodedToken = jwt.verify(authHeader, 'yourSecretKey');
      console.log(decodedToken);
      
      if (typeof decodedToken === 'object' && 'userId' in decodedToken) {
        req['user'] = (decodedToken as jwt.JwtPayload).userId;
        next();
      } else {
        return res.status(401).json({ message: 'Accès non autorisé. Token invalide.' });
      }
    } catch (error) {
      return res.status(401).json({ message: 'Accès non autorisé. Token invalide.' });
    }
  }
}
