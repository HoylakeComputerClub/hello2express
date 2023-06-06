const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({"message": "Hello from the node api"});
});


const port = 3031;
app.listen(port, () => console.log("running on port " + port));