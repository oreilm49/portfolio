const keystone = require('keystone');
const Types = keystone.Field.Types;

const Project = new keystone.List('Project', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Project.add({
	title: { type: String, required: true },
	image: { type: Types.CloudinaryImage },
	domain: { type: String },
	github: { type: String },
	technologies: { type: Types.TextArray },
	short_description: { type: String },
	description: { type: String },
	images: {type: Types.CloudinaryImages}
	}
	);

Project.register();
