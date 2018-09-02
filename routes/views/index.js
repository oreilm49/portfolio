var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';
	
	// load Projects
	view.query('Project', keystone.list('Project').model.find().sort('sortOrder'));

	// Render the view
	view.render('index', { layout: 'default_layout' });
};
