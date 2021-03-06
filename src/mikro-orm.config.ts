import { __prod__ } from './constants';
import { Post } from './enitities/Post';
import { MikroORM } from '@mikro-orm/core';
import path from 'path';
import { User } from './enitities/User';

export default {
  migrations: {
    path: path.join(__dirname, './migrations'),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post, User],
  dbName: 'stripe-example',
  user: 'postgres',
  password: 'admin',
  type: 'postgresql',
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
