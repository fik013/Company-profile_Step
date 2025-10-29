
import { readdirSync } from 'fs';
import * as path from 'path';
import { ViteDevServer } from 'vite';

export const apiMiddlewarePlugin = () => ({
  name: 'api-middleware',
  configureServer(server: ViteDevServer) {
    const apiDir = path.resolve(__dirname, 'src/api');
    const apiFiles = readdirSync(apiDir).filter(file => file.endsWith('.ts'));

    for (const file of apiFiles) {
      const routePath = `/api/${path.basename(file, '.ts')}`;
      server.middlewares.use(routePath, async (req, res, next) => {
        try {
          const module = await server.ssrLoadModule(path.join(apiDir, file));
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
  }
});
