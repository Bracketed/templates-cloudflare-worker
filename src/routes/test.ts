import { Hono } from 'hono';
import { trimTrailingSlash } from 'hono/trailing-slash';

const app = new Hono<{ Bindings: Env }>({ strict: true });

app.use(trimTrailingSlash());

app.get('/', (c) => c.json({ name: 'Cloudflare' }));
