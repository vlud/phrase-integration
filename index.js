const express = require('express');
const app = express();

app.get('/', (req, res) => {
	console.log('Got', req);

    res.send('Got something');

});

app.listen(3000, () => console.log('Gator app listening on port 3000!'
