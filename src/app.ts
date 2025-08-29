import Fastify from 'fastify';
import { CONFIG } from './config/constants';
import cors from '@fastify/cors';
const helmet = require('@fastify/helmet')

const SERVER = Fastify({ logger: true });

const PORT = parseInt(CONFIG.port || '3000', 10);

SERVER.register(cors, {
  origin: true,
  credentials: true
});

SERVER.register(helmet)

// Basic route
SERVER.get('/', async (request, reply) => {
  return { message: 'Welcome to Node Fastify TypeScript Boilerplate' };
});

// Health check route
SERVER.get('/health', async (request, reply) => {
  return { status: 'OK', timestamp: new Date().toISOString() };
});

// Start server
SERVER.listen({ port: PORT, host: '0.0.0.0' }, (err) => {
  if (err) {
    SERVER.log.info(err);
    process.exit(1);
  }
  SERVER.log.info(`Server is running on port ${PORT}`);
});

export { SERVER };
