import { Hono } from 'hono';
import { trimTrailingSlash } from 'hono/trailing-slash';

import '@routes/routes';

const app = new Hono<{ Bindings: Env }>({ strict: true });

app.use(trimTrailingSlash());

export default app;
