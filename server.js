const express = require('express');
let app = express();
let port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + 'index.html');
});
app.get('/addTwoNumbers', (req, res) => {
    let cd = 200;
    let msg = 'success'
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    let sum = (num1) + (num2);
    res.json({
        Status: msg,
        code: cd,
        data: sum
    })
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});