const express = require('express');
const app = express();
app.use(express.json());
let data = [{id:1, name:"Item1"}];
app.get('/items', (req, res)=>res.json(data));
app.post('/items', (req,res) => {
    data.push(req.body);
    res.send("Item added");
});
app.listen(3000, () => console.log("Server running on port 3000"));