import { Router } from 'express';

export var router = Router();

router.get('/', (req, res) => {
  return res.json({ message: 'Hello World' });
});

console.log('adding all the routes in routes.ts')

export default router;
