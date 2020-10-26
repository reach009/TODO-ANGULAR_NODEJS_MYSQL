"use strict";

var dbConn = require("./../../config/db.config");

// Todo object create

var Todo = function (todo) {
    this.title = todo.title;
    this.completed = todo.completed;
};

Todo.create = function (newTodo, result) {
    dbConn.query("INSERT INTO todo set ?", newTodo, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Todo.findById = function (id, result) {
    dbConn.query("Select * FROM todo where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

Todo.findAll = function (result) {
    dbConn.query("Select * from todo", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log("todo : ", res);
            result(null, res);
        }
    });
};

Todo.update = function (id, todo, result) {
    dbConn.query(
        "UPDATE todo SET title=?,completed=? WHERE id = ?",
        [
            todo.title,
            todo.completed,
            id,
        ],
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        }
    );
};

Todo.delete = function (id, result) {
    dbConn.query("DELETE FROM todo WHERE id = ?", [id], function (
        err,
        res
    ) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};
module.exports = Todo;
