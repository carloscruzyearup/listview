const express = require('express')
const app = express()
const port = 3000

let data = require('./data/test.json')

app.set('view engine', 'ejs')

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname))


app.get('/', (req, res) => {
	let title = 'My Website'
	let heading = 'Our Home Page'
	res.render('pages/index', {
		'title': title,
		'heading': heading
	})
})

app.get('/about', (req, res) => {
	let title = 'My Website'
	let heading = 'Our About Page'
	res.render('pages/about', {
		'title': title,
		'heading': heading
	})
})

app.get('/contact', (req, res) => {
	let title = 'My Website'
	let heading = 'Our Contact Page'
	res.render('pages/contact', {
		'title': title,
		'heading': heading
	})
})

app.get('/users', (req, res) => {
	let title = 'My Website'
	let heading = 'My Users Page'
	res.render('users/index', {
		'title': title,
		'heading': heading,
		'users': data
	})
})

app.get('/users/view/:id', function(req, res) {
	let title = `View User ${req.params.id}`
	let heading = `View User ${req.params.id}`
	let id = req.params.id
	res.render('users/view', {
		'title': title,
		'heading': heading,
		'user': data[--id]
	})
})


app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
