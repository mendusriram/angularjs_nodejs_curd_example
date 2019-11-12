module.exports = function(app){
    app.use('/', require('./api/index'));
    app.use('/users', require('./api/users/login'));
	app.use('/users', require('./api/users/register'));
	app.use('/users', require('./api/users/details'));
	app.use('/users', require('./api/users/delete'));
}