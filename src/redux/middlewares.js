import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';

const middleware = [];
const logger = createLogger();

middleware.push(logger, thunk);
// commiting logger for release
// middleware.push( thunk);

export default middleware;

