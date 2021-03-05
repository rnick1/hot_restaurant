// Dependencies

const path = require('path')

//Routes
//html get requests to show the user the html page content
module.exports = (app) => {

    app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/home.html')));

    app.get('/table', (req, res) => res.sendFile(path.join(__dirname, '..//table.html' )));

    app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, '..//reserve.html' )));

}
