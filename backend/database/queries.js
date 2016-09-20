var promise = require('bluebird');

var options = {
	promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/beanbean';
var db = pgp(connectionString);

function getAllUsers(req, res, next) {
  db.any('select * from users')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL users'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function getSingleUser(req, res, next) {
  var userID = parseInt(req.params.id);
  db.one('select * from users where id = $1', userID)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE user'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

function createUser(req, res, next) {
  req.body.highscore = parseInt(req.body.highscore);
  req.body.over_eighteen = req.body.over_eighteen == "true" ? true : false;
  db.none('insert into users(username, over_eighteen, highscore)' +
      'values(${username}, ${over_eighteen}, ${highscore})',
    req.body)
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one user'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

module.exports = {
	getAllUsers: getAllUsers,
	getSingleUser: getSingleUser,
	createUser: createUser
};