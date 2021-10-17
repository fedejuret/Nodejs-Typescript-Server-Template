import express from 'express';
import router from './routes/api_v1';
require('dotenv').config()

// Init
const app = express();

// Routes
app.use('/api/v1', router);


// Init server
app.listen(process.env.PORT, () => {
    console.log('Server on port ' + process.env.PORT);
});
