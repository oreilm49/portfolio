const keystone = require('keystone');
const Types = keystone.Field.Types;

const Image = new keystone.List('Image', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Image.add({
    title: { type: String },
    image: { type: Types.CloudinaryImage },
    description: { type: Types.Textarea, height: 150 },
});

Image.relationship({ ref: 'Project', path: 'gallery' });

Image.register();
