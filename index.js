const express = require('express');
const cors = require("cors");
const dbConnect = require('./src/utils/dbConnect');
const app = express();
const userRouter = require('./src/routes/users.route');
const port = 5008;

app.use(cors());
app.use(express.json());

dbConnect();
app.use('/user', userRouter)

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.all('*', (req, res) => {
    res.send('No Route Found')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})