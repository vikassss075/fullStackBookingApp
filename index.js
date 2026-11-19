const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const router = require('./routes/userRoutes');
const path = require('path');
app.use(express.json());
const connection = require('./utils/db-connection');
app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})
app.use('/users', router);
connection.sync({force:false})
.then((result)=>{
    app.listen(3000);
    console.log('server is running...');
})
.catch((error)=>{
    console.log(error);
})