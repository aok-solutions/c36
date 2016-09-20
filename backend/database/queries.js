var promise = require('bluebird');

var options = {
	promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/beanbean';
var db = pgp(connectionString);

module.exports = {
	getAllUsers: getAllUsers,
	getSingleUser: getSingleUser,
	createUser: createUser,
	updateUser: updateUser,
	removeUser: removeUser
};