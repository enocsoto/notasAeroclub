import envs from '../config/env-config.js';
import app from './server.js';

app.listen(envs.port, ()=> {
    console.log(`server listen on port: ${envs.port}`);
})
export default app;