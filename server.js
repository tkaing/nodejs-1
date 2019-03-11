const express = require('express')
const app = express()

// Parsing
app.use(express.json()); 

// GET method route
app.get('/hello', function (req, res) 
{	
	res.send('Hello World')
})

// POST method route
app.post('/chat', function (req, res) 
{		
	if (req.body.msg === 'ville') {
		res.send('Nous sommes à Paris');
	}

	if (req.body.msg === 'météo') {
		res.send('Il fait beau');
	}
})

var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('Example app listening on port ', port)
})