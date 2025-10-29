import { readdirSync } from 'fs';
import * as path from 'path';
import { Connect } from 'vite';

export const apiMiddleware = (app: Connect.Server) => {
  const apiDir = path.resolve(__dirname, 'src/api');
  const apiFiles = readdirSync(apiDir).filter(file => file.endsWith('.ts'));

  for (const file of apiFiles) {
    const routePath = `/api/${path.basename(file, '.ts')}`;
    app.use(routePath, async (req, res, next) => {
      try {
        const module = await import(path.join(apiDir, file));
        const handler = module.default;
        if (typeof handler === 'function') {
          await handler(req, res);
        } else {
          next();
        }
      } catch (error) {
        console.error(`Error handling ${req.url}:`, error);
        res.statusCode = 500;
        res.end('Internal Server Error');
      }
    });
  }
};