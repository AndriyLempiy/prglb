const db = require('../models');

exports.getAll = async () => {
	return await db.User.findAll();
};

exports.getById = async id => {
	return await db.User.findById(id);
};

exports.create = async description => {
	// return await db.User.create({ description, completed: false });
};

exports.update = async (id, data) => {
	const user = await getById(id);
	// return await db.User.update({ description, data });
};

exports.delete = async id => {
	const user = await getById(id);
	return await db.User.destroy();
};
