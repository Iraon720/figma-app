import { setupWorker } from 'msw';
import { handlers } from './Handler';
export default setupWorker(...handlers);
